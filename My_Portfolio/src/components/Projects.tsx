import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { PROJECTS, type Project } from "../data";
import SectionHeading from "./SectionHeading";

function ProjectCard({ title, description, image, technologies, links, date }: Project) {
  return (
    <article className="project-card">
      <div className="project-preview">
        {image ? (
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        ) : (
          <div className="support-preview" aria-hidden="true">
            <div className="support-window">
              <div className="support-sidebar"><i /><i /><i /></div>
              <div className="support-thread"><i /><i /><i /></div>
              <span className="support-accent"><HiOutlineSparkles /></span>
            </div>
          </div>
        )}
        <div className="project-links">
          {links.map(({ label, href }) => {
            const Icon = label === "GitHub" ? FaGithub : FaExternalLinkAlt;
            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label + " for " + title}
                title={label}
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
      {date && <p className="mt-2 text-sm font-medium text-secondary">{date}</p>}
      <p className="mb-5 mt-3 text-sm leading-relaxed text-secondary">{description}</p>
      <ul className="project-tags" aria-label="Technologies">
        {technologies.map((technology) => <li key={technology}>#{technology}</li>)}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="page-section" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" label="Selected work" title="Projects." />
      <div className="projects-grid">
        {PROJECTS.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
}
