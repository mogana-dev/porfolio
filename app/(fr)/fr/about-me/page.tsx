import type { Metadata } from "next";
import AboutMeBody from "@/components/AboutMeBody";

export const metadata: Metadata = {
  title: "À propos de Mogana.dev | Ingénieur Produit Full Stack",
  description:
    "Découvrez Mogana.dev, une marque indépendante d’ingénierie produit spécialisée dans les plateformes SaaS, les logiciels d’entreprise, l’intelligence artificielle, les marketplaces et l’automatisation.",
  keywords: [
    "Mogana.dev",
    "ingénieur produit full stack",
    "développeur SaaS",
    "développeur logiciel entreprise",
    "développeur intelligence artificielle",
    "automatisation entreprise",
    "développeur Next.js",
    "développeur React",
    "développeur Supabase",
    "développeur ERP",
    "développeur CRM",
    "ingénieur logiciel international",
  ],
  alternates: {
    canonical: "/fr/about-me",
    languages: {
      en: "/about-me",
      fr: "/fr/about-me",
      "x-default": "/about-me",
    },
  },
  openGraph: {
    type: "profile",
    url: "/fr/about-me",
    title: "À propos de Mogana.dev | Ingénieur Produit Full Stack",
    description:
      "Ingénierie produit pour plateformes SaaS, logiciels d’entreprise, applications IA, marketplaces et automatisation.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/banners/about.webp",
        width: 1920,
        height: 720,
        alt: "À propos de Mogana.dev — Ingénierie Produit Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de Mogana.dev | Ingénieur Produit Full Stack",
    description:
      "Ingénierie produit pour SaaS, logiciels d’entreprise, intelligence artificielle et automatisation.",
    images: ["/images/banners/about.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutMePageFr() {
  return <AboutMeBody locale="fr" />;
}