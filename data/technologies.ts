import type { TechnologyCategory } from "@/types";

/**
 * Editable technology stack.
 * Only list technologies the company actually works with —
 * add or remove items freely; the UI updates automatically.
 */
export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    name: "AI & Machine Learning",
    description: "Intelligent systems, agents and model integrations.",
    items: ["Python", "OpenAI APIs", "Machine Learning", "AI Agents"],
  },
  {
    name: "Web Development",
    description: "Fast, modern and SEO-friendly web experiences.",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    name: "Backend",
    description: "Robust APIs and server-side systems.",
    items: ["Node.js", "FastAPI", "Django"],
  },
  {
    name: "Databases",
    description: "Reliable data storage and querying.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable, secure infrastructure and delivery pipelines.",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    name: "Data & Analytics",
    description: "Insights, dashboards and reporting.",
    items: ["Pandas", "Power BI"],
  },
  {
    name: "Marketing Technology",
    description: "Platforms that power growth and campaigns.",
    items: [
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
      "Email & WhatsApp Automation",
      "SEO Tools",
    ],
  },
];
