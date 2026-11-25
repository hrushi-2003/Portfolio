import { FaBriefcase, FaCode } from "react-icons/fa";
import { EXPERIENCE } from "../data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="work" className="page-section" aria-labelledby="work-title">
      <div className="text-center">
        <SectionHeading id="work-title" label="Career" title="Work Experience." />
      </div>

      <ol className="timeline">
        {EXPERIENCE.map(({ role, company, dates, highlights }, index) => (
          <li key={company} className="timeline-item">
            <span className="timeline-marker" aria-hidden="true">
              {index === 0 ? <FaBriefcase /> : <FaCode />}
            </span>
            <div className="timeline-card">
              <h3 className="text-xl font-bold sm:text-2xl">{role}</h3>
              <p className="mt-1 font-semibold text-secondary">{company}</p>
              <p className="timeline-date">{dates}</p>
              <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-100">
                {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
