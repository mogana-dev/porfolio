import type { Metadata } from "next";
import ArticlesBody from "@/components/ArticlesBody";

export const metadata: Metadata = {
  title: "Articles | Mogana.dev — SaaS, Produit et Ingénierie Full Stack",
  description:
    "Articles pratiques de Mogana.dev sur l’ingénierie SaaS, la réflexion produit, la sécurité, l’intégration IA, l’internationalisation et la livraison logicielle moderne.",
  keywords: [
    "articles Mogana.dev",
    "ingénierie SaaS",
    "réflexion produit",
    "ingénierie full stack",
    "sécurité logicielle",
    "intégration IA",
    "articles Next.js",
    "automatisation métier",
  ],
  alternates: {
    canonical: "/fr/articles",
    languages: {
      en: "/articles",
      fr: "/fr/articles",
      "x-default": "/articles",
    },
  },
  openGraph: {
    type: "website",
    url: "/fr/articles",
    title: "Articles | Mogana.dev",
    description:
      "Écrits pratiques sur le SaaS, la réflexion produit, la sécurité, l’IA et la livraison logicielle moderne.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary",
    title: "Articles | Mogana.dev",
    description:
      "Écrits pratiques sur le SaaS, la réflexion produit, la sécurité, l’IA et la livraison logicielle moderne.",
  },
};

export default function ArticlesPageFr() {
  return <ArticlesBody locale="fr" />;
}

