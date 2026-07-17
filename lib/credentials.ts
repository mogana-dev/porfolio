export type Credential = {
  title: string;
  type: string;
  description?: string;
};

export const credentials: Credential[] = [
  { title: "HND Hospitality Management", type: "Diploma" },
  { title: "Logistics & Supply Chain Management", type: "Education" },
  { title: "Cambridge School Certificate / HSC", type: "Certificate" },
  { title: "Google Digital Marketing & E-commerce", type: "Certification" },
  { title: "Supply Chain / Logistics Training", type: "Training" },
  {
    title: "AI Integration & Automation",
    type: "Practice",
    description: "Practical experience integrating AI capabilities into production software — OpenAI and Claude APIs, automation workflows and prompt engineering.",
  },
  {
    title: "Modern Full Stack Development",
    type: "Practice",
    description: "Continuous professional learning in modern web development, SaaS architecture, Next.js, React, TypeScript, UI/UX, Supabase, PostgreSQL and scalable application development.",
  },
];

export const credentialsFr: Credential[] = [
  { title: "HND en Gestion H\u00f4teli\u00e8re", type: "Dipl\u00f4me" },
  { title: "Gestion de la Logistique et de la Cha\u00eene d'Approvisionnement", type: "Formation" },
  { title: "Cambridge School Certificate / HSC", type: "Certificat" },
  { title: "Google Digital Marketing & E-commerce", type: "Certification" },
  { title: "Formation Cha\u00eene d'Approvisionnement / Logistique", type: "Formation" },
  {
    title: "Int\u00e9gration IA & Automatisation",
    type: "Pratique",
    description: "Exp\u00e9rience concr\u00e8te d'int\u00e9gration de capacit\u00e9s IA dans des logiciels en production \u2014 API OpenAI et Claude, workflows d'automatisation et prompt engineering.",
  },
  {
    title: "D\u00e9veloppement Full Stack Moderne",
    type: "Pratique",
    description: "Formation continue en d\u00e9veloppement web moderne, architecture SaaS, Next.js, React, TypeScript, UI/UX, Supabase, PostgreSQL et applications \u00e9volutives.",
  },
];

export function getCredentials(locale: "en" | "fr") {
  return locale === "fr" ? credentialsFr : credentials;
}
