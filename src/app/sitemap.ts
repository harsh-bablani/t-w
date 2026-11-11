import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about/", "destinations/", "services/", "packages/", "contact/", "faq/"];
  return [
    ...pages.map((p) => ({ url: `${site.url}/${p}` })),
    ...destinations.map((d) => ({ url: `${site.url}/destinations/${d.slug}/` })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}/` })),
  ];
}
