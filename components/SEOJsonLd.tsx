const siteUrl = "https://mogana.dev";

export function organizationSchema(locale: "en" | "fr" = "en") {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Mogana.dev",
    url: siteUrl,
    logo: `${siteUrl}/images/brand/logo.png`,
    description:
      locale === "fr"
        ? "Mogana.dev est une marque d'ingénierie produit full stack construisant des SaaS d'entreprise, des applications propulsées par l'IA, des marketplaces, des systèmes e-commerce et des outils d'automatisation, de l'idée à la production."
        : "Mogana.dev is a full stack product engineering brand building enterprise SaaS, AI-powered applications, marketplaces, e-commerce systems and business automation tools from idea to production.",
    email: "hello@mogana.dev",
    sameAs: [
      "https://fr.linkedin.com/in/moganadev",
      "https://www.facebook.com/mogana.dev",
      "https://www.youtube.com/@MoganaDev",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@mogana.dev",
        telephone: "+33758973599",
        availableLanguage: ["English", "French"],
      },
    ],
  };
}

export function websiteSchema(locale: "en" | "fr" = "en") {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: locale === "fr" ? `${siteUrl}/fr` : siteUrl,
    name: "Mogana.dev",
    publisher: { "@id": `${siteUrl}/#organization` },
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
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function projectSchema(project: {
  name: string;
  slug: string;
  overview: string;
  tech: string[];
}, locale: "en" | "fr" = "en") {
  const base = locale === "fr" ? `${siteUrl}/fr/case-studies/${project.slug}` : `${siteUrl}/case-studies/${project.slug}`;
  return {
    "@type": "CreativeWork",
    "@id": `${base}#project`,
    name: project.name,
    url: base,
    description: project.overview,
    creator: { "@id": `${siteUrl}/#organization` },
    keywords: project.tech.join(", "),
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
