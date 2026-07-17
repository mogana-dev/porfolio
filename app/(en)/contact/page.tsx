import type { Metadata } from "next";
import ContactBody from "@/components/ContactBody";

export const metadata: Metadata = {
  title: "Contact | Mogana.dev — Roles, Projects & Product Opportunities",
  description:
    "Contact Mogana.dev about international full-time roles, relocation, SaaS products, software projects and product engineering collaborations.",
  keywords: [
    "contact Mogana.dev",
    "hire full stack product engineer",
    "SaaS developer available",
    "international software engineer",
    "Next.js developer contact",
    "product engineer relocation",
  ],
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      fr: "/fr/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact | Mogana.dev",
    description:
      "Discuss an international role, SaaS product, software project or product engineering collaboration with Mogana.dev.",
    siteName: "Mogana.dev",
    images: [
      {
        url: "/images/banners/contact.webp",
        width: 1920,
        height: 1080,
        alt: "Contact Mogana.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mogana.dev",
    description:
      "Discuss an international role, SaaS product or product engineering collaboration.",
    images: ["/images/banners/contact.webp"],
  },
};

export default function ContactPage() {
  return <ContactBody locale="en" />;
}
