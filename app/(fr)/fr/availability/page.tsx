import type { Metadata } from "next";
import AvailabilityBody from "@/components/AvailabilityBody";

export const metadata: Metadata = {
  title:
    "Disponibilité | Mogana.dev — Ingénieur Produit Full Stack International",
  description:
    "Disponibilité actuelle de Mogana.dev pour les postes à temps plein, la mobilité internationale, le télétravail, le SaaS, l’automatisation IA et les opportunités produit.",
  keywords: [
    "disponibilité Mogana.dev",
    "ingénieur produit full stack disponible",
    "ingénieur logiciel international",
    "mobilité développeur",
    "ingénieur SaaS disponible",
    "ingénieur automatisation IA",
    "développeur Next.js mobilité",
    "visa sponsorship développeur",
  ],
  alternates: {
    canonical: "/fr/availability",
    languages: {
      en: "/availability",
      fr: "/fr/availability",
      "x-default": "/availability",
    },
  },
  openGraph: {
    type: "website",
    url: "/fr/availability",
    title: "Disponibilité | Mogana.dev",
    description:
      "Ouvert aux postes internationaux à temps plein, à la mobilité et aux opportunités en ingénierie produit.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/banners/availability.webp",
        width: 1920,
        height: 1080,
        alt: "Disponibilité Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disponibilité | Mogana.dev",
    description:
      "Ouvert aux postes internationaux à temps plein, à la mobilité et aux opportunités en ingénierie produit.",
    images: ["/images/banners/availability.webp"],
  },
};

export default function AvailabilityPageFr() {
  return <AvailabilityBody locale="fr" />;
}
