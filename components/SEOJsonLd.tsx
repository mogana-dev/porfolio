import { SITE_URL } from "@/lib/site";

export function organizationSchema(locale: "en" | "fr" = "en") {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Mogana.dev",
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo.png`,
    description:
      locale === "fr"
        ? "Mogana.dev est une marque d'ingénierie produit full stack construisant des SaaS d'entreprise, des applications propulsées par l'IA, des marketplaces, des systèmes e-commerce et des outils d'automatisation, de l'idée à la production."
        : "Mogana.dev is a full stack product engineering brand building enterprise SaaS, AI-powered applications, marketplaces, e-commerce systems and business automation tools from idea to production.",
    email: "hello@mogana.dev",
    sameAs: [
      "https://fr.linkedin.com/in/moganadev",
      "https://facebook.com/moganadev",
      "https://www.youtube.com/@MoganaDev",
      "https://github.com/moganadev",
      "https://x.com/moganadev",
      "https://instagram.com/moganadev",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@mogana.dev",
        availableLanguage: ["English", "French"],
      },
    ],
  };
}

export function websiteSchema(locale: "en" | "fr" = "en") {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: locale === "fr" ? `${SITE_URL}/fr` : SITE_URL,
    name: "Mogana.dev",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: locale,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function projectSchema(project: {
  name: string;
  slug: string;
  overview: string;
  tech: string[];
}, locale: "en" | "fr" = "en") {
  const base = locale === "fr" ? `${SITE_URL}/fr/case-studies/${project.slug}` : `${SITE_URL}/case-studies/${project.slug}`;
  return {
    "@type": "CreativeWork",
    "@id": `${base}#project`,
    name: project.name,
    url: base,
    description: project.overview,
    creator: { "@id": `${SITE_URL}/#organization` },
    keywords: project.tech.join(", "),
  };
}

export function articleSchema(article: {
  slug: string;
  title: string;
  summary: string;
  poster: string;
  category: string;
}, locale: "en" | "fr" = "en") {
  const base = locale === "fr" ? `${SITE_URL}/fr/articles/${article.slug}` : `${SITE_URL}/articles/${article.slug}`;
  return {
    "@type": "Article",
    "@id": `${base}#article`,
    headline: article.title,
    description: article.summary,
    image: `${SITE_URL}${article.poster}`,
    url: base,
    inLanguage: locale,
    articleSection: article.category,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": base },
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function SEOJsonLd({ graph }: { graph: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
