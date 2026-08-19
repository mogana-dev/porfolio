import type { Metadata } from "next";
import CountryDetailBody from "@/components/CountryDetailBody";
import { countries, getCountryBySlug, getLocalizedCountryName, getLocalizedCountryBlurb } from "@/lib/countries";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  const name = getLocalizedCountryName(country, "fr");

  return {
    title: `Ing\u00e9nieur Produit Full Stack en ${name} | Mogana.dev`,
    description: `Mogana.dev est un Ing\u00e9nieur Produit Full Stack ouvert aux opportunit\u00e9s SaaS, IA et Next.js en ${name}, disponible \u00e0 distance ou avec relocalisation.`,
    alternates: {
      canonical: `/fr/countries/${country.slug}`,
      languages: {
        en: `/countries/${country.slug}`,
        fr: `/fr/countries/${country.slug}`,
        "x-default": `/countries/${country.slug}`,
      },
    },
    keywords: [
      `Ing\u00e9nieur Produit Full Stack en ${name}`,
      `D\u00e9veloppeur SaaS en ${name}`,
      `D\u00e9veloppeur Next.js en ${name}`,
      `D\u00e9veloppeur React TypeScript en ${name}`,
      `Ing\u00e9nieur Produit IA en ${name}`,
      `Relocalisation Ing\u00e9nieur Produit ${name}`,
    ],
    openGraph: {
      title: `Ing\u00e9nieur Produit Full Stack en ${name} | Mogana.dev`,
      description: getLocalizedCountryBlurb(country, "fr"),
      url: `${SITE_URL}/fr/countries/${country.slug}`,
      locale: "fr_FR",
      images: [{ url: country.banner, width: 1920, height: 1080, alt: `${name} \u2014 Mogana.dev` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Ing\u00e9nieur Produit Full Stack en ${name} | Mogana.dev`,
      description: getLocalizedCountryBlurb(country, "fr"),
      images: [country.banner],
    },
  };
}

export default async function CountryPageFr({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  return <CountryDetailBody slug={slug} locale="fr" />;
}
