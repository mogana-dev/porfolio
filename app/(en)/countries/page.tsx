import type { Metadata } from "next";
import CountriesBody from "@/components/CountriesBody";

export const metadata: Metadata = {
  title: "Countries | Mogana.dev — International Product Engineering Opportunities",
  description: "Mogana.dev is open to Full Stack Product Engineer, SaaS and AI opportunities across Europe and Australia — explore country-specific availability.",
  alternates: {
    canonical: "/countries",
    languages: { en: "/countries", fr: "/fr/countries", "x-default": "/countries" },
  },
};

export default function CountriesPage() {
  return <CountriesBody locale="en" />;
}
