import type { Metadata } from "next";
import PrivacyBody from "@/components/PrivacyBody";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy | Mogana.dev",
  description: "Privacy information for the Mogana.dev website — what's collected, what isn't, and how to get in touch about it.",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", fr: "/fr/privacy", "x-default": "/privacy" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy | Mogana.dev",
    description: "Privacy information for the Mogana.dev website — what's collected, what isn't, and how to get in touch about it.",
    url: `${SITE_URL}/privacy`,
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev — Privacy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy | Mogana.dev",
    description: "Privacy information for the Mogana.dev website — what's collected, what isn't, and how to get in touch about it.",
    images: ["/images/seo/og-image.webp"],
  },
};

export default function PrivacyPage() {
  return <PrivacyBody locale="en" />;
}
