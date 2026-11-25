import {
  ACESFilmicToneMapping,
  Box3,
  DirectionalLight,
  HemisphereLight,
  Mesh,
  PerspectiveCamera,
  Scene,
  Texture,
  Vector3,
  WebGLRenderer,
  type Material,
  type Object3D,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import desktopModel from "./assets/models/desktop-pc.glb?url";
import planetModel from "./assets/models/planet.glb?url";
import type { ModelKind } from "./components/ModelView";

const modelUrls = { desktop: desktopModel, planet: planetModel };

function disposeModel(model: Object3D) {
  const materials = new Set<Material>();
  const textures = new Set<Texture>();
  const bitmaps = new Set<ImageBitmap>();

  model.traverse((object) => {
    if (!(object instanceof Mesh)) return;
    object.geometry.dispose();
    const meshMaterials = Array.isArray(object.material) ? object.material : [object.material];
    meshMaterials.forEach((material) => materials.add(material));
  });

  for (const material of materials) {
    for (const value of Object.values(material)) {
      if (value instanceof Texture) textures.add(value);
    }
    material.dispose();
  }

  for (const texture of textures) {
    if (typeof ImageBitmap !== "undefined" && texture.image instanceof ImageBitmap) {
      bitmaps.add(texture.image);
    }
    texture.dispose();
  }

  bitmaps.forEach((bitmap) => bitmap.close());
}

function fitCamera(camera: PerspectiveCamera, controls: OrbitControls, bounds: Box3, kind: ModelKind) {
  const center = bounds.getCenter(new Vector3());
  const direction = kind === "desktop"
    ? new Vector3(20, 3.2, 5).normalize()
    : new Vector3(-4, 3, 6).normalize();

  camera.position.copy(center).add(direction);
  camera.lookAt(center);
  const worldToCamera = camera.quaternion.clone().invert();
  const tanHalfFov = Math.tan(camera.fov * Math.PI / 360);
  const frameWidth = kind === "desktop" && camera.aspect < 1.25 ? 1.18 : 0.94;
  const frameHeight = kind === "desktop" ? 0.92 : 0.86;
  let distance = 0;

  for (const x of [bounds.min.x, bounds.max.x]) {
    for (const y of [bounds.min.y, bounds.max.y]) {
      for (const z of [bounds.min.z, bounds.max.z]) {
        const corner = new Vector3(x, y, z).sub(center).applyQuaternion(worldToCamera);
        const horizontal = Math.abs(corner.x) / (tanHalfFov * camera.aspect * frameWidth);
        const vertical = Math.abs(corner.y) / (tanHalfFov * frameHeight);
        distance = Math.max(distance, corner.z + Math.max(horizontal, vertical));
      }
    }
  }

  camera.position.copy(center).addScaledVector(direction, distance);
  const narrowFrame = Math.max(0, Math.min(1, (1.2 - camera.aspect) / 0.45));
  camera.zoom = kind === "desktop" ? 1.5 + 0.55 * narrowFrame : 1.25;
  camera.far = Math.max(100, distance * 4);
  camera.updateProjectionMatrix();
  controls.target.copy(center);
  controls.update();
}

export function createScene(host: HTMLDivElement, kind: ModelKind) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("webgl2", { alpha: true, antialias: true });
  if (!context) return;

  const renderer = new WebGLRenderer({ canvas, context, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
  renderer.toneMapping = ACESFilmicToneMapping;
  host.append(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(kind === "desktop" ? 25 : 42, 1, 0.1, 150);
  camera.position.set(20, 3, 5);
  scene.add(new HemisphereLight(0xf2edff, 0x231d3b, 1.2));
  const keyLight = new DirectionalLight(0xfff7ed, kind === "desktop" ? 2.15 : 1.4);
  keyLight.position.set(6, 8, 5);
  scene.add(keyLight);

  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.minPolarAngle = Math.PI / 7;
  controls.maxPolarAngle = Math.PI * 0.55;

  const abort = new AbortController();
  const bounds = new Box3();
  let model: Object3D | undefined;
  let visible = true;
  let contextLost = false;
  let lastFrame = 0;

  const draw = () => {
    if (!model || !visible || contextLost) return;
    renderer.render(scene, camera);
    host.dataset.ready = "true";
  };

  const resize = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (model) fitCamera(camera, controls, bounds, kind);
    draw();
  };

  const rotatePlanet = (timestamp: number) => {
    if (!model) return;
    if (lastFrame) model.rotation.y += Math.min(timestamp - lastFrame, 50) * 0.00022;
    lastFrame = timestamp;
    draw();
  };

  const updateRotation = () => {
    lastFrame = 0;
    renderer.setAnimationLoop(kind === "planet" && model && visible && !contextLost ? rotatePlanet : null);
  };

  const loseContext = () => {
    contextLost = true;
    delete host.dataset.ready;
    updateRotation();
  };

  const restoreContext = () => {
    contextLost = false;
    resize();
    updateRotation();
  };

  const observer = new ResizeObserver(resize);
  observer.observe(host);
  controls.addEventListener("change", draw);
  canvas.addEventListener("webglcontextlost", loseContext);
  canvas.addEventListener("webglcontextrestored", restoreContext);

  const loadModel = async () => {
    const response = await fetch(modelUrls[kind], { signal: abort.signal });
    if (!response.ok) throw new Error("Model request failed: " + response.status);
    const buffer = await response.arrayBuffer();
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    const { scene: loadedModel } = await loader.parseAsync(buffer, "");

    if (abort.signal.aborted) {
      disposeModel(loadedModel);
      return;
    }

    if (kind === "desktop") loadedModel.rotation.set(-0.01, -0.2, -0.1);
    model = loadedModel;
    scene.add(loadedModel);
    bounds.setFromObject(loadedModel);
    resize();
    updateRotation();
  };

  void loadModel().catch(() => {
    // Keep the poster on screen if the model cannot be loaded.
  });

  return {
    setVisible(nextVisible: boolean) {
      if (visible === nextVisible) return;
      visible = nextVisible;
      updateRotation();
      draw();
    },
    dispose() {
      abort.abort();
      observer.disconnect();
      controls.dispose();
      canvas.removeEventListener("webglcontextlost", loseContext);
      canvas.removeEventListener("webglcontextrestored", restoreContext);
      renderer.setAnimationLoop(null);
      if (model) disposeModel(model);
      renderer.dispose();
      renderer.forceContextLoss();
      delete host.dataset.ready;
      canvas.remove();
    },
  };
}
