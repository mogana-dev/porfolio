import type { Metadata } from "next";
import MyProfileBody from "@/components/MyProfileBody";

export const metadata: Metadata = {
  title:
    "Professional Profile | Mogana.dev — Full Stack Product Engineer",
  description:
    "Explore the professional profile of Mogana.dev, a Full Stack Product Engineer specialising in SaaS platforms, enterprise software, AI applications, ERP, CRM and business automation.",
  keywords: [
    "Mogana.dev",
    "Full Stack Product Engineer",
    "SaaS Developer",
    "Enterprise Software Engineer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "Supabase Developer",
    "ERP Developer",
    "CRM Developer",
    "Business Automation",
    "International Product Engineer",
  ],
  alternates: {
    canonical: "/my-profile",
    languages: {
      en: "/my-profile",
      fr: "/fr/my-profile",
      "x-default": "/my-profile",
    },
  },
  openGraph: {
    type: "profile",
    url: "/my-profile",
    title:
      "Mogana.dev — Full Stack Product Engineer",
    description:
      "Professional experience, technologies, skills and product engineering capabilities across SaaS, enterprise software and AI automation.",
    siteName: "Mogana.dev",
    images: [
      {
        url: "/images/profile/profile-cover.webp",
        width: 1920,
        height: 520,
        alt: "Mogana.dev professional profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mogana.dev — Full Stack Product Engineer",
    description:
      "Professional experience in SaaS, enterprise software, AI and business automation.",
    images: ["/images/profile/profile-cover.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MyProfilePage() {
  return <MyProfileBody locale="en" />;
}