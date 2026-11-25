import { ABOUT_TEXT, FOCUS_AREAS } from "../data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="page-section" aria-labelledby="about-title">
      <SectionHeading id="about-title" label="Introduction" title="Overview." />
      <p className="section-copy mt-4">{ABOUT_TEXT}</p>

      <ul className="focus-grid">
        {FOCUS_AREAS.map(({ title, icon }) => (
          <li key={title} className="focus-card">
            <div className="focus-card-content">
              <img src={icon} alt="" width="64" height="64" loading="lazy" />
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
