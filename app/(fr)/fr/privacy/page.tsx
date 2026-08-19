import type { Metadata } from "next";
import PrivacyBody from "@/components/PrivacyBody";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialit\u00e9 | Mogana.dev",
  description: "Informations sur la confidentialit\u00e9 pour le site Mogana.dev — ce qui est collect\u00e9, ce qui ne l'est pas, et comment nous contacter \u00e0 ce sujet.",
  alternates: {
    canonical: "/fr/privacy",
    languages: { en: "/privacy", fr: "/fr/privacy", "x-default": "/privacy" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Confidentialité | Mogana.dev",
    description: "Informations sur la confidentialité pour le site Mogana.dev — ce qui est collecté, ce qui ne l'est pas, et comment nous contacter à ce sujet.",
    url: `${SITE_URL}/fr/privacy`,
    locale: "fr_FR",
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev — Confidentialité" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confidentialité | Mogana.dev",
    description: "Informations sur la confidentialité pour le site Mogana.dev.",
    images: ["/images/seo/og-image.webp"],
  },
};

export default function PrivacyPageFr() {
  return <PrivacyBody locale="fr" />;
}
