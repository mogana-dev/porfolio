import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import GlobalWidgets from "@/components/GlobalWidgets";
import SEOJsonLd, { organizationSchema, websiteSchema } from "@/components/SEOJsonLd";
import { poppins, jetbrainsMono } from "@/lib/fonts";

const siteUrl = "https://mogana.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: { en: "/", fr: "/fr", "x-default": "/" },
  },
  title: "Mogana.dev | Full Stack Product Engineer — Enterprise SaaS, AI, Marketplaces",
  description:
    "Mogana.dev is a full stack product engineering brand building enterprise SaaS, AI-powered applications, marketplaces, e-commerce systems, dashboards and business automation tools from idea to production. Available for international opportunities.",
  keywords: [
    "full stack product engineer",
    "SaaS developer",
    "enterprise SaaS developer",
    "AI product engineer",
    "Next.js developer",
    "React TypeScript developer",
    "marketplace developer",
    "e-commerce developer",
    "business automation",
    "ERP developer",
    "CRM developer",
    "product engineer available for relocation",
    "remote product engineer",
    "international software engineer",
    "Mogana.dev",
  ],
  authors: [{ name: "Mogana.dev" }],
  creator: "Mogana.dev",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mogana.dev",
    title: "Mogana.dev | Full Stack Product Engineer — Enterprise SaaS, AI, Marketplaces",
    description: "I build products — not just websites.",
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev — Full Stack Product Engineer" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mogana.dev | Full Stack Product Engineer",
    description: "I build products — not just websites.",
    images: ["/images/seo/og-image.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/icons/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/favicon-180x180.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#061224",
  colorScheme: "dark",
};

export default function RootLayoutEn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <head>
        <SEOJsonLd graph={[organizationSchema("en"), websiteSchema("en")]} />
      </head>
      <body className="bg-ink text-mist font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-mist focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
        <GlobalWidgets />
      </body>
    </html>
  );
}
