import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // "/" is intentionally absent: it 307-redirects to /portfolio (see
  // next.config.mjs), and sitemaps should only list canonical, served URLs.
  // /portfolio is the landing page the root URL forwards to; /home is the
  // marketing home page the "Home" links point at.
  const staticRoutes = [
    { route: "/portfolio", priority: 1 },
    { route: "/home", priority: 0.9 },
    { route: "/services", priority: 0.8 },
    { route: "/contact", priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
