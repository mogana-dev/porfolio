import type { Metadata } from "next";
import AboutMeBody from "@/components/AboutMeBody";

export const metadata: Metadata = {
  title: "About Mogana.dev | Full Stack Product Engineer",
  description:
    "Discover Mogana.dev, an independent full stack product engineering brand building SaaS platforms, enterprise software, AI applications, marketplaces and business automation solutions.",
  keywords: [
    "Mogana.dev",
    "full stack product engineer",
    "SaaS developer",
    "enterprise software engineer",
    "AI application developer",
    "business automation developer",
    "Next.js developer",
    "React developer",
    "Supabase developer",
    "ERP developer",
    "CRM developer",
    "product engineer Mauritius",
    "international software engineer",
  ],
  alternates: {
    canonical: "/about-me",
    languages: {
      en: "/about-me",
      fr: "/fr/about-me",
      "x-default": "/about-me",
    },
  },
  openGraph: {
    type: "profile",
    url: "/about-me",
    title: "About Mogana.dev | Full Stack Product Engineer",
    description:
      "Product-focused engineering for SaaS, enterprise software, AI applications, marketplaces and business automation.",
    siteName: "Mogana.dev",
    images: [
      {
        url: "/images/banners/about.webp",
        width: 1920,
        height: 720,
        alt: "About Mogana.dev — Full Stack Product Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mogana.dev | Full Stack Product Engineer",
    description:
      "Product-focused engineering for SaaS, enterprise software, AI applications and business automation.",
    images: ["/images/banners/about.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutMePage() {
  return <AboutMeBody locale="en" />;
}