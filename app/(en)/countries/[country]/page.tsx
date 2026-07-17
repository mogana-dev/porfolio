import type { Metadata } from "next";
import CountryDetailBody from "@/components/CountryDetailBody";
import { countries, getCountryBySlug } from "@/lib/countries";

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

  return {
    title: `Full Stack Product Engineer in ${country.name} | Mogana.dev`,
    description: `Mogana.dev is a Full Stack Product Engineer open to SaaS, AI and Next.js opportunities in ${country.name}, available remotely or with relocation.`,
    alternates: {
      canonical: `/countries/${country.slug}`,
      languages: {
        en: `/countries/${country.slug}`,
        fr: `/fr/countries/${country.slug}`,
        "x-default": `/countries/${country.slug}`,
      },
    },
    keywords: [
      `Full Stack Product Engineer in ${country.name}`,
      `SaaS Developer in ${country.name}`,
      `Next.js Developer in ${country.name}`,
      `React TypeScript Developer in ${country.name}`,
      `AI Product Engineer in ${country.name}`,
      `Product Engineer relocation ${country.name}`,
    ],
    openGraph: {
      title: `Full Stack Product Engineer in ${country.name} | Mogana.dev`,
      description: country.blurb,
      url: `https://mogana.dev/countries/${country.slug}`,
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
