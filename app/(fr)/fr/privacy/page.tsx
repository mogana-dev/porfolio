import type { Metadata } from "next";
import PrivacyBody from "@/components/PrivacyBody";

export const metadata: Metadata = {
  title: "Confidentialit\u00e9 | Mogana.dev",
  description: "Informations sur la confidentialit\u00e9 pour le site Mogana.dev — ce qui est collect\u00e9, ce qui ne l'est pas, et comment nous contacter \u00e0 ce sujet.",
  alternates: {
    canonical: "/fr/privacy",
    languages: { en: "/privacy", fr: "/fr/privacy", "x-default": "/privacy" },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPageFr() {
  return <PrivacyBody locale="fr" />;
}
