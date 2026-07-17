import type { Metadata } from "next";
import ArticlesBody from "@/components/ArticlesBody";

export const metadata: Metadata = {
  title: "Articles | Mogana.dev — SaaS, Product & Full Stack Engineering",
  description:
    "Practical articles from Mogana.dev on SaaS engineering, product thinking, security, AI integration, internationalisation and modern software delivery.",
  keywords: [
    "Mogana.dev articles",
    "SaaS engineering",
    "product thinking",
    "full stack engineering",
    "software security",
    "AI integration",
    "Next.js articles",
    "business automation",
  ],
  alternates: {
    canonical: "/articles",
    languages: {
      en: "/articles",
      fr: "/fr/articles",
      "x-default": "/articles",
    },
  },
  openGraph: {
    type: "website",
    url: "/articles",
    title: "Articles | Mogana.dev",
    description:
      "Practical writing on SaaS, product thinking, security, AI and modern software delivery.",
    siteName: "Mogana.dev",
  },
  twitter: {
    card: "summary",
    title: "Articles | Mogana.dev",
    description:
      "Practical writing on SaaS, product thinking, security, AI and modern software delivery.",
  },
};

export default function ArticlesPage() {
  return <ArticlesBody locale="en" />;
}
