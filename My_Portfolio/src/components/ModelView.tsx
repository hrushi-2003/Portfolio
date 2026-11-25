import { useEffect, useRef } from "react";
import desktopPoster from "../assets/models/desktop-poster.webp";
import mobilePoster from "../assets/models/mobile-poster.webp";
import planetPoster from "../assets/models/planet-poster.webp";

export type ModelKind = "desktop" | "planet";

export default function ModelView({ kind }: { kind: ModelKind }) {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = layer.current;
    if (!host) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = !("IntersectionObserver" in window);
    let disposed = false;
    let loading = false;
    let scene: ReturnType<typeof import("../scenes").createScene>;

    const update = () => {
      if (motion.matches) {
        scene?.dispose();
        scene = undefined;
        return;
      }

      if (scene) {
        scene.setVisible(visible);
        return;
      }

      if (!visible || loading) return;

      loading = true;
      void import("../scenes")
        .then(({ createScene }) => {
          if (!disposed && visible && !motion.matches) {
            scene = createScene(host, kind);
          }
        })
        .catch(() => {
          // The poster remains visible if WebGL or the model is unavailable.
        })
        .finally(() => {
          loading = false;
        });
    };

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        update();
      }, { rootMargin: "120px" })
      : undefined;

    observer?.observe(host);
    motion.addEventListener("change", update);
    update();

    return () => {
      disposed = true;
      observer?.disconnect();
      motion.removeEventListener("change", update);
      scene?.dispose();
    };
  }, [kind]);

  return (
    <div className="model-view" aria-hidden="true">
      <picture className="model-poster">
        {kind === "desktop" && <source media="(max-width: 639px)" srcSet={mobilePoster} />}
        <img
          src={kind === "desktop" ? desktopPoster : planetPoster}
          alt=""
          loading={kind === "planet" ? "lazy" : "eager"}
          decoding="async"
        />
      </picture>
      <div className="model-layer" ref={layer} />
    </div>
  );
}
