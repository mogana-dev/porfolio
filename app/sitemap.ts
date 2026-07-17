import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { countries } from "@/lib/countries";
import { articlesEn } from "@/lib/articles";

const siteUrl = "https://mogana.dev";

type RouteDef = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const routes: RouteDef[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about-me", changeFrequency: "monthly", priority: 0.8 },
  { path: "/my-profile", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/skills", changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-studies", changeFrequency: "weekly", priority: 0.9 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.85 },
  { path: "/countries", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hire-me", changeFrequency: "monthly", priority: 0.75 },
  { path: "/availability", changeFrequency: "weekly", priority: 0.65 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/recruiter-faq", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of routes) {
    const enUrl = `${siteUrl}${r.path}`;
    const frUrl = `${siteUrl}/fr${r.path}`;
    const alternates = { languages: { en: enUrl, fr: frUrl, "x-default": enUrl } };
    entries.push(
      { url: enUrl, lastModified, changeFrequency: r.changeFrequency, priority: r.priority, alternates },
      { url: frUrl, lastModified, changeFrequency: r.changeFrequency, priority: r.priority * 0.95, alternates }
    );
  }

  for (const p of projects.filter((pr) => pr.hasCaseStudy)) {
    const enUrl = `${siteUrl}/case-studies/${p.slug}`;
    const frUrl = `${siteUrl}/fr/case-studies/${p.slug}`;
    const alternates = { languages: { en: enUrl, fr: frUrl, "x-default": enUrl } };
    entries.push(
      { url: enUrl, lastModified, changeFrequency: "monthly", priority: 0.6, alternates },
      { url: frUrl, lastModified, changeFrequency: "monthly", priority: 0.57, alternates }
    );
  }

  for (const c of countries) {
    const enUrl = `${siteUrl}/countries/${c.slug}`;
    const frUrl = `${siteUrl}/fr/countries/${c.slug}`;
    const alternates = { languages: { en: enUrl, fr: frUrl, "x-default": enUrl } };
    entries.push(
      { url: enUrl, lastModified, changeFrequency: "monthly", priority: 0.55, alternates },
      { url: frUrl, lastModified, changeFrequency: "monthly", priority: 0.52, alternates }
    );
  }

  for (const a of articlesEn) {
    const enUrl = `${siteUrl}/articles/${a.slug}`;
    const frUrl = `${siteUrl}/fr/articles/${a.slug}`;
    const alternates = { languages: { en: enUrl, fr: frUrl, "x-default": enUrl } };
    entries.push(
      { url: enUrl, lastModified, changeFrequency: "monthly", priority: 0.6, alternates },
      { url: frUrl, lastModified, changeFrequency: "monthly", priority: 0.57, alternates }
    );
  }

  return entries;
}
