import type { Metadata } from "next";
import CaseStudiesBody from "@/components/CaseStudiesBody";

export const metadata: Metadata = {
  title: "\u00c9tudes de Cas | Mogana.dev — Ing\u00e9nieur Produit Full Stack",
  description: "\u00c9tudes de cas approfondies couvrant le probl\u00e8me, la solution, l'approche et le r\u00e9sultat pour les projets phares de Mogana.dev.",
  alternates: {
    canonical: "/fr/case-studies",
    languages: { en: "/case-studies", fr: "/fr/case-studies", "x-default": "/case-studies" },
  },
  openGraph: {
    title: "Études de Cas | Mogana.dev",
    description: "Études de cas approfondies couvrant le problème, la solution, l'approche et le résultat pour les projets phares de Mogana.dev.",
    url: "https://mogana.dev/fr/case-studies",
    locale: "fr_FR",
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Études de Cas — Mogana.dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Études de Cas | Mogana.dev",
    description: "Études de cas approfondies couvrant le problème, la solution, l'approche et le résultat pour les projets phares de Mogana.dev.",
    images: ["/images/seo/og-image.webp"],
  },
};

export default function CaseStudiesPageFr() {
  return <CaseStudiesBody locale="fr" />;
}
