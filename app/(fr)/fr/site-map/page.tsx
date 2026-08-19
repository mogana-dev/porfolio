import type { Metadata } from "next";
import SitemapBody from "@/components/SitemapBody";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan du site | Mogana.dev",
  description: "Un index complet de toutes les pages de Mogana.dev — pages principales, ressources recruteurs, études de cas, articles et pages pays.",
  alternates: {
    canonical: "/fr/site-map",
    languages: { en: "/site-map", fr: "/fr/site-map", "x-default": "/site-map" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Plan du site | Mogana.dev",
    description: "Un index complet de toutes les pages de Mogana.dev — pages principales, ressources recruteurs, études de cas, articles et pages pays.",
    url: `${SITE_URL}/fr/site-map`,
    locale: "fr_FR",
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev — Plan du site" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan du site | Mogana.dev",
    description: "Un index complet de toutes les pages de Mogana.dev.",
    images: ["/images/seo/og-image.webp"],
  },
};

export default function SitemapPageFr() {
  return <SitemapBody locale="fr" />;
}
