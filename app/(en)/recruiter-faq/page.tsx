import type { Metadata } from "next";
import RecruiterFaqBody from "@/components/RecruiterFaqBody";

export const metadata: Metadata = {
  title:
    "Recruiter FAQ | Mogana.dev — Availability, Relocation & Full Stack Skills",
  description:
    "Answers to common recruiter questions about Mogana.dev, including full stack experience, SaaS delivery, AI integration, relocation, remote work, availability and interviews.",
  keywords: [
    "Mogana.dev recruiter FAQ",
    "full stack engineer availability",
    "software engineer relocation",
    "SaaS product engineer",
    "AI engineer interview",
    "Next.js developer available",
    "visa sponsorship software engineer",
  ],
  alternates: {
    canonical: "/recruiter-faq",
    languages: {
      en: "/recruiter-faq",
      fr: "/fr/recruiter-faq",
      "x-default": "/recruiter-faq",
    },
  },
  openGraph: {
    type: "website",
    url: "/recruiter-faq",
    title: "Recruiter FAQ | Mogana.dev",
    description:
      "Clear answers about experience, technology, availability, relocation and international hiring.",
    siteName: "Mogana.dev",
    images: [
      {
        url: "/images/banners/recruiter-faq.webp",
        width: 1920,
        height: 1080,
        alt: "Mogana.dev recruiter FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruiter FAQ | Mogana.dev",
    description:
      "Clear answers about experience, technology, availability, relocation and international hiring.",
    images: ["/images/banners/recruiter-faq.webp"],
  },
};

export default function RecruiterFaqPage() {
  return <RecruiterFaqBody locale="en" />;
}
