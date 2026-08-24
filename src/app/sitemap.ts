import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { towns } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/kitchens",
    "/bathrooms",
    "/joinery",
    "/interiors",
    "/gallery",
    "/trade-supply",
  ];

  const pages = routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const areaPages = towns.map((town) => ({
    url: `${business.siteUrl}/areas/${town.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...areaPages];
}
