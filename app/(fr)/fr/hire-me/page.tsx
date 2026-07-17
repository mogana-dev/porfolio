import type { Metadata } from "next";
import HireMeBody from "@/components/HireMeBody";

export const metadata: Metadata = {
  title:
    "Recruter Mogana.dev | Ingénieur Produit Full Stack — SaaS, IA et Automatisation",
  description:
    "Recrutez Mogana.dev pour l’ingénierie produit full stack, les plateformes SaaS, les logiciels d’entreprise, l’intégration IA et l’automatisation métier. Ouvert aux opportunités internationales et à la mobilité.",
  keywords: [
    "recruter Mogana.dev",
    "recruter ingénieur produit full stack",
    "ingénieur SaaS disponible",
    "développeur Next.js à recruter",
    "ingénieur automatisation IA",
    "ingénieur logiciel international",
    "mobilité ingénieur produit",
    "développeur full stack visa sponsorship",
  ],
  alternates: {
    canonical: "/fr/hire-me",
    languages: {
      en: "/hire-me",
      fr: "/fr/hire-me",
      "x-default": "/hire-me",
    },
  },
  openGraph: {
    type: "website",
    url: "/fr/hire-me",
    title: "Recruter Mogana.dev | Ingénieur Produit Full Stack",
    description:
      "Un ingénieur produit full stack combinant développement logiciel et expérience réelle des opérations métier.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/banners/hire-me.webp",
        width: 1920,
        height: 1080,
        alt: "Recruter Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruter Mogana.dev | Ingénieur Produit Full Stack",
    description:
      "Ingénierie produit full stack, SaaS, logiciels d’entreprise, IA et automatisation.",
    images: ["/images/banners/hire-me.webp"],
  },
};

export default function HireMePageFr() {
  return <HireMeBody locale="fr" />;
}
