import type { Metadata } from "next";
import MyProfileBody from "@/components/MyProfileBody";

export const metadata: Metadata = {
  title:
    "Profil Professionnel | Mogana.dev — Ingénieur Produit Full Stack",
  description:
    "Découvrez le profil professionnel de Mogana.dev, Ingénieur Produit Full Stack spécialisé en SaaS, logiciels d’entreprise, applications IA, ERP, CRM et automatisation.",
  keywords: [
    "Mogana.dev",
    "Ingénieur Produit Full Stack",
    "Développeur SaaS",
    "Ingénieur logiciel entreprise",
    "Développeur IA",
    "Développeur Next.js",
    "Développeur React",
    "Développeur Supabase",
    "Développeur ERP",
    "Développeur CRM",
    "Automatisation entreprise",
    "Ingénieur produit international",
  ],
  alternates: {
    canonical: "/fr/my-profile",
    languages: {
      en: "/my-profile",
      fr: "/fr/my-profile",
      "x-default": "/my-profile",
    },
  },
  openGraph: {
    type: "profile",
    url: "/fr/my-profile",
    title:
      "Mogana.dev — Ingénieur Produit Full Stack",
    description:
      "Expérience professionnelle, technologies, compétences et ingénierie produit en SaaS, logiciels d’entreprise et automatisation IA.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/profile/profile-cover.webp",
        width: 1920,
        height: 520,
        alt: "Profil professionnel Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mogana.dev — Ingénieur Produit Full Stack",
    description:
      "Expérience en SaaS, logiciels d’entreprise, intelligence artificielle et automatisation.",
    images: ["/images/profile/profile-cover.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MyProfilePageFr() {
  return <MyProfileBody locale="fr" />;
}