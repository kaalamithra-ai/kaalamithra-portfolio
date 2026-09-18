import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // "/" is intentionally absent: it 307-redirects to /portfolio (see
  // next.config.mjs), and sitemaps should only list canonical, served URLs.
  const staticRoutes = ["/services", "/portfolio", "/contact"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "/portfolio" ? 1 : 0.8,
    }),
  );

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
