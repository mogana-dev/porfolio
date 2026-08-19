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
  const name = getLocalizedCountryName(country, "en");

  return {
    title: `Full Stack Product Engineer in ${name} | Mogana.dev`,
    description: `Mogana.dev is a Full Stack Product Engineer open to SaaS, AI and Next.js opportunities in ${name}, available remotely or with relocation.`,
    alternates: {
      canonical: `/countries/${country.slug}`,
      languages: {
        en: `/countries/${country.slug}`,
        fr: `/fr/countries/${country.slug}`,
        "x-default": `/countries/${country.slug}`,
      },
    },
    keywords: [
      `Full Stack Product Engineer in ${name}`,
      `SaaS Developer in ${name}`,
      `Next.js Developer in ${name}`,
      `React TypeScript Developer in ${name}`,
      `AI Product Engineer in ${name}`,
      `Product Engineer relocation ${name}`,
    ],
    openGraph: {
      title: `Full Stack Product Engineer in ${name} | Mogana.dev`,
      description: getLocalizedCountryBlurb(country, "en"),
      url: `${SITE_URL}/countries/${country.slug}`,
      images: [{ url: country.banner, width: 1920, height: 1080, alt: `${name} — Mogana.dev` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Full Stack Product Engineer in ${name} | Mogana.dev`,
      description: getLocalizedCountryBlurb(country, "en"),
      images: [country.banner],
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  return <CountryDetailBody slug={slug} locale="en" />;
}
