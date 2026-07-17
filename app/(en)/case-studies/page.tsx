import type { Metadata } from "next";
import CaseStudiesBody from "@/components/CaseStudiesBody";

export const metadata: Metadata = {
  title: "Case Studies | Mogana.dev — Full Stack Product Engineer",
  description: "Deep-dive case studies covering the problem, solution, approach and outcome for Mogana.dev's flagship projects.",
  alternates: {
    canonical: "/case-studies",
    languages: { en: "/case-studies", fr: "/fr/case-studies", "x-default": "/case-studies" },
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesBody locale="en" />;
}
