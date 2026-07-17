import type { Metadata } from "next";
import SkillsBody from "@/components/SkillsBody";

export const metadata: Metadata = {
  title:
    "Skills | Mogana.dev — Full Stack, SaaS, AI & Product Engineering",
  description:
    "Explore how Mogana.dev uses Next.js, React, TypeScript, Supabase, PostgreSQL, cloud deployment, AI integration, automation, SEO and product thinking to build complete digital products.",
  keywords: [
    "Mogana.dev skills",
    "Full Stack Product Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "PostgreSQL Developer",
    "SaaS Development",
    "AI Integration",
    "Business Automation",
    "Enterprise Software",
    "Technical SEO",
  ],
  alternates: {
    canonical: "/skills",
    languages: {
      en: "/skills",
      fr: "/fr/skills",
      "x-default": "/skills",
    },
  },
  openGraph: {
    type: "website",
    url: "/skills",
    title: "Skills | Mogana.dev",
    description:
      "A practical full stack skill set covering product interfaces, application logic, secure databases, cloud deployment, AI and business automation.",
    siteName: "Mogana.dev",
  },
  twitter: {
    card: "summary",
    title: "Skills | Mogana.dev",
    description:
      "Full stack product engineering skills across SaaS, enterprise software, AI, databases, cloud and automation.",
  },
};

export default function SkillsPage() {
  return <SkillsBody locale="en" />;
}