export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
  items: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "Most Recent",
    title: "Full Stack Product Engineering",
    description:
      "Designing and building production software end to end — enterprise SaaS, accounting/ERP platforms, marketplaces, e-commerce and business automation tools, from architecture to deployment.",
    items: [
      "Next.js, React, TypeScript, Node.js",
      "Supabase, PostgreSQL",
      "AI integration and automation",
      "RBAC, dashboards, reporting, PDF generation",
    ],
  },
  {
    period: "Prior Chapter",
    title: "Logistics & Business Operations",
    description:
      "Ten-plus years in fleet planning, warehouse operations, distribution and process improvement — the foundation for building software that survives real operational pressure, not just a clean demo.",
    items: [
      "Fleet & route planning",
      "Warehouse operations",
      "Distribution management",
      "Process improvement & reporting",
    ],
  },
  {
    period: "Earlier Chapter",
    title: "Hospitality & Guest Relations",
    description:
      "Front office, reception and guest relations work that shaped a lasting instinct for client communication, service quality and working calmly under pressure.",
    items: [
      "Front office supervision",
      "Guest relations",
      "International client handling",
      "Communication under pressure",
    ],
  },
];

export const timelineFr: TimelineEntry[] = [
  {
    period: "Chapitre R\u00e9cent",
    title: "Ing\u00e9nierie Produit Full Stack",
    description:
      "Conception et construction de logiciels de production de bout en bout \u2014 SaaS d'entreprise, plateformes comptabilit\u00e9/ERP, marketplaces, e-commerce et outils d'automatisation, de l'architecture au d\u00e9ploiement.",
    items: [
      "Next.js, React, TypeScript, Node.js",
      "Supabase, PostgreSQL",
      "Int\u00e9gration et automatisation IA",
      "RBAC, tableaux de bord, reporting, g\u00e9n\u00e9ration de PDF",
    ],
  },
  {
    period: "Chapitre Ant\u00e9rieur",
    title: "Logistique et Op\u00e9rations d'Entreprise",
    description:
      "Plus de dix ans en planification de flotte, op\u00e9rations d'entrep\u00f4t, distribution et am\u00e9lioration des processus \u2014 le socle pour construire des logiciels qui survivent \u00e0 une vraie pression op\u00e9rationnelle, pas seulement \u00e0 une d\u00e9mo propre.",
    items: [
      "Planification de flotte et de tourn\u00e9es",
      "Op\u00e9rations d'entrep\u00f4t",
      "Gestion de la distribution",
      "Am\u00e9lioration des processus et reporting",
    ],
  },
  {
    period: "Chapitre Initial",
    title: "H\u00f4tellerie et Relation Client",
    description:
      "Travail de front office, r\u00e9ception et relation client qui a forg\u00e9 un instinct durable pour la communication client, la qualit\u00e9 de service et le travail calme sous pression.",
    items: [
      "Supervision du front office",
      "Relation client",
      "Gestion de client\u00e8le internationale",
      "Communication sous pression",
    ],
  },
];

export function getTimeline(locale: "en" | "fr") {
  return locale === "fr" ? timelineFr : timeline;
}
