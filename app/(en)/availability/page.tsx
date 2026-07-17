import type { Metadata } from "next";
import AvailabilityBody from "@/components/AvailabilityBody";

export const metadata: Metadata = {
  title:
    "Availability | Mogana.dev — International Full Stack Product Engineer",
  description:
    "Current availability for Mogana.dev across full-time roles, international relocation, remote work, SaaS engineering, AI automation and product development opportunities.",
  keywords: [
    "Mogana.dev availability",
    "full stack product engineer available",
    "international software engineer",
    "relocation software engineer",
    "SaaS engineer available",
    "AI automation engineer",
    "Next.js developer relocation",
    "visa sponsorship software engineer",
  ],
  alternates: {
    canonical: "/availability",
    languages: {
      en: "/availability",
      fr: "/fr/availability",
      "x-default": "/availability",
    },
  },
  openGraph: {
    type: "website",
    url: "/availability",
    title: "Availability | Mogana.dev",
    description:
      "Open to international full-time roles, relocation and product engineering opportunities.",
    siteName: "Mogana.dev",
    images: [
      {
        url: "/images/banners/availability.webp",
        width: 1920,
        height: 1080,
        alt: "Mogana.dev availability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Availability | Mogana.dev",
    description:
      "Open to international full-time roles, relocation and product engineering opportunities.",
    images: ["/images/banners/availability.webp"],
  },
};

export default function AvailabilityPage() {
  return <AvailabilityBody locale="en" />;
}
