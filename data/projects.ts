import type { Project } from "@/types";

/**
 * Single source of truth for portfolio / case studies.
 *
 * A project can belong to multiple services, and each project references
 * the exact sub-services used (by service slug) — no duplicated content.
 *
 * Real client projects (from the company presentation) are listed first.
 * Bracketed values further down are editable placeholders for future
 * case studies — replace them with real information as they are approved.
 */
export const PROJECTS: Project[] = [
  /* ================= REAL CLIENT PROJECTS ================= */
  {
    slug: "annadaata-traders",
    name: "Annadaata Traders — Brand Identity & Lead-Generation Website",
    tagline:
      "A complete brand and a crop-smart website that guides farmers to the right product and connects them instantly on WhatsApp.",
    client: "Annadaata Traders",
    industry: "Agriculture & Farm Products",
    overview:
      "KAALAMITHRA designed the Annadaata Traders brand identity and built its website around how farmers actually buy: browse by crop, by problem or by category, get practical guidance on fit, dose and timing, and reach the business instantly through WhatsApp or a call.",
    challenge:
      "A growing agri-products business needed a recognizable brand and a simple digital presence that helps farmers choose the right product and contact the business without friction.",
    solution:
      "We created the logo and visual identity, then designed and developed a website with crop-first navigation, guidance cards (crop fit, dose and timing, availability check) and one-tap WhatsApp / call-now actions that turn every visit into a lead.",
    services: ["content-personal-branding", "lead-generation"],
    subServicesUsed: [
      {
        service: "content-personal-branding",
        items: ["Brand Positioning", "Creative Design"],
      },
      {
        service: "lead-generation",
        items: [
          "Landing Page Development",
          "Lead Capture Systems",
          "WhatsApp Lead Automation",
        ],
      },
    ],
    technologies: ["Next.js", "React", "WhatsApp Automation", "Design Systems"],
    implementation: [
      "Brand discovery and logo design for Annadaata Traders",
      "Website structure: By Crop, By Problem, By Category",
      "Design and build of homepage with guidance cards",
      "WhatsApp and call-now lead capture integration",
      "Launch at annadaatatraders.com",
    ],
    results: [
      "Complete brand identity delivered (logo + visual language)",
      "Live website with WhatsApp & callback lead capture",
      "Product guidance organised by crop, problem and category",
    ],
    cover: "/projects/annadaata-website.jpg",
    screenshots: [
      {
        src: "/projects/annadaata-website.jpg",
        alt: "Annadaata Traders website — homepage with crop guidance and WhatsApp / call actions",
      },
      {
        src: "/projects/annadaata-logo.jpg",
        alt: "Annadaata Traders logo designed by KAALAMITHRA",
      },
    ],
    liveUrl: "https://www.annadaatatraders.com/",
    seo: {
      title: "Annadaata Traders Website & Branding — Case Study | KAALAMITHRA",
      description:
        "Brand identity and a lead-generation website for Annadaata Traders with crop-first navigation and WhatsApp lead capture. Live at annadaatatraders.com.",
    },
  },
  {
    slug: "zorova-fashion",
    name: "Zorova Fashion — E-Commerce Store & Social Media Engine",
    tagline:
      "A premium ethnic-wear online store paired with an always-on Instagram content and video engine.",
    client: "Zorova Fashion",
    industry: "Fashion & Ethnic Wear",
    overview:
      "For Zorova Fashion we built the complete e-commerce experience — store design, collections and catalog — and run the brand's social media engine: product shoots, reels and video content that keep the store feeding the audience and the audience feeding the store.",
    challenge:
      "A handcrafted womenswear brand needed an elegant online store and a consistent content system to showcase new collections and grow an engaged audience.",
    solution:
      "We designed and developed zorovafashion.com with collection-led navigation and a premium visual language, and established a repeatable Instagram content pipeline — posts, reels and product videos published consistently.",
    services: ["ecommerce", "content-personal-branding"],
    subServicesUsed: [
      {
        service: "ecommerce",
        items: [
          "E-commerce Website Development",
          "Store Design",
          "Product Catalog Systems",
        ],
      },
      {
        service: "content-personal-branding",
        items: ["Instagram Branding", "Content Creation", "Video Content Strategy"],
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "Instagram & Reels Production",
      "Content Calendars",
    ],
    implementation: [
      "Store design: collections, look-and-feel and catalog structure",
      "E-commerce website development and launch",
      "Instagram branding and content calendar setup",
      "Ongoing reels, product videos and posts production",
    ],
    results: [
      "Live ethnic-wear e-commerce store at zorovafashion.com",
      "287 Instagram posts published with a consistent brand system",
      "Ongoing reels & video production driving store traffic",
    ],
    cover: "/projects/zorova-website.jpg",
    screenshots: [
      {
        src: "/projects/zorova-website.jpg",
        alt: "Zorova Fashion e-commerce website — summer collection homepage",
      },
      {
        src: "/projects/zorova-logo.jpg",
        alt: "Zorova brand logo",
      },
      {
        src: "/projects/zorova-instagram.jpg",
        alt: "Zorova Fashion Instagram profile with reels and product content",
      },
    ],
    liveUrl: "https://www.zorovafashion.com/",
    seo: {
      title: "Zorova Fashion E-Commerce & Social Media — Case Study | KAALAMITHRA",
      description:
        "E-commerce store design and development plus an Instagram content and video engine for Zorova Fashion. Live at zorovafashion.com.",
    },
  },
  {
    slug: "guruji-herbals",
    name: "Guruji Herbals — Brand Website & Content Hub",
    tagline:
      "A warm, trust-building website for a traditional herbal brand — gallery, articles, medicines and videos in one place.",
    client: "Guruji Herbals",
    industry: "Herbal & Ayurvedic Products",
    overview:
      "Guruji Herbals needed a digital home that carries the trust of a traditional practice. We designed and built a full website with galleries, appreciations, articles, medicine listings, news and video — a content hub that builds authority and makes the brand discoverable.",
    challenge:
      "A respected herbal practitioner had deep expertise and a loyal following, but no structured digital presence to showcase medicines, knowledge and testimonials.",
    solution:
      "We built a complete brand website with clear sections for gallery, medicines, articles and videos, styled to reflect the brand's traditional warmth while staying clean and easy to navigate.",
    services: ["content-personal-branding", "lead-generation"],
    subServicesUsed: [
      {
        service: "content-personal-branding",
        items: ["Personal Branding", "Content Strategy", "Creative Design"],
      },
      {
        service: "lead-generation",
        items: ["Landing Page Development", "Lead Capture Systems"],
      },
    ],
    technologies: ["Next.js", "React", "Content Management", "Design Systems"],
    implementation: [
      "Brand and content structure workshop",
      "Website design reflecting traditional identity",
      "Development of gallery, articles, medicines and video sections",
      "Launch at gurujiherbals.com",
    ],
    results: [
      "Complete brand website live at gurujiherbals.com",
      "Medicines, articles and testimonials organised in one hub",
      "Stronger digital authority for the Guruji Herbals name",
    ],
    cover: "/projects/guruji-website.jpg",
    screenshots: [
      {
        src: "/projects/guruji-website.jpg",
        alt: "Guruji Herbals website — homepage with brand story and herbal imagery",
      },
    ],
    liveUrl: "https://www.gurujiherbals.com/",
    seo: {
      title: "Guruji Herbals Website — Case Study | KAALAMITHRA",
      description:
        "Brand website and content hub for Guruji Herbals — gallery, articles, medicines and videos. Live at gurujiherbals.com.",
    },
  },
  {
    slug: "adhi-guru-mathaji-astrology",
    name: "Adhi Guru Mathaji Astrology — Spiritual Services Website",
    tagline:
      "A striking dark-gold spiritual platform with teachings, events and one-tap blessings via WhatsApp.",
    client: "Adhi Guru Mathaji Astrology",
    industry: "Astrology & Spiritual Services",
    overview:
      "We designed and built a rich spiritual-services website for Adhi Guru Mathaji Astrology (Shri Sammakka Saralamma Astrology) — teachings, gallery, services, events and video sections wrapped in a premium dark-gold visual language, with WhatsApp connection built into every page.",
    challenge:
      "A spiritual practice with a large following needed a dignified online presence where devotees could explore teachings and seek guidance easily.",
    solution:
      "We created a premium dark-themed website with divine artwork, clear sections for teachings, services and events, and a 'Seek Blessings' WhatsApp path that turns visits into personal connections.",
    services: ["content-personal-branding", "lead-generation"],
    subServicesUsed: [
      {
        service: "content-personal-branding",
        items: ["Personal Branding", "Creative Design"],
      },
      {
        service: "lead-generation",
        items: ["Landing Page Development", "WhatsApp Lead Automation"],
      },
    ],
    technologies: ["Next.js", "React", "WhatsApp Automation", "Design Systems"],
    implementation: [
      "Visual direction: premium dark-gold spiritual identity",
      "Website structure: teachings, gallery, services, events, video",
      "Design and development with WhatsApp 'Seek Blessings' flow",
      "Launch at adhigurumathajiastrology.com",
    ],
    results: [
      "Complete spiritual platform live at adhigurumathajiastrology.com",
      "WhatsApp-first connection path for devotees",
      "Premium brand presentation for events and teachings",
    ],
    cover: "/projects/astrology-website.jpg",
    screenshots: [
      {
        src: "/projects/astrology-website.jpg",
        alt: "Adhi Guru Mathaji Astrology website — homepage with divine artwork and Seek Blessings action",
      },
    ],
    liveUrl: "https://www.adhigurumathajiastrology.com/",
    seo: {
      title: "Adhi Guru Mathaji Astrology Website — Case Study | KAALAMITHRA",
      description:
        "Premium spiritual-services website with teachings, events and WhatsApp connection for Adhi Guru Mathaji Astrology.",
    },
  },
  {
    slug: "senarys-nest-inn",
    name: "Hotel Senary's Nest Inn — Launch Branding, Pamphlets & Social Media",
    tagline:
      "Full launch promotion for a new hotel in Tumakuru: pamphlet design, brand creatives and an Instagram launch that reached 20K+ views.",
    client: "Senary Emerald Groups",
    industry: "Hospitality",
    overview:
      "For the launch of Hotel Senary's Nest Inn (Senary Emerald Groups, Tumakuru), KAALAMITHRA handled branding and promotion end to end: premium pamphlet design (front + amenities spread), launch creatives and the hotel's Instagram presence — including reels and video content produced for the launch.",
    challenge:
      "A new hotel needed a strong first impression: premium offline collateral and a social media launch that put the property on the map quickly.",
    solution:
      "We designed a luxury navy-and-gold pamphlet system with rooms, amenities, location and QR codes, and produced the Instagram launch content — reels that reached over 20,000 views for a single post.",
    services: ["content-personal-branding"],
    subServicesUsed: [
      {
        service: "content-personal-branding",
        items: [
          "Creative Design",
          "Instagram Branding",
          "Video Content Strategy",
          "Content Creation",
        ],
      },
    ],
    technologies: ["Design Systems", "Print Production", "Reels & Video Production"],
    implementation: [
      "Launch identity: navy-gold premium hospitality look",
      "Pamphlet design — front spread and amenities spread with QR codes",
      "Instagram profile setup and launch content calendar",
      "Reels and video production for the launch campaign",
    ],
    results: [
      "Complete launch collateral delivered (pamphlets + creatives)",
      "Instagram launch reels reaching 20K+ and 10K+ views",
      "Premium brand presence for a new hotel from day one",
    ],
    cover: "/projects/senarys-pamphlet-1.jpg",
    screenshots: [
      {
        src: "/projects/senarys-pamphlet-1.jpg",
        alt: "Hotel Senary's Nest Inn launch pamphlet — front spread designed by KAALAMITHRA",
      },
      {
        src: "/projects/senarys-pamphlet-2.jpg",
        alt: "Hotel Senary's Nest Inn pamphlet — rooms, amenities and contact spread",
      },
      {
        src: "/projects/senarys-instagram.jpg",
        alt: "Senary's Nest Inn Instagram profile with launch reels and videos",
      },
    ],
    seo: {
      title: "Hotel Senary's Nest Inn Launch — Case Study | KAALAMITHRA",
      description:
        "Launch branding, pamphlet design and social media for Hotel Senary's Nest Inn, Tumakuru — reels reaching 20K+ views.",
    },
  },
  {
    slug: "brand-identity-suite",
    name: "Brand Identity Suite — Logos for Growing Businesses",
    tagline:
      "Distinctive logo and identity design across food, fashion, travel, beauty and medical devices.",
    client:
      "TENE Food Products · The Grandeur Salon · Vision Progress · Varsha Pravasa · J.B. & Co · Nive Nivasaa",
    industry: "Food, Beauty, Travel, Retail & Medical Devices",
    overview:
      "A suite of brand identity projects: TENE Food Products (traditional, healthy, pure), The Grandeur Unisex Salon (regal gold-on-maroon), Vision Progress (medical-device launch marks for OCU-RK1 / OCU-ARK1), Varsha Pravasa travel branding, J.B. & Co and Nive Nivasaa — each logo built from the business's own character.",
    challenge:
      "Each business needed a memorable, professional identity that could carry packaging, signage and social media — not a generic template mark.",
    solution:
      "We ran a positioning-first logo process for every brand: concept, typography, colour language and delivery of ready-to-use identity files across print and digital.",
    services: ["content-personal-branding"],
    subServicesUsed: [
      {
        service: "content-personal-branding",
        items: ["Brand Positioning", "Creative Design"],
      },
    ],
    technologies: ["Design Systems", "Print Production", "Brand Guidelines"],
    implementation: [
      "Positioning and moodboard per brand",
      "Concept design and refinement rounds",
      "Final identity delivery: print, packaging and social-ready files",
    ],
    results: [
      "Six complete brand identities delivered",
      "Identities in active use on packaging, sites and social media",
      "Consistent visual language per brand across touchpoints",
    ],
    cover: "/projects/varsha-logo.jpg",
    screenshots: [
      { src: "/projects/tene-logo.jpg", alt: "TENE Food Products logo designed by KAALAMITHRA" },
      { src: "/projects/grandeur-logo.jpg", alt: "The Grandeur Unisex Salon logo designed by KAALAMITHRA" },
      { src: "/projects/vision-logo.jpg", alt: "Vision Progress OCU-RK1 / OCU-ARK1 product branding by KAALAMITHRA" },
      { src: "/projects/varsha-logo.jpg", alt: "Varsha Pravasa travel brand logo designed by KAALAMITHRA" },
      { src: "/projects/jb-logo.jpg", alt: "J.B. & Co logo designed by KAALAMITHRA" },
      { src: "/projects/nive-logo.jpg", alt: "Nive Nivasaa logo designed by KAALAMITHRA" },
    ],
    seo: {
      title: "Brand Identity Suite — Logo Design Case Study | KAALAMITHRA",
      description:
        "Logo and brand identity design for TENE Foods, The Grandeur Salon, Vision Progress, Varsha Pravasa, J.B. & Co and Nive Nivasaa.",
    },
  },
  {
    slug: "print-event-creatives",
    name: "Print & Event Creatives — Cards, Pamphlets & Certificates",
    tagline:
      "High-impact print design: business cards for local businesses and full event creative systems for charity tournaments.",
    client: "Jeevan Garden Works · Kreeda Shiksha (AWO / Street to School)",
    industry: "Local Services & Non-Profit Events",
    overview:
      "From Jeevan Garden Works business cards (two format designs with services, contact and location) to the complete Kreeda Shiksha KGF charity badminton tournament creative system — certificates, event banners and badge designs for AWO / Street to School.",
    challenge:
      "Local businesses and event organisers needed professional, print-ready creatives fast — without losing the local character that makes them trusted.",
    solution:
      "We designed print-ready creatives with clear hierarchy and bold colour: service-first business cards for Jeevan Garden Works and a cohesive certificate / banner / badge system for the Kreeda Shiksha event.",
    services: ["content-personal-branding"],
    subServicesUsed: [
      {
        service: "content-personal-branding",
        items: ["Creative Design", "Content Creation"],
      },
    ],
    technologies: ["Print Production", "Design Systems"],
    implementation: [
      "Content collection: services, contacts and event details",
      "Design concepts and print-ready layouts",
      "Final delivery in print and digital formats",
    ],
    results: [
      "Business cards in active use for Jeevan Garden Works",
      "Complete event creative system for Kreeda Shiksha KGF",
      "Certificates and badges delivered print-ready",
    ],
    cover: "/projects/jeevan-card-1.jpg",
    screenshots: [
      { src: "/projects/jeevan-card-1.jpg", alt: "Jeevan Garden Works business card design — format 1" },
      { src: "/projects/jeevan-card-2.jpg", alt: "Jeevan Garden Works business card design — format 2" },
      { src: "/projects/kreeda-certificate.jpg", alt: "Kreeda Shiksha charity tournament certificate design" },
      { src: "/projects/kreeda-badge.jpg", alt: "Kreeda Shiksha semi-finalist badge design" },
    ],
    seo: {
      title: "Print & Event Creatives — Case Study | KAALAMITHRA",
      description:
        "Business card, pamphlet, certificate and event branding design for Jeevan Garden Works and the Kreeda Shiksha charity tournament.",
    },
  },

  /* ================= PLACEHOLDER PIPELINE PROJECTS =================
   * Editable placeholders for upcoming case studies.
   * Replace bracketed values with real information when approved.
   * Screenshots on these entries are illustrative product visuals —
   * swap them for real captures when the work ships.
   */
  {
    slug: "ai-customer-support-system",
    name: "AI Customer Support System",
    tagline:
      "An AI-powered support layer that resolves customer queries instantly and escalates smartly.",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    overview:
      "The AI Customer Support System combines AI chatbots, CRM automation and analytics into a single support layer. It understands customer questions, resolves common issues instantly and routes complex cases to the right team with full context — while every conversation is logged and measurable.",
    challenge:
      "[BUSINESS CHALLENGE — e.g., growing enquiry volume with slow response times and no after-hours coverage]",
    solution:
      "We deployed AI chatbots trained on the business's own data, connected them to the CRM so every conversation is captured, and built dashboards that track resolution quality, sentiment and escalations — giving the team a complete, measurable support system.",
    services: ["ai-automation", "business-software-crm", "data-analytics"],
    subServicesUsed: [
      {
        service: "ai-automation",
        items: ["AI Chatbots", "AI Customer Support", "CRM Automation"],
      },
      {
        service: "business-software-crm",
        items: ["Customer Management", "Workflow Management"],
      },
      {
        service: "data-analytics",
        items: ["Interactive Dashboards", "Customer Analytics"],
      },
    ],
    technologies: [
      "Python",
      "OpenAI APIs",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
    ],
    implementation: [
      "Discovery workshop to map support journeys and top query types",
      "Solution design: conversation flows, escalation rules and CRM data model",
      "Build: AI chatbot, CRM integration and agent handoff",
      "Testing with real conversation scenarios and edge cases",
      "Launch, monitoring and continuous tuning",
    ],
    results: [
      "[RESULTS — e.g., faster first-response time]",
      "[RESULTS — e.g., share of queries resolved automatically]",
      "[RESULTS — e.g., improvement in customer satisfaction]",
    ],
    cover: "/projects/ai-support-dashboard.jpg",
    screenshots: [
      {
        src: "/projects/ai-support-dashboard.jpg",
        alt: "AI Customer Support System — agent dashboard with live chat and analytics",
      },
      {
        src: "/projects/ai-support-analytics.jpg",
        alt: "AI Customer Support System — resolution, sentiment and escalation analytics",
      },
    ],
    seo: {
      title: "AI Customer Support System — Case Study | KAALAMITHRA",
      description:
        "Case study: an AI-powered customer support layer with chatbots, CRM automation and analytics. Built by KAALAMITHRA AI Tech Solutions.",
    },
  },
  {
    slug: "lead-generation-funnel",
    name: "High-Converting Lead Generation Funnel",
    tagline:
      "A complete funnel system — landing pages, capture, nurturing and tracking working as one.",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    overview:
      "A full lead generation engine: strategy, high-converting landing pages, lead capture systems, paid campaigns and automated nurturing — with conversion tracking on every step so the business knows exactly what works.",
    challenge:
      "[BUSINESS CHALLENGE — e.g., inconsistent lead flow and no visibility into campaign performance]",
    solution:
      "We designed the funnel end to end: messaging and landing pages, capture and qualification forms, Google and Meta campaigns, retargeting, and automated email follow-up — all connected to the CRM and a single analytics view.",
    services: ["lead-generation", "performance-marketing", "sales-funnel"],
    subServicesUsed: [
      {
        service: "lead-generation",
        items: [
          "Landing Page Development",
          "Lead Capture Systems",
          "Conversion Rate Optimization",
        ],
      },
      {
        service: "performance-marketing",
        items: ["Google Ads", "Meta Ads", "Conversion Tracking"],
      },
      {
        service: "sales-funnel",
        items: ["Lead Nurturing", "Email Sequences"],
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Google Ads",
      "Meta Ads",
      "Email Automation",
    ],
    implementation: [
      "Discovery: audience, offer and funnel mapping",
      "Strategize: channel mix, budget and KPI targets",
      "Design & build: landing pages and capture systems",
      "Launch campaigns with full conversion tracking",
      "Optimize: A/B testing, retargeting and nurture sequences",
    ],
    results: [
      "[RESULTS — e.g., increase in qualified leads per month]",
      "[RESULTS — e.g., reduction in cost per lead]",
      "[RESULTS — e.g., improvement in landing page conversion rate]",
    ],
    cover: "/projects/leadgen-funnel-page.jpg",
    screenshots: [
      {
        src: "/projects/leadgen-funnel-page.jpg",
        alt: "Lead Generation Funnel — high-converting landing page with capture form",
      },
      {
        src: "/projects/leadgen-analytics.jpg",
        alt: "Lead Generation Funnel — funnel stages and channel performance analytics",
      },
    ],
    seo: {
      title: "Lead Generation Funnel — Case Study | KAALAMITHRA",
      description:
        "Case study: a high-converting lead generation funnel with landing pages, paid campaigns, nurturing and full conversion tracking.",
    },
  },
  {
    slug: "custom-crm-sales-pipeline",
    name: "Custom CRM & Sales Pipeline System",
    tagline:
      "One system for leads, pipeline and follow-up — so no deal slips through.",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    overview:
      "A custom CRM built around the business's real sales process: lead capture and qualification, pipeline stages, lead scoring, automated follow-up and management dashboards — replacing scattered spreadsheets with one source of truth.",
    challenge:
      "[BUSINESS CHALLENGE — e.g., leads tracked in spreadsheets with inconsistent follow-up and no pipeline visibility]",
    solution:
      "We designed the data model around their sales stages, built the CRM with role-based dashboards, integrated lead capture and scoring, and automated email and WhatsApp follow-up so the team always knows the next best action.",
    services: ["business-software-crm", "sales-funnel", "lead-generation"],
    subServicesUsed: [
      {
        service: "business-software-crm",
        items: ["Custom CRM", "Customer Management", "Business Dashboards"],
      },
      {
        service: "sales-funnel",
        items: ["CRM Pipeline", "Lead Scoring", "Sales Automation"],
      },
      {
        service: "lead-generation",
        items: ["CRM Integration", "Lead Qualification"],
      },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "Docker"],
    implementation: [
      "Discovery: sales process, stages and reporting needs",
      "Design: data model, pipeline UX and dashboards",
      "Build: CRM modules, integrations and automation",
      "Testing with the sales team and data migration",
      "Launch, training and ongoing optimization",
    ],
    results: [
      "[RESULTS — e.g., increase in follow-up completion]",
      "[RESULTS — e.g., improvement in pipeline visibility]",
      "[RESULTS — e.g., growth in close rate]",
    ],
    cover: "/projects/crm-pipeline.jpg",
    screenshots: [
      {
        src: "/projects/crm-pipeline.jpg",
        alt: "Custom CRM — sales pipeline kanban with deal stages and values",
      },
      {
        src: "/projects/crm-dashboard.jpg",
        alt: "Custom CRM — management dashboard with revenue chart and activity feed",
      },
    ],
    seo: {
      title: "Custom CRM & Sales Pipeline — Case Study | KAALAMITHRA",
      description:
        "Case study: a custom CRM and sales pipeline system with lead scoring, automated follow-up and management dashboards.",
    },
  },
  {
    slug: "cloud-migration-devops",
    name: "Cloud Migration & DevOps Automation",
    tagline:
      "From manual deploys to automated, monitored, secure cloud infrastructure.",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    overview:
      "A complete infrastructure modernization: cloud migration, CI/CD pipelines, containerized deployments, monitoring and alerting, backups and security hardening — turning infrastructure from a risk into a platform for speed.",
    challenge:
      "[BUSINESS CHALLENGE — e.g., manual deployments, downtime and no disaster-recovery plan]",
    solution:
      "We re-architected the environment on the cloud, containerized the applications, automated delivery with CI/CD, and added monitoring, backups and security controls so releases became safe and routine.",
    services: ["cloud-devops", "cyber-security"],
    subServicesUsed: [
      {
        service: "cloud-devops",
        items: ["Cloud Migration", "CI/CD Pipelines", "Monitoring"],
      },
      {
        service: "cyber-security",
        items: ["Security Monitoring", "Backup & Recovery"],
      },
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
    implementation: [
      "Audit: current infrastructure, risks and dependencies",
      "Architect: target cloud environment and security model",
      "Migrate: zero-downtime migration plan and execution",
      "Automate: CI/CD, infrastructure as code, monitoring",
      "Operate: runbooks, backups and continuous optimization",
    ],
    results: [
      "[RESULTS — e.g., faster deployment frequency]",
      "[RESULTS — e.g., reduction in downtime]",
      "[RESULTS — e.g., improvement in infrastructure cost efficiency]",
    ],
    cover: "/projects/cloud-monitoring.jpg",
    screenshots: [
      {
        src: "/projects/cloud-monitoring.jpg",
        alt: "Cloud & DevOps — infrastructure monitoring dashboard with deployment pipeline",
      },
      {
        src: "/projects/cloud-topology.svg",
        alt: "Cloud & DevOps — production topology with load balancer, servers and uptime",
      },
    ],
    seo: {
      title: "Cloud Migration & DevOps — Case Study | KAALAMITHRA",
      description:
        "Case study: cloud migration with CI/CD automation, containerized deployments, monitoring, backups and security hardening.",
    },
  },
  {
    slug: "business-intelligence-dashboard",
    name: "Business Intelligence Dashboard",
    tagline:
      "One live view of the business — KPIs, sales, marketing and customer analytics.",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    overview:
      "A business intelligence layer that consolidates data from sales, marketing and operations into interactive dashboards and automated reports — replacing hours of manual reporting with a single live view of performance.",
    challenge:
      "[BUSINESS CHALLENGE — e.g., data scattered across tools and decisions made without a shared view of performance]",
    solution:
      "We consolidated the data sources, modeled the KPIs with the leadership team, and built interactive dashboards with automated reporting so every decision starts from the same trusted numbers.",
    services: ["data-analytics", "business-software-crm"],
    subServicesUsed: [
      {
        service: "data-analytics",
        items: [
          "Business Intelligence",
          "Data Visualization",
          "KPI Tracking",
          "Automated Reports",
        ],
      },
      {
        service: "business-software-crm",
        items: ["Business Dashboards"],
      },
    ],
    technologies: ["Python", "Pandas", "SQL", "Power BI", "PostgreSQL"],
    implementation: [
      "Discovery: KPIs, data sources and reporting cadence",
      "Data modeling and pipeline setup",
      "Dashboard design and build",
      "Automated reports and alerts",
      "Training and adoption with the leadership team",
    ],
    results: [
      "[RESULTS — e.g., hours saved per week on manual reporting]",
      "[RESULTS — e.g., faster decision cycles]",
      "[RESULTS — e.g., single trusted source of KPIs]",
    ],
    cover: "/projects/bi-dashboard.jpg",
    screenshots: [
      {
        src: "/projects/bi-dashboard.jpg",
        alt: "Business Intelligence — interactive dashboard with charts, KPIs and data table",
      },
      {
        src: "/projects/bi-report.svg",
        alt: "Business Intelligence — automated weekly leadership report",
      },
    ],
    seo: {
      title: "Business Intelligence Dashboard — Case Study | KAALAMITHRA",
      description:
        "Case study: a business intelligence system with interactive dashboards, KPI tracking and automated reporting.",
    },
  },
  {
    slug: "saas-mvp-launch",
    name: "SaaS MVP — Design & Launch",
    tagline: "From idea to launched MVP in weeks, built to validate and scale.",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY — e.g., SaaS]",
    overview:
      "A complete MVP engagement: product strategy and scoping, UI/UX design, web application development, API and database architecture, cloud setup with CI/CD — and an AI integration that became the product's core differentiator.",
    challenge:
      "[BUSINESS CHALLENGE — e.g., a founder with a validated idea but no technical team or roadmap]",
    solution:
      "We scoped the MVP to the smallest version that delivers real value, designed a clean UX, built the web app on a modern stack, and launched it on scalable cloud infrastructure with automated delivery pipelines.",
    services: ["startup-mvp", "cloud-devops", "ai-automation"],
    subServicesUsed: [
      {
        service: "startup-mvp",
        items: [
          "Product Strategy",
          "UI/UX Design",
          "Web Application Development",
          "API Development",
        ],
      },
      {
        service: "cloud-devops",
        items: ["Cloud Architecture", "CI/CD Pipelines"],
      },
      {
        service: "ai-automation",
        items: ["Custom AI Integrations"],
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "OpenAI APIs",
    ],
    implementation: [
      "Product strategy and MVP scoping workshop",
      "UI/UX design and clickable prototype",
      "Development: web app, APIs and database",
      "AI integration and testing",
      "Cloud launch with CI/CD and monitoring",
    ],
    results: [
      "[RESULTS — e.g., time from idea to launch]",
      "[RESULTS — e.g., early user adoption feedback]",
      "[RESULTS — e.g., follow-on features shipped]",
    ],
    cover: "/projects/saas-app.jpg",
    screenshots: [
      {
        src: "/projects/saas-app.jpg",
        alt: "SaaS MVP — onboarding screen with setup checklist and product preview",
      },
      {
        src: "/projects/saas-metrics.svg",
        alt: "SaaS MVP — post-launch traction metrics and launch checklist",
      },
    ],
    seo: {
      title: "SaaS MVP Launch — Case Study | KAALAMITHRA",
      description:
        "Case study: taking a SaaS idea from strategy and design to a launched, AI-powered MVP on scalable cloud infrastructure.",
    },
  },
  {
    slug: "founder-personal-branding",
    name: "Founder Personal Branding System",
    tagline:
      "A repeatable content and branding engine that builds authority and brings inbound leads.",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    overview:
      "A personal branding system for a founder: positioning, LinkedIn and Instagram branding, a content strategy with repeatable creation workflows, and a landing page with lead capture so authority turns into enquiries.",
    challenge:
      "[BUSINESS CHALLENGE — e.g., deep expertise but no visibility and no consistent content system]",
    solution:
      "We defined the brand positioning and content pillars, built a repeatable creation and design workflow, and connected the audience to a simple lead capture funnel — turning visibility into business opportunities.",
    services: ["content-personal-branding", "lead-generation"],
    subServicesUsed: [
      {
        service: "content-personal-branding",
        items: [
          "Personal Branding",
          "LinkedIn Branding",
          "Content Strategy",
          "Copywriting",
        ],
      },
      {
        service: "lead-generation",
        items: ["Landing Page Development", "Lead Capture Systems"],
      },
    ],
    technologies: [
      "Content Strategy Frameworks",
      "Design Systems",
      "Social Analytics",
      "Next.js",
    ],
    implementation: [
      "Positioning and audience discovery",
      "Content pillars and calendar design",
      "Profile and creative system rollout",
      "Landing page and lead capture build",
      "Measure, refine and grow",
    ],
    results: [
      "[RESULTS — e.g., growth in qualified audience]",
      "[RESULTS — e.g., increase in inbound enquiries]",
      "[RESULTS — e.g., speaking / partnership opportunities]",
    ],
    cover: "/projects/branding-content-grid.jpg",
    screenshots: [
      {
        src: "/projects/branding-content-grid.jpg",
        alt: "Personal Branding — content planner with post grid and engagement stats",
      },
      {
        src: "/projects/branding-audience.svg",
        alt: "Personal Branding — 90-day audience growth and engagement analytics",
      },
    ],
    seo: {
      title: "Founder Personal Branding — Case Study | KAALAMITHRA",
      description:
        "Case study: a founder personal branding system with positioning, content strategy and a lead capture funnel.",
    },
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const getProjectsByService = (serviceSlug: string) =>
  serviceSlug === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.services.includes(serviceSlug));

export const getRelatedProjects = (project: Project, count = 3) =>
  PROJECTS.filter(
    (p) =>
      p.slug !== project.slug &&
      p.services.some((s) => project.services.includes(s)),
  ).slice(0, count);
