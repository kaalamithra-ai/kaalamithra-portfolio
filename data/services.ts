import type { Service } from "@/types";

/**
 * Single source of truth for the 11 services.
 * The services grid, every service detail page, filters, SEO metadata,
 * related projects and the contact form all read from this file.
 */
export const SERVICES: Service[] = [
  {
    slug: "lead-generation",
    number: "01",
    name: "Lead Generation Engine",
    shortDescription:
      "High-converting funnels and campaigns that bring quality leads to your business.",
    icon: "lead",
    overview: [
      "Predictable growth starts with a predictable pipeline. The Lead Generation Engine combines strategy, design, technology and data to turn your website and campaigns into a consistent source of qualified leads.",
      "Instead of relying on one-off campaigns, we build end-to-end lead systems — landing pages, capture forms, CRM integration, automation and analytics — so every rupee you spend on marketing compounds over time.",
    ],
    problems: [
      "Inconsistent flow of quality leads",
      "Website traffic that never converts into enquiries",
      "Leads lost in spreadsheets and inboxes",
      "No clarity on which campaigns actually work",
      "Slow follow-up that lets prospects go cold",
    ],
    solutionIntro:
      "We design and build a complete lead generation system for your business — from strategy and landing pages to capture, qualification and CRM integration.",
    solutionPoints: [
      "High-converting landing pages and marketing funnels",
      "Lead capture and qualification workflows",
      "CRM integration so no lead is ever lost",
      "Automated email and WhatsApp follow-up",
      "Tracking and analytics for every campaign",
    ],
    subServices: [
      "Lead Generation Strategy",
      "Landing Page Development",
      "Lead Capture Systems",
      "Conversion Rate Optimization",
      "Marketing Funnels",
      "Lead Qualification",
      "CRM Integration",
      "Email Automation",
      "WhatsApp Lead Automation",
      "Retargeting",
      "Campaign Tracking",
      "Lead Analytics",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Google Ads",
      "Meta Ads",
      "CRM Integrations",
      "Email Automation",
      "Analytics",
    ],
    liveUrl: "https://kaalamithra-lead-generation.vercel.app/",
    liveUrlLabel: "Visit Live Webpage",
    seo: {
      title: "Lead Generation Engine | KAALAMITHRA AI Tech Solutions",
      description:
        "High-converting funnels, landing pages and campaigns that bring quality leads to your business. Strategy, automation, CRM integration and analytics.",
    },
  },
  {
    slug: "performance-marketing",
    number: "02",
    name: "Performance Marketing",
    shortDescription:
      "ROI-driven advertising across Google, Meta and other platforms to maximize conversions and growth.",
    icon: "marketing",
    overview: [
      "Advertising without a system is guesswork. Our performance marketing practice plans, launches and optimizes ROI-driven campaigns across Google, Meta and other platforms — with every decision backed by data.",
      "From campaign structure and creative testing to conversion tracking and ROI analysis, we treat your ad budget as an investment to be optimized, not an expense to be managed.",
    ],
    problems: [
      "Ad spend with no clear return",
      "Campaigns running without a strategy",
      "No conversion tracking or attribution",
      "High cost per lead and per acquisition",
      "Reports full of vanity metrics, not business outcomes",
    ],
    solutionIntro:
      "We build full-funnel paid campaigns designed around one goal: measurable business growth.",
    solutionPoints: [
      "Full-funnel campaign strategy and structure",
      "Google, Meta and search campaign management",
      "Conversion tracking and attribution setup",
      "Continuous A/B testing and optimization",
      "Transparent ROI reporting",
    ],
    subServices: [
      "Google Ads",
      "Meta Ads",
      "Search Campaigns",
      "Display Campaigns",
      "Social Media Advertising",
      "Retargeting",
      "Conversion Tracking",
      "Campaign Optimization",
      "A/B Testing",
      "ROI Analysis",
      "Marketing Analytics",
    ],
    technologies: [
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
      "Search Campaigns",
      "A/B Testing Tools",
      "Attribution & Tracking",
    ],
    seo: {
      title: "Performance Marketing | KAALAMITHRA AI Tech Solutions",
      description:
        "ROI-driven advertising across Google, Meta and other platforms. Conversion tracking, A/B testing and optimization to maximize conversions and growth.",
    },
  },
  {
    slug: "ai-automation",
    number: "03",
    name: "AI & Automation Systems",
    shortDescription:
      "Intelligent AI solutions and automation systems that save time, reduce cost and scale operations.",
    icon: "ai",
    overview: [
      "AI is no longer a luxury — it is a lever for speed, cost and scale. We design intelligent automation systems that handle repetitive work, respond to customers instantly and keep your operations running around the clock.",
      "From AI chatbots and agents to workflow and document automation, we integrate AI directly into your business tools so your team can focus on high-value work.",
    ],
    problems: [
      "Teams buried in repetitive manual work",
      "Slow response times to customers and leads",
      "Rising operational costs as you scale",
      "Data-entry errors across tools",
      "AI tools used in isolation, never integrated",
    ],
    solutionIntro:
      "We map your workflows, identify high-impact automation opportunities and deploy AI systems that integrate cleanly with your existing tools.",
    solutionPoints: [
      "AI chatbots and agents for support and sales",
      "Workflow and business process automation",
      "CRM, document and email automation",
      "AI lead qualification and data processing",
      "Custom AI integrations with your existing stack",
    ],
    subServices: [
      "AI Chatbots",
      "AI Agents",
      "AI Customer Support",
      "Business Process Automation",
      "Workflow Automation",
      "WhatsApp AI Automation",
      "CRM Automation",
      "Document Automation",
      "AI Lead Qualification",
      "AI Content Systems",
      "AI Data Processing",
      "Custom AI Integrations",
    ],
    technologies: [
      "Python",
      "OpenAI APIs",
      "AI Agents",
      "FastAPI",
      "Machine Learning",
      "Workflow Automation",
      "CRM APIs",
    ],
    liveUrl: "https://kaalamithra-portfolio-jwjr.vercel.app/",
    liveUrlLabel: "Visit Live webpage",
    seo: {
      title: "AI & Automation Systems | KAALAMITHRA AI Tech Solutions",
      description:
        "AI chatbots, agents and business automation systems that save time, reduce cost and scale operations — integrated with your existing tools.",
    },
  },
  {
    slug: "startup-mvp",
    number: "04",
    name: "Startup / MVP Launch Kit",
    shortDescription:
      "From idea to launch-ready MVP. We build, design and launch products faster.",
    icon: "startup",
    overview: [
      "Startups win by shipping fast. The MVP Launch Kit takes you from idea to a launch-ready product with clear strategy, clean design and solid engineering.",
      "We handle product strategy, UI/UX, development and launch — so founders can validate ideas quickly without building more than they need.",
    ],
    problems: [
      "Ideas stuck without a technical roadmap",
      "Long development cycles and rising costs",
      "Over-engineered products nobody validated",
      "Poor UX that kills early adoption",
      "No clear launch plan",
    ],
    solutionIntro:
      "A structured path from idea to launched MVP: strategy, design, development, testing and launch — in weeks, not months.",
    solutionPoints: [
      "Product strategy and MVP scoping",
      "UI/UX design and prototyping",
      "Web and mobile application development",
      "API and database architecture",
      "Testing, launch and technical consulting",
    ],
    subServices: [
      "Product Strategy",
      "MVP Planning",
      "UI/UX Design",
      "Web Application Development",
      "Mobile Application Development",
      "Prototype Development",
      "API Development",
      "Database Architecture",
      "MVP Testing",
      "Product Launch",
      "Technical Consulting",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    liveUrl: "https://startup-mvp-webpage.vercel.app/",
    liveUrlLabel: "Visit Live Webpage",
    seo: {
      title: "Startup / MVP Launch Kit | KAALAMITHRA AI Tech Solutions",
      description:
        "From idea to launch-ready MVP. Product strategy, UI/UX design, web and mobile development, testing and launch — built to validate faster.",
    },
  },
  {
    slug: "business-software-crm",
    number: "05",
    name: "Business Software & CRM Solutions",
    shortDescription:
      "Custom CRM, ERP and business software solutions designed to streamline operations and improve efficiency.",
    icon: "crm",
    overview: [
      "Off-the-shelf software rarely fits how your business actually works. We build custom CRM, ERP and business applications designed around your workflows — not the other way around.",
      "From customer management and billing to dashboards and integrations, your systems become a single source of truth for the whole business.",
    ],
    problems: [
      "Teams juggling disconnected tools",
      "Customer data scattered across spreadsheets",
      "Manual billing, inventory and reporting",
      "No visibility into business performance",
      "Software that fights your workflow",
    ],
    solutionIntro:
      "We design and build business software that streamlines operations: custom CRMs, ERP modules, dashboards and integrations that work as one system.",
    solutionPoints: [
      "Custom CRM and ERP solutions",
      "Billing, inventory and workflow management",
      "Role-based dashboards and reporting",
      "API integrations with existing tools",
      "SaaS and custom business applications",
    ],
    subServices: [
      "Custom CRM",
      "ERP Solutions",
      "Inventory Management",
      "Employee Management",
      "Customer Management",
      "Billing Systems",
      "Business Dashboards",
      "Workflow Management",
      "API Integrations",
      "SaaS Development",
      "Custom Business Applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "Django",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Docker",
    ],
    liveUrl: "https://kaalamithra-crm.vercel.app/",
    liveUrlLabel: "Visit Live CRM",
    seo: {
      title: "Business Software & CRM Solutions | KAALAMITHRA AI Tech Solutions",
      description:
        "Custom CRM, ERP and business software designed around your workflows — dashboards, billing, inventory and integrations in one system.",
    },
  },
  {
    slug: "cloud-devops",
    number: "06",
    name: "Cloud & DevOps Infrastructure",
    shortDescription:
      "Scalable, secure and high-performance cloud infrastructure using modern DevOps practices.",
    icon: "cloud",
    overview: [
      "Your infrastructure should accelerate your business, not slow it down. We design scalable, secure cloud environments with modern DevOps practices baked in.",
      "From architecture and migration to CI/CD, monitoring and backups, we build infrastructure that stays fast, reliable and cost-efficient as you grow.",
    ],
    problems: [
      "Slow, manual deployment processes",
      "Downtime and performance issues",
      "Cloud costs growing without control",
      "No backups or disaster-recovery plan",
      "Security gaps in infrastructure",
    ],
    solutionIntro:
      "We architect, migrate and automate your infrastructure so releases are safe, systems are observable and scaling is routine.",
    solutionPoints: [
      "Cloud architecture and migration",
      "CI/CD pipelines and infrastructure automation",
      "Containerization with Docker and Kubernetes",
      "Monitoring, alerts and backup systems",
      "Cloud security and performance optimization",
    ],
    subServices: [
      "Cloud Architecture",
      "Cloud Migration",
      "Server Deployment",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes",
      "Infrastructure Automation",
      "Monitoring",
      "Backup Systems",
      "Cloud Security",
      "Performance Optimization",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
    liveUrl: "https://kaalamithra-cloud-devops.vercel.app/",
    liveUrlLabel: "Visit Live Webpage",
    seo: {
      title: "Cloud & DevOps Infrastructure | KAALAMITHRA AI Tech Solutions",
      description:
        "Scalable, secure cloud infrastructure with modern DevOps: architecture, migration, CI/CD, Docker, Kubernetes, monitoring and cloud security.",
    },
  },
  {
    slug: "ecommerce",
    number: "07",
    name: "E-Commerce Growth System",
    shortDescription:
      "End-to-end e-commerce solutions designed to grow sales, optimize stores and improve customer experience.",
    icon: "ecommerce",
    overview: [
      "An online store is more than a catalog — it is a growth system. We build and optimize e-commerce experiences designed to convert visitors into repeat customers.",
      "From store design and payments to SEO, analytics and retention, every part of the system is tuned for revenue.",
    ],
    problems: [
      "Stores that look good but don't convert",
      "Checkout friction and abandoned carts",
      "Manual order and inventory management",
      "No insight into customer behaviour",
      "Traffic that doesn't turn into sales",
    ],
    solutionIntro:
      "End-to-end e-commerce builds and growth systems: fast stores, smooth checkout, integrated inventory and data-driven optimization.",
    solutionPoints: [
      "E-commerce website and store design",
      "Payment gateway and order management",
      "Inventory and product catalog systems",
      "E-commerce SEO and marketing automation",
      "Customer analytics and retention systems",
    ],
    subServices: [
      "E-commerce Website Development",
      "Store Design",
      "Product Catalog Systems",
      "Payment Gateway Integration",
      "Order Management",
      "Inventory Integration",
      "Customer Analytics",
      "Conversion Optimization",
      "E-commerce SEO",
      "Marketing Automation",
      "Customer Retention Systems",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Payment Gateways",
      "Analytics",
    ],
    liveUrl: "https://kaalamithra-ecommerce.vercel.app/",
    liveUrlLabel: "Visit Live Webpage",
    seo: {
      title: "E-Commerce Growth System | KAALAMITHRA AI Tech Solutions",
      description:
        "End-to-end e-commerce solutions: store development, payments, inventory, SEO, conversion optimization and customer retention systems.",
    },
  },
  {
    slug: "content-personal-branding",
    number: "08",
    name: "Content & Personal Branding",
    shortDescription:
      "Strategic content, social media and personal branding solutions designed to build trust, authority and visibility.",
    icon: "branding",
    overview: [
      "People buy from people they trust. We build content and personal branding systems that position you as an authority in your space.",
      "Strategy first, then execution: positioning, content pillars, platforms and creative design — all working together to grow your audience and your authority.",
    ],
    problems: [
      "Inconsistent presence across platforms",
      "Content that doesn't attract the right audience",
      "Founders with expertise but no visibility",
      "No clear brand positioning",
      "Hours consumed by content creation",
    ],
    solutionIntro:
      "A structured branding and content engine: strategy, creation and design that builds trust, authority and visibility over time.",
    solutionPoints: [
      "Personal and brand positioning strategy",
      "LinkedIn and Instagram branding systems",
      "Content strategy and copywriting",
      "Creative design and video content strategy",
      "Audience growth and analytics",
    ],
    subServices: [
      "Social Media Strategy",
      "Content Strategy",
      "Personal Branding",
      "LinkedIn Branding",
      "Instagram Branding",
      "Content Creation",
      "Copywriting",
      "Video Content Strategy",
      "Creative Design",
      "Brand Positioning",
      "Audience Growth",
    ],
    technologies: [
      "Content Strategy Frameworks",
      "Design Systems",
      "Social Analytics",
      "Marketing Automation",
    ],
    liveUrl: "https://kaalamithra-branding.vercel.app/",
    liveUrlLabel: "Visit Live Webpage",
    seo: {
      title: "Content & Personal Branding | KAALAMITHRA AI Tech Solutions",
      description:
        "Strategic content, social media and personal branding that build trust, authority and visibility — positioning, creation and design.",
    },
  },
  {
    slug: "sales-funnel",
    number: "09",
    name: "Sales Funnel & Closing System",
    shortDescription:
      "High-converting funnels, CRM pipelines and nurturing systems designed to help businesses close more deals.",
    icon: "sales",
    overview: [
      "Leads only matter if they convert. We design sales funnels and closing systems that move prospects from first touch to signed deal — without letting anything slip.",
      "Funnels, CRM pipelines, nurturing sequences and automation work together so your team always knows the next best action.",
    ],
    problems: [
      "Leads going cold before follow-up",
      "No clear pipeline or deal stages",
      "Manual follow-up that gets forgotten",
      "Unpredictable close rates",
      "No data on where deals stall",
    ],
    solutionIntro:
      "We build complete closing systems: funnel design, CRM pipelines, nurturing automation and analytics that help your team close more deals.",
    solutionPoints: [
      "Sales funnel and landing page design",
      "CRM pipeline and lead scoring",
      "Email and WhatsApp nurture sequences",
      "Appointment booking and sales automation",
      "Conversion optimization and sales analytics",
    ],
    subServices: [
      "Sales Funnel Design",
      "Landing Pages",
      "CRM Pipeline",
      "Lead Nurturing",
      "Email Sequences",
      "WhatsApp Follow-up",
      "Sales Automation",
      "Appointment Booking Systems",
      "Lead Scoring",
      "Conversion Optimization",
      "Sales Analytics",
    ],
    technologies: [
      "CRM Platforms",
      "Email Automation",
      "WhatsApp APIs",
      "Next.js",
      "Analytics",
    ],
    seo: {
      title: "Sales Funnel & Closing System | KAALAMITHRA AI Tech Solutions",
      description:
        "High-converting funnels, CRM pipelines and nurturing systems that help businesses close more deals — automation, scoring and analytics.",
    },
  },
  {
    slug: "data-analytics",
    number: "10",
    name: "Data & Analytics Intelligence",
    shortDescription:
      "Actionable insights, dashboards and AI-powered analytics for smarter business decisions.",
    icon: "data",
    overview: [
      "Every business sits on data it isn't using. We turn your data into dashboards, insights and AI-powered analytics that drive smarter decisions.",
      "From KPI tracking to predictive analytics, we build the reporting layer your business needs to see clearly and move quickly.",
    ],
    problems: [
      "Decisions made on gut feel",
      "Data scattered across tools",
      "Hours lost building manual reports",
      "No shared view of performance",
      "No early warning on trends",
    ],
    solutionIntro:
      "We consolidate your data and build intelligent reporting: dashboards, KPI tracking and AI-assisted analytics your team will actually use.",
    solutionPoints: [
      "Business intelligence and interactive dashboards",
      "KPI, sales and marketing analytics",
      "Predictive and AI-powered analytics",
      "Automated reporting",
      "Customer and revenue analytics",
    ],
    subServices: [
      "Business Intelligence",
      "Data Visualization",
      "Interactive Dashboards",
      "Data Analytics",
      "Predictive Analytics",
      "AI Analytics",
      "KPI Tracking",
      "Sales Analytics",
      "Marketing Analytics",
      "Customer Analytics",
      "Automated Reports",
    ],
    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "Power BI",
      "PostgreSQL",
      "Machine Learning",
    ],
    seo: {
      title: "Data & Analytics Intelligence | KAALAMITHRA AI Tech Solutions",
      description:
        "Actionable insights, interactive dashboards and AI-powered analytics — KPI tracking, predictive analytics and automated reports.",
    },
  },
  {
    slug: "cyber-security",
    number: "11",
    name: "Cyber Security & IT Solutions",
    shortDescription:
      "Security, monitoring, infrastructure and IT support solutions for modern businesses.",
    icon: "security",
    overview: [
      "Growth without security is risk. We help modern businesses protect their systems, data and people with practical security and reliable IT foundations.",
      "From assessments and monitoring to backups, infrastructure and support, we build security that enables growth instead of blocking it.",
    ],
    problems: [
      "No visibility into security risks",
      "Unpatched systems and weak access control",
      "No backup or recovery plan",
      "Employees exposed to phishing",
      "IT issues slowing the team down",
    ],
    solutionIntro:
      "A practical security and IT program: assess, protect, monitor and support — scaled to your business.",
    solutionPoints: [
      "Cybersecurity and vulnerability assessments",
      "Network and endpoint security",
      "Access management and security monitoring",
      "Backup and recovery systems",
      "IT infrastructure, server management and support",
    ],
    subServices: [
      "Cybersecurity Assessment",
      "Network Security",
      "Endpoint Security",
      "Access Management",
      "Security Monitoring",
      "Backup & Recovery",
      "IT Infrastructure",
      "Server Management",
      "Vulnerability Assessment",
      "Security Awareness",
      "IT Support",
    ],
    technologies: [
      "Cloud Security",
      "Monitoring Tools",
      "Backup Systems",
      "Access Management",
      "Server Management",
    ],
    seo: {
      title: "Cyber Security & IT Solutions | KAALAMITHRA AI Tech Solutions",
      description:
        "Security, monitoring, infrastructure and IT support for modern businesses — assessments, network security, backups and IT management.",
    },
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const SERVICE_FILTERS = [
  { label: "All", slug: "all" },
  ...SERVICES.map((s) => ({
    label:
      s.slug === "business-software-crm"
        ? "CRM"
        : s.slug === "content-personal-branding"
          ? "Branding"
          : s.slug === "data-analytics"
            ? "Data & Analytics"
            : s.slug === "cyber-security"
              ? "Cybersecurity"
              : s.slug === "startup-mvp"
                ? "Startup / MVP"
                : s.slug === "cloud-devops"
                  ? "Cloud & DevOps"
                  : s.slug === "ecommerce"
                    ? "E-Commerce"
                    : s.slug === "sales-funnel"
                      ? "Sales Funnel"
                      : s.slug === "lead-generation"
                        ? "Lead Generation"
                        : s.slug === "performance-marketing"
                          ? "Performance Marketing"
                          : "AI & Automation",
    slug: s.slug,
  })),
];
