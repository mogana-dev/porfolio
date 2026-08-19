import type { Metadata } from "next";
import SitemapBody from "@/components/SitemapBody";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap | Mogana.dev",
  description: "A full index of every page on Mogana.dev — main pages, recruiter resources, case studies, articles and country pages.",
  alternates: {
    canonical: "/site-map",
    languages: { en: "/site-map", fr: "/fr/site-map", "x-default": "/site-map" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sitemap | Mogana.dev",
    description: "A full index of every page on Mogana.dev — main pages, recruiter resources, case studies, articles and country pages.",
    url: `${SITE_URL}/site-map`,
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev — Sitemap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Mogana.dev",
    description: "A full index of every page on Mogana.dev.",
    images: ["/images/seo/og-image.webp"],
  },
};

export default function SitemapPage() {
  return <SitemapBody locale="en" />;
}
