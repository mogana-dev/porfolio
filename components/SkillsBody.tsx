"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IconTile from "@/components/IconTile";
import { techIcons } from "@/lib/tech-icons";
import type { Locale } from "@/lib/dictionary";
import { SITE_URL } from "@/lib/site";

type SkillsBodyProps = {
  locale?: Locale;
};

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

type SkillsContent = {
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };

  summary: Array<{
    value: string;
    label: string;
    icon: LucideIcon;
  }>;

  stack: {
    eyebrow: string;
    title: string;
    description: string;
  };

  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: Capability[];
  };

  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: WorkflowStep[];
  };

  strengths: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: LucideIcon;
    }>;
  };

  recruiter: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };

  cta: {
    title: string;
    description: string;
    contact: string;
    projects: string;
  };
};

const content: Record<Locale, SkillsContent> = {
  en: {
    intro: {
      eyebrow: "Skills & capabilities",
      title:
        "A practical full stack skill set built around complete product delivery.",
      description:
        "I use technology as part of a structured product process—not as a collection of isolated tools. My work combines interface development, application logic, secure databases, cloud deployment, AI integration and business analysis to deliver usable digital products.",
    },

    summary: [
      {
        value: "Full stack",
        label: "Frontend to production",
        icon: Layers3,
      },
      {
        value: "Product-led",
        label: "Business requirements first",
        icon: BriefcaseBusiness,
      },
      {
        value: "AI-enabled",
        label: "Automation and intelligent workflows",
        icon: BrainCircuit,
      },
    ],

    stack: {
      eyebrow: "Technology stack",
      title: "Tools I use in production work",
      description:
        "These technologies support the websites, SaaS platforms, enterprise applications, marketplaces and automation systems shown throughout my portfolio.",
    },

    capabilities: {
      eyebrow: "How I use my skills",
      title:
        "Each part of the stack supports a specific product responsibility.",
      description:
        "The value is not simply knowing a framework. It is understanding where that framework belongs, how it connects to the rest of the system and how it helps users or the business.",

      items: [
        {
          title: "Frontend & Product Interfaces",
          description:
            "I use modern frontend technologies to translate business requirements into responsive, accessible and structured interfaces. My focus is clarity, fast interaction and consistent behaviour across mobile and desktop.",
          icon: Code2,
          skills: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS",
            "Tailwind CSS",
            "Responsive Design",
          ],
        },

        {
          title: "Backend & Application Logic",
          description:
            "I build server-side workflows, API integrations and application logic that connect users, databases and external services. This layer supports business rules, data validation and secure operations.",
          icon: ServerCog,
          skills: [
            "Node.js",
            "Next.js Server Actions",
            "REST APIs",
            "Form Processing",
            "Business Logic",
            "Third-Party Integrations",
          ],
        },

        {
          title: "Database & Secure Access",
          description:
            "I use PostgreSQL and Supabase to organise application data, define relationships and protect access. Row-Level Security and role-based permissions help ensure users only reach the information relevant to them.",
          icon: Database,
          skills: [
            "PostgreSQL",
            "Supabase",
            "Database Design",
            "Row-Level Security",
            "Authentication",
            "Authorisation",
            "Role-Based Access",
          ],
        },

        {
          title: "Cloud, Deployment & Delivery",
          description:
            "I deploy and maintain applications through cloud platforms and version-controlled workflows. This includes environment configuration, production builds, domain setup and continuous product improvements.",
          icon: CloudCog,
          skills: [
            "Vercel",
            "Git",
            "GitHub",
            "Environment Variables",
            "Cloud Deployment",
            "Domain & DNS",
            "Production Builds",
          ],
        },

        {
          title: "AI & Business Automation",
          description:
            "I use AI tools and integrations to accelerate workflows, create assistants and reduce repetitive work. AI is applied where it improves service, productivity or access to information—not as an unnecessary feature.",
          icon: BrainCircuit,
          skills: [
            "OpenAI",
            "Claude",
            "Prompt Engineering",
            "AI Integration",
            "AI Assistants",
            "Workflow Automation",
            "Business Automation",
          ],
        },

        {
          title: "Commerce & Digital Platforms",
          description:
            "I build product catalogues, booking flows, marketplaces and customer-facing business platforms. The goal is to connect a clear user journey with practical administration and reliable operations.",
          icon: Globe2,
          skills: [
            "E-Commerce",
            "Marketplaces",
            "Booking Platforms",
            "WordPress",
            "WooCommerce",
            "Shopify",
            "Payment Workflows",
          ],
        },

        {
          title: "SEO, Performance & Visibility",
          description:
            "I structure projects for discoverability, fast loading and clean technical foundations. This includes metadata, semantic content, mobile performance, analytics and search-engine configuration.",
          icon: SearchCheck,
          skills: [
            "Technical SEO",
            "Metadata",
            "Structured Data",
            "Sitemaps",
            "Google Analytics",
            "Search Console",
            "Performance Optimisation",
          ],
        },

        {
          title: "Security & Product Reliability",
          description:
            "I treat security, validation and error handling as part of product quality. Authentication, permissions, protected routes and production testing help create dependable systems.",
          icon: ShieldCheck,
          skills: [
            "Secure Authentication",
            "Access Control",
            "Protected Routes",
            "Input Validation",
            "Error Handling",
            "Testing",
            "Production Readiness",
          ],
        },
      ],
    },

    workflow: {
      eyebrow: "Working method",
      title: "How the skills come together in a real project",
      description:
        "My process connects business understanding with technical implementation. Each stage reduces ambiguity and helps the final product remain useful and maintainable.",

      steps: [
        {
          number: "01",
          title: "Understand the operation",
          description:
            "Review the users, business workflow, constraints and outcome the organisation needs.",
        },
        {
          number: "02",
          title: "Plan the product",
          description:
            "Define priorities, user journeys, system responsibilities and an appropriate technical approach.",
        },
        {
          number: "03",
          title: "Build the full stack",
          description:
            "Develop the interface, logic, database, access controls and required integrations.",
        },
        {
          number: "04",
          title: "Validate and deploy",
          description:
            "Test responsive behaviour, permissions, workflows, performance and production configuration.",
        },
      ],
    },

    strengths: {
      eyebrow: "Professional strengths",
      title: "Technical work supported by product and business thinking.",
      description:
        "My previous operational experience helps me evaluate software beyond the interface. I consider how teams work, how information moves and what outcome the product must support.",

      items: [
        {
          title: "Product Thinking",
          description:
            "I connect features to user needs, business value and long-term product direction.",
          icon: Sparkles,
        },
        {
          title: "Business Analysis",
          description:
            "I translate operational requirements into practical workflows and software decisions.",
          icon: BriefcaseBusiness,
        },
        {
          title: "System Integration",
          description:
            "I connect interfaces, databases, APIs and external services into one usable product.",
          icon: Workflow,
        },
        {
          title: "Technical Problem Solving",
          description:
            "I investigate issues systematically and improve the product rather than applying temporary fixes.",
          icon: GitBranch,
        },
      ],
    },

    recruiter: {
      eyebrow: "For recruiters",
      title:
        "What this skill set allows me to contribute from the first day.",
      description:
        "I can support a product across multiple stages while continuing to deepen my engineering expertise within an experienced team.",

      points: [
        "Understand business requirements and convert them into product tasks.",
        "Build responsive interfaces and connected application workflows.",
        "Work with secure databases, permissions and authenticated user journeys.",
        "Integrate APIs, AI services and cloud platforms.",
        "Test, deploy and continuously improve production products.",
        "Communicate professionally in English and French.",
      ],
    },

    cta: {
      title: "Looking for a product engineer with practical business awareness?",
      description:
        "Mogana.dev is open to international full-time opportunities, relocation and meaningful product collaborations.",
      contact: "Contact Mogana.dev",
      projects: "Explore projects",
    },
  },

  fr: {
    intro: {
      eyebrow: "Compétences et capacités",
      title:
        "Une stack full stack pratique, construite autour de la livraison complète d’un produit.",
      description:
        "J’utilise la technologie dans le cadre d’un processus produit structuré, et non comme une collection d’outils isolés. Mon travail combine interfaces, logique applicative, bases sécurisées, cloud, IA et analyse métier.",
    },

    summary: [
      {
        value: "Full stack",
        label: "Du frontend à la production",
        icon: Layers3,
      },
      {
        value: "Orienté produit",
        label: "Les besoins métier en priorité",
        icon: BriefcaseBusiness,
      },
      {
        value: "Avec l’IA",
        label: "Automatisation et workflows intelligents",
        icon: BrainCircuit,
      },
    ],

    stack: {
      eyebrow: "Stack technologique",
      title: "Outils utilisés dans mes projets en production",
      description:
        "Ces technologies soutiennent les sites, plateformes SaaS, applications d’entreprise, marketplaces et systèmes d’automatisation présentés dans mon portfolio.",
    },

    capabilities: {
      eyebrow: "Comment j’utilise mes compétences",
      title:
        "Chaque partie de la stack répond à une responsabilité produit précise.",
      description:
        "La valeur ne consiste pas uniquement à connaître un framework. Elle vient de la compréhension de son rôle, de ses connexions et de son impact sur les utilisateurs et l’entreprise.",

      items: [
        {
          title: "Frontend et interfaces produit",
          description:
            "J’utilise les technologies frontend modernes pour transformer les besoins métier en interfaces responsives, accessibles et structurées sur mobile et desktop.",
          icon: Code2,
          skills: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS",
            "Tailwind CSS",
            "Responsive Design",
          ],
        },

        {
          title: "Backend et logique applicative",
          description:
            "Je développe les workflows serveur, les intégrations API et la logique qui relient les utilisateurs, les bases de données et les services externes.",
          icon: ServerCog,
          skills: [
            "Node.js",
            "Next.js Server Actions",
            "REST APIs",
            "Traitement des formulaires",
            "Logique métier",
            "Intégrations externes",
          ],
        },

        {
          title: "Base de données et accès sécurisé",
          description:
            "J’utilise PostgreSQL et Supabase pour structurer les données et sécuriser les accès grâce au Row-Level Security et aux permissions par rôles.",
          icon: Database,
          skills: [
            "PostgreSQL",
            "Supabase",
            "Conception de bases",
            "Row-Level Security",
            "Authentification",
            "Autorisation",
            "Accès par rôles",
          ],
        },

        {
          title: "Cloud, déploiement et livraison",
          description:
            "Je déploie et maintiens les applications à travers des plateformes cloud et des workflows Git, incluant les environnements, domaines et builds de production.",
          icon: CloudCog,
          skills: [
            "Vercel",
            "Git",
            "GitHub",
            "Variables d’environnement",
            "Déploiement cloud",
            "Domaines et DNS",
            "Builds de production",
          ],
        },

        {
          title: "IA et automatisation métier",
          description:
            "J’utilise l’IA pour créer des assistants, automatiser des workflows et réduire les tâches répétitives lorsqu’elle apporte une valeur concrète.",
          icon: BrainCircuit,
          skills: [
            "OpenAI",
            "Claude",
            "Prompt Engineering",
            "Intégration IA",
            "Assistants IA",
            "Automatisation de workflows",
            "Automatisation métier",
          ],
        },

        {
          title: "Commerce et plateformes numériques",
          description:
            "Je développe des catalogues, réservations, marketplaces et plateformes clients reliant une expérience claire à une administration pratique.",
          icon: Globe2,
          skills: [
            "E-Commerce",
            "Marketplaces",
            "Réservations",
            "WordPress",
            "WooCommerce",
            "Shopify",
            "Workflows de paiement",
          ],
        },

        {
          title: "SEO, performance et visibilité",
          description:
            "Je structure les produits pour la visibilité, la rapidité et de bonnes fondations techniques grâce aux métadonnées, contenus sémantiques et outils analytiques.",
          icon: SearchCheck,
          skills: [
            "SEO technique",
            "Métadonnées",
            "Données structurées",
            "Sitemaps",
            "Google Analytics",
            "Search Console",
            "Optimisation des performances",
          ],
        },

        {
          title: "Sécurité et fiabilité produit",
          description:
            "Je considère la sécurité, la validation et la gestion des erreurs comme des éléments essentiels de la qualité d’un produit.",
          icon: ShieldCheck,
          skills: [
            "Authentification sécurisée",
            "Contrôle des accès",
            "Routes protégées",
            "Validation",
            "Gestion des erreurs",
            "Tests",
            "Préparation à la production",
          ],
        },
      ],
    },

    workflow: {
      eyebrow: "Méthode de travail",
      title: "Comment ces compétences s’assemblent dans un véritable projet",
      description:
        "Mon processus relie la compréhension métier à l’implémentation technique afin de créer un produit utile et maintenable.",

      steps: [
        {
          number: "01",
          title: "Comprendre les opérations",
          description:
            "Analyser les utilisateurs, workflows, contraintes et résultats attendus.",
        },
        {
          number: "02",
          title: "Planifier le produit",
          description:
            "Définir les priorités, parcours utilisateurs, responsabilités système et choix techniques.",
        },
        {
          number: "03",
          title: "Construire la stack",
          description:
            "Développer l’interface, la logique, la base, les permissions et les intégrations.",
        },
        {
          number: "04",
          title: "Valider et déployer",
          description:
            "Tester le responsive, les accès, les workflows, les performances et la production.",
        },
      ],
    },

    strengths: {
      eyebrow: "Forces professionnelles",
      title:
        "Un travail technique soutenu par la réflexion produit et métier.",
      description:
        "Mon expérience opérationnelle m’aide à évaluer le logiciel au-delà de l’interface, en considérant les équipes, les flux d’information et les résultats.",

      items: [
        {
          title: "Réflexion produit",
          description:
            "Je relie les fonctionnalités aux besoins utilisateurs, à la valeur métier et à la direction produit.",
          icon: Sparkles,
        },
        {
          title: "Analyse métier",
          description:
            "Je transforme les besoins opérationnels en workflows et décisions logicielles pratiques.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Intégration de systèmes",
          description:
            "Je relie interfaces, bases, API et services externes dans un produit cohérent.",
          icon: Workflow,
        },
        {
          title: "Résolution de problèmes",
          description:
            "J’analyse les problèmes méthodiquement afin d’améliorer durablement le produit.",
          icon: GitBranch,
        },
      ],
    },

    recruiter: {
      eyebrow: "Pour les recruteurs",
      title:
        "Ce que cette stack me permet d’apporter dès le premier jour.",
      description:
        "Je peux contribuer à plusieurs étapes d’un produit tout en approfondissant mon expertise au sein d’une équipe expérimentée.",

      points: [
        "Comprendre les exigences métier et les convertir en tâches produit.",
        "Construire des interfaces responsives et workflows connectés.",
        "Travailler avec des bases sécurisées et parcours authentifiés.",
        "Intégrer des API, services IA et plateformes cloud.",
        "Tester, déployer et améliorer des produits en production.",
        "Communiquer professionnellement en anglais et en français.",
      ],
    },

    cta: {
      title:
        "Vous recherchez un ingénieur produit avec une compréhension pratique du métier ?",
      description:
        "Mogana.dev est ouvert aux opportunités internationales à temps plein, à la mobilité et aux collaborations produit.",
      contact: "Contacter Mogana.dev",
      projects: "Découvrir les projets",
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.07,
    },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.header variants={reveal} className="max-w-4xl">
      <div className="flex items-center gap-3">
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-[2px] w-9 origin-left bg-[#ff6b35]"
        />

        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-[15px]">
        {description}
      </p>
    </motion.header>
  );
}

