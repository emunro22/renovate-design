import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { towns } from "@/lib/locations";
import { blogPosts } from "@/lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/kitchens",
    "/bathrooms",
    "/joinery",
    "/interiors",
    "/gallery",
    "/trade-supply",
    "/kitchen-renovation-fitting-glasgow",
    "/bathroom-renovations-glasgow",
    "/home-extensions-glasgow",
    "/blog",
    "/privacy-policy",
    "/terms",
  ];

  const lowPriorityRoutes = ["/privacy-policy", "/terms"];

  const pages = routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : lowPriorityRoutes.includes(route) ? 0.3 : 0.8,
  }));

  const areaPages = towns.map((town) => ({
    url: `${business.siteUrl}/areas/${town.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${business.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...pages, ...areaPages, ...blogPages];
}
