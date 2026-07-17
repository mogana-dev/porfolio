import type { Metadata } from "next";
import ProjectsBody from "@/components/ProjectsBody";

export const metadata: Metadata = {
  title: "Projects | Mogana.dev — SaaS, AI & Full Stack Product Engineering",
  description:
    "Explore 16 production projects built by Mogana.dev across enterprise SaaS, accounting, marketplaces, e-commerce, tourism, AI and corporate platforms.",
  keywords: [
    "Mogana.dev projects",
    "Full Stack Product Engineer portfolio",
    "SaaS developer portfolio",
    "Next.js projects",
    "Supabase projects",
    "AI automation projects",
    "enterprise software portfolio",
    "marketplace developer",
  ],
  alternates: {
    canonical: "/projects",
    languages: {
      en: "/projects",
      fr: "/fr/projects",
      "x-default": "/projects",
    },
  },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Projects | Mogana.dev",
    description:
      "Sixteen production projects across SaaS, enterprise software, AI, marketplaces and e-commerce.",
    siteName: "Mogana.dev",
    images: [
      {
        url: "/images/banners/hero.webp",
        width: 1920,
        height: 1080,
        alt: "Mogana.dev product engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mogana.dev",
    description:
      "Sixteen production projects across SaaS, enterprise software, AI, marketplaces and e-commerce.",
    images: ["/images/banners/hero.webp"],
  },
};

export default function ProjectsPage() {
  return <ProjectsBody locale="en" />;
}
