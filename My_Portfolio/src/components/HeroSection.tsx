import { HERO_CONTENT, PROFILE } from "../data";
import ModelView from "./ModelView";

export default function HeroSection() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="content-container hero-copy">
        <span className="hero-marker" aria-hidden="true" />
        <div className="min-w-0">
          <h1 id="hero-title" className="hero-title">
            Hi, I’m <span className="text-accent">{PROFILE.firstName}</span>
          </h1>
          <p className="hero-subtitle">{HERO_CONTENT}</p>
        </div>
      </div>

      <div className="hero-art">
        <ModelView kind="desktop" />
      </div>

      <a href="#about" className="scroll-link" aria-label="Scroll to the overview">
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
