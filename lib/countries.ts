export type Country = {
  slug: string;
  name: string;
  nameFr: string;
  blurb: string;
  blurbFr: string;
};

export const countries: Country[] = [
  { slug: "netherlands", name: "Netherlands", nameFr: "Pays-Bas", blurb: "Open to Product Engineering, SaaS and AI opportunities in the Netherlands.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA aux Pays-Bas." },
  { slug: "germany", name: "Germany", nameFr: "Allemagne", blurb: "Open to Product Engineering, SaaS and AI opportunities in Germany.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en Allemagne." },
  { slug: "luxembourg", name: "Luxembourg", nameFr: "Luxembourg", blurb: "Open to Product Engineering, SaaS and AI opportunities in Luxembourg.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA au Luxembourg." },
  { slug: "ireland", name: "Ireland", nameFr: "Irlande", blurb: "Open to Product Engineering, SaaS and AI opportunities in Ireland.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en Irlande." },
  { slug: "belgium", name: "Belgium", nameFr: "Belgique", blurb: "Open to Product Engineering, SaaS and AI opportunities in Belgium.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en Belgique." },
  { slug: "switzerland", name: "Switzerland", nameFr: "Suisse", blurb: "Open to Product Engineering, SaaS and AI opportunities in Switzerland.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en Suisse." },
  { slug: "france", name: "France", nameFr: "France", blurb: "Open to Product Engineering, SaaS and AI opportunities in France.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en France." },
  { slug: "portugal", name: "Portugal", nameFr: "Portugal", blurb: "Open to Product Engineering, SaaS and AI opportunities in Portugal.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA au Portugal." },
  { slug: "norway", name: "Norway", nameFr: "Norv\u00e8ge", blurb: "Open to Product Engineering, SaaS and AI opportunities in Norway.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en Norv\u00e8ge." },
  { slug: "sweden", name: "Sweden", nameFr: "Su\u00e8de", blurb: "Open to Product Engineering, SaaS and AI opportunities in Sweden.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en Su\u00e8de." },
  { slug: "denmark", name: "Denmark", nameFr: "Danemark", blurb: "Open to Product Engineering, SaaS and AI opportunities in Denmark.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA au Danemark." },
  { slug: "australia", name: "Australia", nameFr: "Australie", blurb: "Open to Product Engineering, SaaS and AI opportunities in Australia.", blurbFr: "Ouvert aux opportunit\u00e9s d'Ing\u00e9nierie Produit, SaaS et IA en Australie." },
];

export function getCountryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function getLocalizedCountryName(country: Country, locale: "en" | "fr") {
  return locale === "fr" ? country.nameFr : country.name;
}

export function getLocalizedCountryBlurb(country: Country, locale: "en" | "fr") {
  return locale === "fr" ? country.blurbFr : country.blurb;
}
