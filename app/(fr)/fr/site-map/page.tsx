import type { Metadata } from "next";
import SitemapBody from "@/components/SitemapBody";

export const metadata: Metadata = {
  title: "Plan du site | Mogana.dev",
  description: "Un index complet de toutes les pages de Mogana.dev — pages principales, ressources recruteurs, études de cas, articles et pages pays.",
  alternates: {
    canonical: "/fr/site-map",
    languages: { en: "/site-map", fr: "/fr/site-map", "x-default": "/site-map" },
  },
  robots: { index: true, follow: true },
};

export default function SitemapPageFr() {
  return <SitemapBody locale="fr" />;
}
