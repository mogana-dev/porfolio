import type { Metadata } from "next";
import CountriesBody from "@/components/CountriesBody";

export const metadata: Metadata = {
  title: "Pays | Mogana.dev — Opportunit\u00e9s Internationales en Ing\u00e9nierie Produit",
  description: "Mogana.dev est ouvert aux opportunit\u00e9s d'Ing\u00e9nieur Produit Full Stack, SaaS et IA en Europe et en Australie — explorez la disponibilit\u00e9 par pays.",
  alternates: {
    canonical: "/fr/countries",
    languages: { en: "/countries", fr: "/fr/countries", "x-default": "/countries" },
  },
};

export default function CountriesPageFr() {
  return <CountriesBody locale="fr" />;
}
