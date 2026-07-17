import type { Metadata } from "next";
import "@/app/globals.css";
import GlobalWidgets from "@/components/GlobalWidgets";
import SEOJsonLd, { organizationSchema, websiteSchema } from "@/components/SEOJsonLd";

const siteUrl = "https://mogana.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/fr",
    languages: { en: "/", fr: "/fr", "x-default": "/" },
  },
  title: "Mogana.dev | Ingénieur Produit Full Stack — SaaS d'Entreprise, IA, Marketplaces",
  description:
    "Mogana.dev est une marque d'ingénierie produit full stack construisant des SaaS d'entreprise, des applications propulsées par l'IA, des marketplaces, des systèmes e-commerce, des tableaux de bord et des outils d'automatisation, de l'idée à la production. Disponible pour des opportunités internationales.",
  keywords: [
    "ingénieur produit full stack",
    "développeur SaaS",
    "développeur SaaS d'entreprise",
    "ingénieur produit IA",
    "développeur Next.js",
    "développeur React TypeScript",
    "développeur marketplace",
    "développeur e-commerce",
    "automatisation d'entreprise",
    "développeur ERP",
    "développeur CRM",
    "ingénieur produit ouvert à la relocalisation",
    "ingénieur produit à distance",
    "ingénieur logiciel international",
    "Mogana.dev",
  ],
  authors: [{ name: "Mogana.dev" }],
  creator: "Mogana.dev",
  openGraph: {
    type: "website",
    url: `${siteUrl}/fr`,
    siteName: "Mogana.dev",
    title: "Mogana.dev | Ingénieur Produit Full Stack",
    description: "Je construis des produits — pas seulement des sites web.",
    images: [{ url: "/images/seo/og-image.webp", width: 1200, height: 630, alt: "Mogana.dev — Ingénieur Produit Full Stack" }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mogana.dev | Ingénieur Produit Full Stack",
    description: "Je construis des produits — pas seulement des sites web.",
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

export default function RootLayoutFr({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout <head> is the App Router equivalent of pages/_document.js */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <SEOJsonLd graph={[organizationSchema("fr"), websiteSchema("fr")]} />
      </head>
      <body className="bg-ink text-mist font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-mist focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        {children}
        <GlobalWidgets />
      </body>
    </html>
  );
}
