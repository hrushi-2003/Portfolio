import { FaAws, FaDocker, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiApachekafka,
  SiCloudflareworkers,
  SiDjango,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { SKILL_GROUPS } from "../data";

const technologies = [
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "Django", Icon: SiDjango, color: "#125840" },
  { name: "Node.js", Icon: FaNodeJs, color: "#4f8f45" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "React", Icon: FaReact, color: "#087ea4" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#242038" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", Icon: SiMongodb, color: "#16864e" },
  { name: "Redis", Icon: SiRedis, color: "#c83037" },
  { name: "Apache Kafka", Icon: SiApachekafka, color: "#231f32" },
  { name: "Docker", Icon: FaDocker, color: "#087db7" },
  { name: "AWS", Icon: FaAws, color: "#a85312" },
  { name: "Cloudflare Workers", Icon: SiCloudflareworkers, color: "#c75a18" },
];

export default function Technology() {
  return (
    <section id="skills" className="page-section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="sr-only">Technical Skills</h2>
      <ul className="technology-orbs">
        {technologies.map(({ name, Icon, color }) => (
          <li key={name} className="technology-item" title={name}>
            <span className="skill-orb" aria-hidden="true">
              <Icon style={{ color }} />
            </span>
            <span className="sr-only">{name}</span>
          </li>
        ))}
      </ul>
      <dl className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2">
        {SKILL_GROUPS.map(({ title, items }) => (
          <div key={title} className="rounded-2xl bg-tertiary p-5">
            <dt className="font-bold">{title}</dt>
            <dd className="mt-2 text-sm leading-6 text-secondary sm:text-base">{items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
