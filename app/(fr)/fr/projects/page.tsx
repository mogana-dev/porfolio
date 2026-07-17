import type { Metadata } from "next";
import ProjectsBody from "@/components/ProjectsBody";

export const metadata: Metadata = {
  title: "Projets | Mogana.dev — SaaS, IA et Ingénierie Produit Full Stack",
  description:
    "Découvrez 16 projets en production réalisés par Mogana.dev dans le SaaS, la comptabilité, les marketplaces, l’e-commerce, le tourisme, l’IA et les plateformes professionnelles.",
  keywords: [
    "projets Mogana.dev",
    "portfolio ingénieur produit full stack",
    "portfolio développeur SaaS",
    "projets Next.js",
    "projets Supabase",
    "automatisation IA",
    "logiciels d’entreprise",
    "développeur marketplace",
  ],
  alternates: {
    canonical: "/fr/projects",
    languages: {
      en: "/projects",
      fr: "/fr/projects",
      "x-default": "/projects",
    },
  },
  openGraph: {
    type: "website",
    url: "/fr/projects",
    title: "Projets | Mogana.dev",
    description:
      "Seize projets en production couvrant SaaS, logiciels d’entreprise, IA, marketplaces et e-commerce.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/banners/hero.webp",
        width: 1920,
        height: 1080,
        alt: "Portfolio d’ingénierie produit Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets | Mogana.dev",
    description:
      "Seize projets en production couvrant SaaS, logiciels d’entreprise, IA, marketplaces et e-commerce.",
    images: ["/images/banners/hero.webp"],
  },
};

export default function ProjectsPageFr() {
  return <ProjectsBody locale="fr" />;
}
