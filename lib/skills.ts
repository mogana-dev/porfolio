export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL"],
  },
  {
    title: "SaaS",
    skills: ["RBAC", "Dashboards", "Reporting", "Authentication", "PDF Generation"],
  },
  {
    title: "AI",
    skills: ["ChatGPT", "Claude", "Prompt Engineering", "AI Assistants", "Automation"],
  },
  {
    title: "E-Commerce",
    skills: ["Shopify", "WooCommerce", "WordPress", "Ecwid", "Payhip"],
  },
  {
    title: "SEO",
    skills: ["Metadata", "Sitemap", "Robots.txt", "Structured Data", "Google Search Console"],
  },
  {
    title: "Business",
    skills: ["Logistics", "Operations", "Finance Workflows", "ERP", "CRM"],
  },
];

export const skillGroupsFr: SkillGroup[] = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "API REST", "Supabase", "PostgreSQL"] },
  { title: "SaaS", skills: ["RBAC", "Tableaux de bord", "Reporting", "Authentification", "G\u00e9n\u00e9ration de PDF"] },
  { title: "IA", skills: ["ChatGPT", "Claude", "Prompt Engineering", "Assistants IA", "Automatisation"] },
  { title: "E-Commerce", skills: ["Shopify", "WooCommerce", "WordPress", "Ecwid", "Payhip"] },
  { title: "SEO", skills: ["M\u00e9tadonn\u00e9es", "Sitemap", "Robots.txt", "Donn\u00e9es structur\u00e9es", "Google Search Console"] },
  { title: "Business", skills: ["Logistique", "Op\u00e9rations", "Workflows financiers", "ERP", "CRM"] },
];

export function getSkillGroups(locale: "en" | "fr") {
  return locale === "fr" ? skillGroupsFr : skillGroups;
}
