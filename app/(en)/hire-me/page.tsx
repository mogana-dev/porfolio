import type { Metadata } from "next";
import HireMeBody from "@/components/HireMeBody";

export const metadata: Metadata = {
  title:
    "Hire Mogana.dev | Full Stack Product Engineer — SaaS, AI & Automation",
  description:
    "Hire Mogana.dev for full stack product engineering, SaaS platforms, enterprise software, AI integration and business automation. Open to international full-time opportunities and relocation.",
  keywords: [
    "hire Mogana.dev",
    "hire full stack product engineer",
    "SaaS product engineer available",
    "Next.js developer for hire",
    "AI automation engineer",
    "international software engineer",
    "product engineer relocation",
    "full stack developer visa sponsorship",
  ],
  alternates: {
    canonical: "/hire-me",
    languages: {
      en: "/hire-me",
      fr: "/fr/hire-me",
      "x-default": "/hire-me",
    },
  },
  openGraph: {
    type: "website",
    url: "/hire-me",
    title: "Hire Mogana.dev | Full Stack Product Engineer",
    description:
      "A product-focused full stack engineer combining software engineering with real business operations experience.",
    siteName: "Mogana.dev",
    images: [
      {
        url: "/images/banners/hire-me.webp",
        width: 1920,
        height: 1080,
        alt: "Hire Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Mogana.dev | Full Stack Product Engineer",
    description:
      "Full stack product engineering, SaaS, enterprise software, AI and automation.",
    images: ["/images/banners/hire-me.webp"],
  },
};

export default function HireMePage() {
  return <HireMeBody locale="en" />;
}
