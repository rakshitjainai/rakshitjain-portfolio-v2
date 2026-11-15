import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { articlesData } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Base routes
  const routes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/product-thinking",
    "/research",
    "/resume",
    "/resume/finance",
    "/resume/tech",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-11-16",
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/resume") || route === "/projects" ? 0.9 : 0.8,
  }));

  // Article routes
  const articleRoutes = articlesData.map((article) => ({
    url: `${baseUrl}/research/${article.slug}`,
    lastModified: "2026-11-16",
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...routes, ...articleRoutes];
}
