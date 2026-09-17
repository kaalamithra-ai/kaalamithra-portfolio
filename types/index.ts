export type ServiceIconKey =
  | "lead"
  | "marketing"
  | "ai"
  | "startup"
  | "crm"
  | "cloud"
  | "ecommerce"
  | "branding"
  | "sales"
  | "data"
  | "security";

export interface ServiceSEO {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  number: string;
  name: string;
  /** Short description shown on cards. */
  shortDescription: string;
  icon: ServiceIconKey;
  /** Overview paragraphs for the detail page. */
  overview: string[];
  /** Business problems this service solves. */
  problems: string[];
  /** Intro line for the "Our Solution" section. */
  solutionIntro: string;
  /** Bullet points for the "Our Solution" section. */
  solutionPoints: string[];
  subServices: string[];
  technologies: string[];
  /** Optional live product / app URL built with this service (e.g. a deployed CRM). */
  liveUrl?: string;
  /** Optional label for the live link button (defaults to "Visit Live Website"). */
  liveUrlLabel?: string;
  seo: ServiceSEO;
}

export interface ProjectSubServiceGroup {
  /** Service slug the sub-services belong to. */
  service: string;
  items: string[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Editable placeholder — replace with the real client name. */
  client: string;
  /** Editable placeholder — replace with the real industry. */
  industry: string;
  overview: string;
  /** Editable placeholder where no real information exists yet. */
  challenge: string;
  solution: string;
  /** Slugs of related services (a project can belong to many services). */
  services: string[];
  subServicesUsed: ProjectSubServiceGroup[];
  technologies: string[];
  implementation: string[];
  /** Editable placeholders — replace with real, measurable results. */
  results: string[];
  /** Optional cover image shown on portfolio cards. */
  cover?: string;
  /** Optional real project screenshots shown on the case study. */
  screenshots?: ProjectScreenshot[];
  /** Optional live website URL. */
  liveUrl?: string;
  seo: ServiceSEO;
}

export interface TechnologyCategory {
  name: string;
  description: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: "target" | "badge" | "layers" | "support";
}

export interface WhyCard {
  title: string;
  description: string;
  icon: "partner" | "ai" | "business" | "scale" | "data" | "support";
}
