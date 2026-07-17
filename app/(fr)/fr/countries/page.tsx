import type { Metadata } from "next";
import CountriesBody from "@/components/CountriesBody";

export const metadata: Metadata = {
  title: "Pays | Mogana.dev — Opportunit\u00e9s Internationales en Ing\u00e9nierie Produit",
  description: "Mogana.dev est ouvert aux opportunit\u00e9s d'Ing\u00e9nieur Produit Full Stack, SaaS et IA en Europe et en Australie — explorez la disponibilit\u00e9 par pays.",
  alternates: {
    canonical: "/fr/countries",
    languages: { en: "/countries", fr: "/fr/countries", "x-default": "/countries" },
  },
  openGraph: {
    title: "Pays | Mogana.dev",
    description: "Mogana.dev est ouvert aux opportunités d'Ingénieur Produit Full Stack, SaaS et IA en Europe et en Australie — explorez la disponibilité par pays.",
    url: "https://mogana.dev/fr/countries",
    locale: "fr_FR",
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev — Opportunités Internationales" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pays | Mogana.dev",
    description: "Mogana.dev est ouvert aux opportunités d'Ingénieur Produit Full Stack, SaaS et IA en Europe et en Australie — explorez la disponibilité par pays.",
    images: ["/images/seo/og-image.webp"],
  },
};

export default function CountriesPageFr() {
  return <CountriesBody locale="fr" />;
}
