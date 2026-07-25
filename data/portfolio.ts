import {
  BrainCircuit,
  Code2,
  DatabaseZap,
  Eye,
  Layers3,
  LockKeyhole,
  Network,
  Palette,
  Sparkles,
  Workflow,
} from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  stack: string[];
  status: "Concept" | "Prototype" | "In progress" | "Live-ready";
  liveUrl: string;
  githubUrl: string;
  accent: "gold" | "aqua" | "emerald";
  artifactNo: string;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
  icon: typeof BrainCircuit;
  mastery: number;
  description: string;
  skills: string[];
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type Experiment = {
  title: string;
  description: string;
  signal: string;
};

export type IdentityPillar = {
  title: string;
  icon: typeof BrainCircuit;
  description: string;
};

export const identityPillars: IdentityPillar[] = [
  {
    title: "AI Engineering",
    icon: BrainCircuit,
    description:
      "LLM interfaces, intelligent workflows, model-aware product decisions, and practical automation systems.",
  },
  {
    title: "Full-stack Development",
    icon: Code2,
    description:
      "Typed product architecture across React, Next.js, APIs, validation, storage, and deployment-ready foundations.",
  },
  {
    title: "Creative Systems",
    icon: Sparkles,
    description:
      "Interactive worlds, motion languages, generative UI patterns, and design systems with emotional gravity.",
  },
  {
    title: "Automation",
    icon: Workflow,
    description:
      "Agents, scripts, dashboards, and repeatable processes that remove friction from ambitious work.",
  },
  {
    title: "Product Thinking",
    icon: Layers3,
    description:
      "Clear user journeys, risk-aware scoping, future extensibility, and interfaces made for actual outcomes.",
  },
];

