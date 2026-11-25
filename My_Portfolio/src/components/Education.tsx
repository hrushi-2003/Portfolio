import instituteLogo from "../assets/images/mlritm.webp";
import { EDUCATION } from "../data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="page-section" aria-labelledby="education-title">
      <div className="education-panel">
        <div className="education-header">
          <SectionHeading id="education-title" label="Academic background" title="Education." />
        </div>
        <div className="education-body">
          <article className="education-card">
            <div className="education-logo">
              <img src={instituteLogo} alt="" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold">{EDUCATION.degree}</h3>
            <p className="mt-2">{EDUCATION.institution}</p>
            <p className="mt-2 text-sm leading-6 text-secondary">
              {EDUCATION.location}<br />{EDUCATION.dates}
            </p>
            <p className="mt-4 text-sm text-slate-100">CGPA {EDUCATION.cgpa}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
