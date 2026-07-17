import type { Metadata } from "next";
import RecruiterFaqBody from "@/components/RecruiterFaqBody";

export const metadata: Metadata = {
  title:
    "FAQ Recruteurs | Mogana.dev — Disponibilité, Mobilité et Compétences Full Stack",
  description:
    "Réponses aux questions fréquentes sur Mogana.dev : expérience full stack, SaaS, intégration IA, mobilité internationale, télétravail, disponibilité et entretiens.",
  keywords: [
    "FAQ recruteurs Mogana.dev",
    "disponibilité ingénieur full stack",
    "mobilité ingénieur logiciel",
    "ingénieur produit SaaS",
    "entretien ingénieur IA",
    "développeur Next.js disponible",
    "visa sponsorship développeur",
  ],
  alternates: {
    canonical: "/fr/recruiter-faq",
    languages: {
      en: "/recruiter-faq",
      fr: "/fr/recruiter-faq",
      "x-default": "/recruiter-faq",
    },
  },
  openGraph: {
    type: "website",
    url: "/fr/recruiter-faq",
    title: "FAQ Recruteurs | Mogana.dev",
    description:
      "Des réponses claires sur l’expérience, la stack, la disponibilité, la mobilité et le recrutement international.",
    siteName: "Mogana.dev",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/banners/recruiter-faq.webp",
        width: 1920,
        height: 1080,
        alt: "FAQ recruteurs Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Recruteurs | Mogana.dev",
    description:
      "Des réponses claires sur l’expérience, la stack, la disponibilité, la mobilité et le recrutement international.",
    images: ["/images/banners/recruiter-faq.webp"],
  },
};

export default function RecruiterFaqPageFr() {
  return <RecruiterFaqBody locale="fr" />;
}
