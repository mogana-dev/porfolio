import type { Metadata } from "next";
import ContactBody from "@/components/ContactBody";

export const metadata: Metadata = {
  title: "Contact | Mogana.dev — Postes, Projets et Opportunités Produit",
  description:
    "Contactez Mogana.dev pour un poste international à temps plein, une mobilité, un produit SaaS, un projet logiciel ou une collaboration en ingénierie produit.",
  keywords: [
    "contact Mogana.dev",
    "recruter ingénieur produit full stack",
    "développeur SaaS disponible",
    "ingénieur logiciel international",
    "contact développeur Next.js",
    "mobilité ingénieur produit",
  ],
  alternates: {
    canonical: "/fr/contact",
    languages: {
      en: "/contact",
      fr: "/fr/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    type: "website",
    url: "/fr/contact",
    title: "Contact | Mogana.dev",
    description:
      "Discutez d’un poste international, d’un produit SaaS, d’un projet logiciel ou d’une collaboration avec Mogana.dev.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/banners/contact.webp",
        width: 1920,
        height: 1080,
        alt: "Contacter Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mogana.dev",
    description:
      "Discutez d’un poste international, d’un produit SaaS ou d’une collaboration en ingénierie produit.",
    images: ["/images/banners/contact.webp"],
  },
};

export default function ContactPageFr() {
  return <ContactBody locale="fr" />;
}