export const projects: Project[] = [
  {
    slug: "ai-study-companion",
    title: "AI Study Companion",
    category: "Learning Intelligence",
    description:
      "A personalized study system that turns scattered notes into adaptive lessons, recall loops, and daily focus plans.",
    longDescription:
      "An AI-first learning chamber designed to analyze study material, generate active-recall sessions, and guide a student toward durable understanding instead of passive review.",
    stack: ["Next.js", "OpenAI API", "Zod", "SQLite", "Prisma"],
    status: "Prototype",
    liveUrl: "#",
    githubUrl: "#",
    accent: "gold",
    artifactNo: "I",
    highlights: [
      "Adaptive retrieval practice",
      "Structured prompt pipelines",
      "Progress-aware study rituals",
    ],
  },
  {
    slug: "realxp-skill-tree",
    title: "RealXP Skill Tree App",
    category: "Gamified Growth",
    description:
      "A life-progression dashboard where real skills unlock like a premium role-playing skill tree.",
    longDescription:
      "A product experiment that transforms learning goals into visible mastery paths, elegant feedback loops, and motivating skill constellations.",
    stack: ["React", "TypeScript", "Framer Motion", "PostgreSQL-ready"],
    status: "In progress",
    liveUrl: "#",
    githubUrl: "#",
    accent: "emerald",
    artifactNo: "II",
    highlights: ["Skill graph modeling", "Progress rituals", "Motion-led interaction design"],
  },
  {
    slug: "portfolio-palace",
    title: "Portfolio Palace",
    category: "Creative Engineering",
    description:
      "A cinematic portfolio system where projects are presented as artifacts inside a living architectural world.",
    longDescription:
      "A self-referential portfolio architecture that treats identity, work, skills, and contact as connected chambers rather than page sections.",
    stack: ["Next.js", "GSAP", "Lenis", "Tailwind", "Prisma"],
    status: "Live-ready",
    liveUrl: "#",
    githubUrl: "#",
    accent: "aqua",
    artifactNo: "III",
    highlights: ["Palace gate intro", "Project portal modals", "Motion architecture"],
  },
  {
    slug: "ai-automation-agent",
    title: "AI Automation Agent",
    category: "Agentic Systems",
    description:
      "A task orchestration agent that turns repeated digital work into validated, logged, reviewable actions.",
    longDescription:
      "An automation architecture focused on practical reliability: validated inputs, observable actions, graceful fallback paths, and human review points.",
    stack: ["Node.js", "Queues", "LLMs", "Zod", "Audit Logs"],
    status: "Concept",
    liveUrl: "#",
    githubUrl: "#",
    accent: "gold",
    artifactNo: "IV",
    highlights: ["Guardrailed tool calls", "Rate-aware execution", "Human-in-the-loop design"],
  },
  {
    slug: "computer-vision-experiment",
    title: "Computer Vision Experiment",
    category: "Visual AI",
    description:
      "A lightweight vision prototype for detecting patterns, annotating images, and translating visual input into decisions.",
    longDescription:
      "A research-forward experiment for image understanding, feature extraction, and clear visual feedback loops for non-technical users.",
    stack: ["Python", "OpenCV", "TensorFlow", "FastAPI", "Dashboards"],
    status: "Prototype",
    liveUrl: "#",
    githubUrl: "#",
    accent: "aqua",
    artifactNo: "V",
    highlights: ["Image annotation", "Model output explainability", "Dataset hygiene"],
  },
  {
    slug: "scholarship-intelligence-dashboard",
    title: "Scholarship Intelligence Dashboard",
    category: "Decision Systems",
    description:
      "A dashboard for surfacing scholarships, deadlines, fit signals, and application priorities from noisy opportunity data.",
    longDescription:
      "A data product concept that organizes scholarship opportunities into a clear decision surface with scoring, reminders, and evidence-backed next actions.",
    stack: ["Next.js", "Prisma", "SQLite", "Data Pipelines", "Charts"],
    status: "In progress",
    liveUrl: "#",
    githubUrl: "#",
    accent: "emerald",
    artifactNo: "VI",
    highlights: ["Opportunity scoring", "Deadline intelligence", "Application workflow map"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / ML",
    icon: BrainCircuit,
    mastery: 86,
    description: "Model-aware systems, prompt architecture, agents, evaluation, and practical ML workflows.",
    skills: ["LLM Apps", "Prompt Engineering", "Agents", "Python", "Evaluation", "Computer Vision"],
  },
  {
    title: "Frontend",
    icon: Palette,
    mastery: 90,
    description: "Interface architecture, interaction design, animation systems, accessibility, and performance.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend",
    icon: Network,
    mastery: 82,
    description: "APIs, validation, service boundaries, structured logging, and reliable data flows.",
    skills: ["Route Handlers", "Server Actions", "Node.js", "FastAPI", "Auth Patterns", "Queues"],
  },
  {
    title: "Databases",
    icon: DatabaseZap,
    mastery: 78,
    description: "Pragmatic schema design, migrations, seed data, local-first iteration, and SQL foundations.",
    skills: ["SQLite", "PostgreSQL", "Prisma", "Schema Design", "Indexes", "Data Modeling"],
  },
  {
    title: "Automation",
    icon: Workflow,
    mastery: 84,
    description: "Repeatable workflows, agent tooling, dashboards, integrations, and operational leverage.",
    skills: ["Scripts", "Agents", "Cron Design", "Pipelines", "Dashboards", "Integrations"],
  },
  {
    title: "Security",
    icon: LockKeyhole,
    mastery: 80,
    description: "Validation, least privilege, privacy-minded logging, spam resistance, and secure defaults.",
    skills: ["Zod", "CSP", "Rate Limits", "Honeypots", "Secrets Hygiene", "Input Sanitization"],
  },
  {
    title: "Design",
    icon: Eye,
    mastery: 88,
    description: "Premium visual systems, cinematic composition, typography, motion hierarchy, and polish.",
    skills: ["UI Systems", "Motion", "Typography", "Visual Direction", "UX", "Prototyping"],
  },
  {
    title: "Tools",
    icon: Code2,
    mastery: 83,
    description: "Professional engineering workflow across version control, CI thinking, debugging, and docs.",
    skills: ["Git", "ESLint", "Prettier", "Prisma Studio", "Testing Strategy", "Observability"],
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Foundation",
    title: "Python Foundations",
    description: "Built the grammar of problem solving through Python, algorithms, and practical scripting.",
  },
  {
    year: "Craft",
    title: "Web Development",
    description: "Moved from code that works to interfaces that feel considered, responsive, and useful.",
  },
  {
    year: "Signal",
    title: "AI Engineering Path",
    description: "Studied intelligent systems through LLMs, agents, data workflows, and model-aware design.",
  },
  {
    year: "Artifacts",
    title: "Portfolio Projects",
    description: "Shaped experiments into visible products with backend foundations and polished interaction.",
  },
  {
    year: "Horizon",
    title: "Future Global-scale Systems",
    description: "Aiming toward resilient AI products that blend infrastructure, creativity, and social value.",
  },
];

export const experiments: Experiment[] = [
  {
    title: "AI Agents",
    signal: "Tool orchestration",
    description: "Guardrailed agents that reason, act, log, and invite review before meaningful side effects.",
  },
  {
    title: "Prompt Engineering",
    signal: "Instruction architecture",
    description: "Reusable prompt systems with clear contracts, evaluation loops, and failure-aware behavior.",
  },
  {
    title: "Automation",
    signal: "Operational leverage",
    description: "Small systems that turn recurring digital friction into calm, repeatable workflows.",
  },
  {
    title: "Data Dashboards",
    signal: "Decision surfaces",
    description: "Dashboards built to clarify tradeoffs, not merely decorate metrics.",
  },
  {
    title: "Computer Vision",
    signal: "Visual reasoning",
    description: "Experiments that interpret images, annotate patterns, and explain model outputs.",
  },
  {
    title: "LLM Interfaces",
    signal: "Human + model UX",
    description: "Interfaces that make AI legible, steerable, and useful inside real user journeys.",
  },
];
