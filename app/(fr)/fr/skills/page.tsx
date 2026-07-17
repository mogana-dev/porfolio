import type { Metadata } from "next";
import SkillsBody from "@/components/SkillsBody";

export const metadata: Metadata = {
  title:
    "Compétences | Mogana.dev — Full Stack, SaaS, IA et Ingénierie Produit",
  description:
    "Découvrez comment Mogana.dev utilise Next.js, React, TypeScript, Supabase, PostgreSQL, le cloud, l’IA, l’automatisation, le SEO et la réflexion produit pour construire des produits numériques complets.",
  keywords: [
    "compétences Mogana.dev",
    "Ingénieur Produit Full Stack",
    "Développeur Next.js",
    "Développeur React",
    "Développeur TypeScript",
    "Développeur Supabase",
    "Développeur PostgreSQL",
    "Développement SaaS",
    "Intégration IA",
    "Automatisation métier",
    "Logiciels d’entreprise",
    "SEO technique",
  ],
  alternates: {
    canonical: "/fr/skills",
    languages: {
      en: "/skills",
      fr: "/fr/skills",
      "x-default": "/skills",
    },
  },
  openGraph: {
    type: "website",
    url: "/fr/skills",
    title: "Compétences | Mogana.dev",
    description:
      "Une stack full stack pratique couvrant interfaces, logique applicative, bases sécurisées, cloud, IA et automatisation métier.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary",
    title: "Compétences | Mogana.dev",
    description:
      "Compétences en ingénierie produit full stack, SaaS, logiciels d’entreprise, IA, cloud et automatisation.",
  },
};

export default function SkillsPageFr() {
  return <SkillsBody locale="fr" />;
}