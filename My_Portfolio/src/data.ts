import blogScreenshot from "./assets/images/blog-preview.webp";
import chatScreenshot from "./assets/images/chat-preview.webp";
import developmentIcon from "./assets/visuals/backend.png";
import aiIcon from "./assets/visuals/creator.png";
import realtimeIcon from "./assets/visuals/mobile.png";
import cloudIcon from "./assets/visuals/web.png";

export const PROFILE = {
  name: "Hrushikesh Reddy Kalsani",
  firstName: "Hrushikesh",
  role: "Full Stack Engineer",
};

export const LINKS = {
  resume: import.meta.env.BASE_URL + "resume.pdf",
  github: "https://github.com/hrushi-2003/",
  linkedin: "https://www.linkedin.com/in/hrushikesh-reddy-kalsani/",
};

export const HERO_CONTENT =
  "I build responsive web apps, scalable APIs, and AI integrations.";

export const ABOUT_TEXT =
  "I’m a full stack engineer who builds responsive web interfaces with React and TypeScript and develops APIs with Python, Django, Node.js, and Express. My work includes real-time messaging and calling, Kafka workflows, and AI integrations. I use PostgreSQL, MongoDB, and Redis for data and deploy applications with Docker and AWS.";

export const FOCUS_AREAS = [
  { title: "Full Stack Development", icon: developmentIcon },
  { title: "Real-Time Systems", icon: realtimeIcon },
  { title: "Cloud & DevOps", icon: cloudIcon },
  { title: "AI Integrations", icon: aiIcon },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "TIQO Technologies",
    dates: "June 2025 – Present",
    highlights: [
      "Develop REST APIs and backend services with Django, Django REST Framework, Node.js, and Express, and optimize queries in PostgreSQL and MySQL.",
      "Build real-time messaging and calling with Django Channels, WebSockets, Redis, and Agora.",
      "Implement asynchronous workflows with Apache Kafka and connect AI models to application features through backend APIs.",
      "Deploy Dockerized applications on AWS using EC2, S3, CloudFront, and Secrets Manager. Build email workflows with IMAP and SMTP.",
      "Contribute to the React Native app and integrate backend services with Zustand for state management.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Morphius",
    dates: "January 2025 – June 2025",
    highlights: [
      "Built REST APIs and real-time features with Node.js, Express, and Socket.IO.",
      "Worked with MongoDB and PostgreSQL to store data and improve data access.",
      "Integrated AWS services for deployments and collaborated on AI-based recommendation systems.",
    ],
  },
];

export const SKILL_GROUPS = [
  { title: "Programming", items: "Python, Java, SQL" },
  {
    title: "Frontend",
    items: "React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Zustand",
  },
  {
    title: "Backend",
    items: "Django, Django REST Framework, Node.js, Express, NestJS, Cloudflare Workers, Prisma",
  },
  { title: "Databases", items: "PostgreSQL, MySQL, MongoDB, SQLite" },
  {
    title: "AI & LLMs",
    items: "Ollama, Whisper, local LLM integration, speech-to-text, knowledge-grounded responses",
  },
  { title: "DevOps & Tools", items: "Docker, Apache Kafka, Redis, Celery, Git, GitHub" },
  {
    title: "Cloud",
    items: "AWS EC2, S3, CloudFront, Secrets Manager, S3-compatible object storage",
  },
  { title: "Integrations", items: "WebSockets, IMAP, SMTP, Firebase, Agora" },
];

type ProjectLink = {
  label: "GitHub" | "Live demo";
  href: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  date?: string;
  image?: { src: string; alt: string };
};

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Customer Support Platform",
    description:
      "Cluevia is a multi-tenant support workspace with role-based access, live ticket conversations, and an embeddable widget. Ollama and Whisper classify tickets, transcribe recordings, and draft replies grounded in the knowledge base. Celery handles background jobs and SLA alerts.",
    technologies: ["Ollama", "Whisper", "Celery", "WebSockets"],
    links: [{ label: "GitHub", href: "https://github.com/hrushi-2003/cluevia" }],
  },
  {
    title: "Real-Time Chat Application",
    date: "March 2025",
    image: { src: chatScreenshot, alt: "HrushiChats interface showing a sample conversation" },
    description:
      "A messaging app that delivers text and images in real time with Socket.IO. Node.js and Express power the APIs, MongoDB stores conversations, and React with Zustand keeps the interface in sync.",
    technologies: ["React", "Zustand", "Node.js", "Express", "MongoDB", "Socket.IO"],
    links: [{ label: "Live demo", href: "https://chatapplication-h1ll.onrender.com/" }],
  },
  {
    title: "Serverless Blogging Platform",
    date: "November 2024",
    image: { src: blogScreenshot, alt: "Serverless Blogging Platform signup screen" },
    description:
      "A blogging platform with a Hono API running on Cloudflare Workers. It uses PostgreSQL with Prisma ORM and Prisma Accelerate to manage database queries and connection pooling.",
    technologies: ["Cloudflare Workers", "Hono", "PostgreSQL", "Prisma"],
    links: [
      { label: "GitHub", href: "https://github.com/hrushi-2003/Blog_website" },
      { label: "Live demo", href: "https://blog-website-one-wheat.vercel.app/signup" },
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech in Computer Science",
  institution: "Marri Laxman Reddy Institute of Technology and Management",
  dates: "December 2020 – April 2024",
  location: "Hyderabad, Telangana",
  cgpa: "7.9 / 10",
};

export const CONTACT = {
  location: "Gachibowli, Hyderabad, Telangana",
  phone: "+91 98854 76998",
  phoneHref: "tel:+919885476998",
  email: "hrushikesh200802@gmail.com",
};
