import type { Metadata } from "next";
import PrivacyBody from "@/components/PrivacyBody";

export const metadata: Metadata = {
  title: "Privacy | Mogana.dev",
  description: "Privacy information for the Mogana.dev website — what's collected, what isn't, and how to get in touch about it.",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", fr: "/fr/privacy", "x-default": "/privacy" },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyBody locale="en" />;
}
