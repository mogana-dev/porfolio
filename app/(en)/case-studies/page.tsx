import type { Metadata } from "next";
import CaseStudiesBody from "@/components/CaseStudiesBody";

export const metadata: Metadata = {
  title: "Case Studies | Mogana.dev — Full Stack Product Engineer",
  description: "Deep-dive case studies covering the problem, solution, approach and outcome for Mogana.dev's flagship projects.",
  alternates: {
    canonical: "/case-studies",
    languages: { en: "/case-studies", fr: "/fr/case-studies", "x-default": "/case-studies" },
  },
  openGraph: {
    title: "Case Studies | Mogana.dev",
    description: "Deep-dive case studies covering the problem, solution, approach and outcome for Mogana.dev's flagship projects.",
    url: "https://mogana.dev/case-studies",
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Mogana.dev",
    description: "Deep-dive case studies covering the problem, solution, approach and outcome for Mogana.dev's flagship projects.",
    images: ["/images/seo/og-image.webp"],
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesBody locale="en" />;
}
