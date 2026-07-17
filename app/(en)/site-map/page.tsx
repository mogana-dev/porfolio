import type { Metadata } from "next";
import SitemapBody from "@/components/SitemapBody";

export const metadata: Metadata = {
  title: "Sitemap | Mogana.dev",
  description: "A full index of every page on Mogana.dev — main pages, recruiter resources, case studies, articles and country pages.",
  alternates: {
    canonical: "/site-map",
    languages: { en: "/site-map", fr: "/fr/site-map", "x-default": "/site-map" },
  },
  robots: { index: true, follow: true },
};

export default function SitemapPage() {
  return <SitemapBody locale="en" />;
}