export default function SkillsBody({
  locale = "en",
}: SkillsBodyProps) {
  const t = content[locale];
  const reduceMotion = useReducedMotion();

  const viewportAnimation = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: {
          once: true,
          amount: 0.1,
          margin: "0px 0px -55px 0px",
        },
      };

  const contactPath =
    locale === "fr" ? "/fr/contact" : "/contact";

  const projectsPath =
    locale === "fr" ? "/fr/projects" : "/projects";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name:
      locale === "fr"
        ? "Compétences techniques de Mogana.dev"
        : "Mogana.dev Technical Skills",
    url:
      locale === "fr"
        ? `${SITE_URL}/fr/skills`
        : `${SITE_URL}/skills`,
    mainEntity: {
      "@type": "Organization",
      name: "Mogana.dev",
      url: SITE_URL,
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "SaaS Development",
        "Enterprise Software",
        "Artificial Intelligence",
        "Business Automation",
        "E-Commerce",
        "Technical SEO",
      ],
    },
  };

  return (
    <main
      id="main-content" tabIndex={-1}
      className="overflow-hidden bg-[#061224] text-white"
    >
      <Navbar locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Page introduction */}
      <motion.section
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 20,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="border-b border-white/10 pb-9 pt-[130px] sm:pb-12 sm:pt-[140px] lg:pt-[150px]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff6b35]" />

              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {t.intro.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.intro.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
              {t.intro.description}
            </p>
          </div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3"
          >
            {t.summary.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={reveal}
                className="flex items-center gap-3"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-display text-lg font-extrabold text-white">
                    {value}
                  </p>

                  <p className="mt-0.5 text-xs text-white/48">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Compact technology icons */}
      <section className="border-b border-white/10 py-9 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.stack.eyebrow}
              title={t.stack.title}
              description={t.stack.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-8 grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={reveal}
                className="min-w-0"
              >
                <IconTile
                  tech={tech}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed capabilities */}
      <section className="border-b border-white/10 py-9 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.capabilities.eyebrow}
              title={t.capabilities.title}
              description={t.capabilities.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-9 grid gap-x-10 gap-y-9 md:grid-cols-2"
          >
            {t.capabilities.items.map((capability) => {
              const Icon = capability.icon;

              return (
                <motion.article
                  key={capability.title}
                  variants={reveal}
                  className="group border-b border-white/10 pb-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/[0.07] text-[#ff6b35] transition duration-300 group-hover:border-[#ff6b35]/65 group-hover:bg-[#ff6b35]/[0.12]">
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-extrabold text-white sm:text-xl">
                        {capability.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/66">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-white/52 transition group-hover:text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-b border-white/10 py-9 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.workflow.eyebrow}
              title={t.workflow.title}
              description={t.workflow.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.workflow.steps.map((step) => (
              <motion.article
                key={step.number}
                variants={reveal}
                className="relative border-t border-[#ff6b35]/45 pt-5"
              >
                <p className="font-display text-3xl font-black text-white">
                  {step.number}
                </p>

                <h3 className="mt-4 font-display text-lg font-extrabold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/62">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="border-b border-white/10 py-9 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.strengths.eyebrow}
              title={t.strengths.title}
              description={t.strengths.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2"
          >
            {t.strengths.items.map((strength) => {
              const Icon = strength.icon;

              return (
                <motion.article
                  key={strength.title}
                  variants={reveal}
                  className="flex gap-4 border-b border-white/10 pb-7"
                >
                  <Icon
                    className="mt-1 h-5 w-5 shrink-0 text-[#ff6b35]"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-display text-lg font-extrabold text-white">
                      {strength.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/64">
                      {strength.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Recruiter answer section */}
      <section className="border-b border-white/10 py-9 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.recruiter.eyebrow}
              title={t.recruiter.title}
              description={t.recruiter.description}
            />
          </motion.div>

          <motion.ul
            {...viewportAnimation}
            variants={stagger}
            className="space-y-4 lg:pt-7"
          >
            {t.recruiter.points.map((point) => (
              <motion.li
                key={point}
                variants={reveal}
                className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/72"
              >
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />

                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        {...viewportAnimation}
        variants={reveal}
        className="relative overflow-hidden bg-[#ff6b35]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#e95420] via-[#ff6b35] to-[#ff8657]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-white/15 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {t.cta.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/86">
              {t.cta.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <Link
              href={contactPath}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
            >
              <Mail
                className="h-4 w-4"
                aria-hidden="true"
              />

              {t.cta.contact}
            </Link>

            <Link
              href={projectsPath}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
            >
              {t.cta.projects}

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer locale={locale} />
    </main>
  );
}