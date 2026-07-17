"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Code2,
  Compass,
  Eye,
  Lightbulb,
  Mail,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/dictionary";

type AboutMeBodyProps = {
  locale?: Locale;
};

type CapabilityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type DirectionItem = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

type AboutContent = {
  heroAlt: string;

  intro: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
  };

  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: CapabilityItem[];
  };

  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProcessItem[];
  };

  direction: DirectionItem[];

  hire: {
    eyebrow: string;
    title: string;
    description: string;
    items: CapabilityItem[];
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const content: Record<Locale, AboutContent> = {
  en: {
    heroAlt:
      "Mogana.dev full stack product engineering, SaaS development and business automation",

    intro: {
      eyebrow: "Who am I?",
      title:
        "A product-focused engineer connecting software, business and real operations.",
      description:
        "Mogana.dev is an independent product engineering brand focused on SaaS platforms, enterprise software, AI-powered applications and business automation. My background in logistics, distribution and hospitality helps me understand how organisations work before turning their challenges into practical digital products.",
      highlights: [
        "Full stack product engineering",
        "SaaS and enterprise platforms",
        "AI and business automation",
        "Professional English and French",
      ],
    },

    capabilities: {
      eyebrow: "What I can do",
      title:
        "Turn real business requirements into complete digital products.",
      description:
        "I work across the full product lifecycle—from understanding the business problem and planning the experience to building, integrating, testing and delivering a production-ready solution.",
      items: [
        {
          title: "SaaS & Enterprise Platforms",
          description:
            "Accounting systems, ERP tools, CRM platforms, dashboards, secure administration portals and role-based applications.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Modern Web Products",
          description:
            "Fast websites, marketplaces, booking platforms and e-commerce experiences designed for mobile users and search visibility.",
          icon: Code2,
        },
        {
          title: "AI & Automation",
          description:
            "AI assistants, intelligent workflows and practical integrations that reduce repetitive work and improve productivity.",
          icon: BrainCircuit,
        },
        {
          title: "Product Experience",
          description:
            "Clear user journeys, accessible interfaces and purposeful features designed around measurable outcomes.",
          icon: Sparkles,
        },
      ],
    },

    process: {
      eyebrow: "How I solve issues",
      title:
        "A structured process from operational challenge to dependable software.",
      description:
        "I begin by understanding the organisation behind the interface. Every decision is then shaped around usefulness, security, maintainability, user experience and measurable business value.",
      items: [
        {
          number: "01",
          title: "Understand",
          description:
            "Study the business, users, current workflows, constraints and the outcome the product must achieve.",
          icon: Search,
        },
        {
          number: "02",
          title: "Define",
          description:
            "Convert the challenge into clear requirements, priorities, user journeys and technical decisions.",
          icon: Lightbulb,
        },
        {
          number: "03",
          title: "Build",
          description:
            "Develop the interface, application logic, database, secure access and required integrations.",
          icon: Wrench,
        },
        {
          number: "04",
          title: "Validate",
          description:
            "Test workflows, responsive behaviour, accessibility, edge cases, performance and production readiness.",
          icon: ShieldCheck,
        },
      ],
    },

    direction: [
      {
        eyebrow: "My vision",
        title:
          "Create technology that makes businesses clearer, faster and more capable.",
        description:
          "I want to build refined and dependable digital products that help people work efficiently, make informed decisions and operate with greater confidence.",
        points: [
          "Simplify complex operations",
          "Improve everyday decisions",
          "Create sustainable value",
        ],
        icon: Eye,
      },
      {
        eyebrow: "My mission",
        title:
          "Transform practical business challenges into accessible software.",
        description:
          "My mission is to combine product thinking, business understanding and modern engineering to create software that teams can understand, adopt and use confidently.",
        points: [
          "Understand the real need",
          "Build purposeful features",
          "Maintain reliable products",
        ],
        icon: Target,
      },
      {
        eyebrow: "My future objectives",
        title:
          "Grow internationally while building stronger and more scalable products.",
        description:
          "I aim to contribute to an ambitious international team while strengthening my expertise in architecture, cloud platforms, security and intelligent systems.",
        points: [
          "Join an international team",
          "Deepen technical expertise",
          "Build products with impact",
        ],
        icon: Rocket,
      },
    ],

    hire: {
      eyebrow: "Why hire me?",
      title:
        "I bring product ownership, operational awareness and end-to-end delivery.",
      description:
        "My value comes from connecting technical execution with business understanding. I consider users, workflows, maintainability and measurable outcomes—not only the code required for one screen.",
      items: [
        {
          title: "Business-aware engineering",
          description:
            "I understand operational pressure and why software must solve a genuine business problem.",
          icon: Compass,
        },
        {
          title: "End-to-end ownership",
          description:
            "I can move from requirements and product planning through development, testing and deployment.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Product-oriented thinking",
          description:
            "I evaluate usability, maintainability, business value and the wider impact of every feature.",
          icon: Sparkles,
        },
        {
          title: "Adaptable communication",
          description:
            "I communicate professionally in English and French with clients, stakeholders and technical teams.",
          icon: Users,
        },
      ],
    },

    cta: {
      eyebrow: "Open to meaningful opportunities",
      title: "Have a role or a project in mind?",
      description:
        "Mogana.dev is open to international full-time roles, relocation opportunities, product collaborations and selected software projects.",
      primary: "Contact Mogana.dev",
      secondary: "Explore projects",
    },
  },

  fr: {
    heroAlt:
      "Mogana.dev ingénierie produit full stack, développement SaaS et automatisation d’entreprise",

    intro: {
      eyebrow: "Qui suis-je ?",
      title:
        "Un ingénieur produit reliant le logiciel, le métier et les opérations réelles.",
      description:
        "Mogana.dev est une marque indépendante d’ingénierie produit spécialisée dans les plateformes SaaS, les logiciels d’entreprise, les applications alimentées par l’IA et l’automatisation. Mon expérience en logistique, distribution et hôtellerie m’aide à comprendre le fonctionnement d’une organisation avant de transformer ses défis en produits numériques pratiques.",
      highlights: [
        "Ingénierie produit full stack",
        "SaaS et plateformes d’entreprise",
        "IA et automatisation métier",
        "Anglais et français professionnels",
      ],
    },

    capabilities: {
      eyebrow: "Ce que je peux réaliser",
      title:
        "Transformer des besoins professionnels réels en produits numériques complets.",
      description:
        "J’interviens sur l’ensemble du cycle produit : compréhension du problème, conception de l’expérience, développement, intégration, validation et livraison d’une solution prête pour la production.",
      items: [
        {
          title: "SaaS et plateformes d’entreprise",
          description:
            "Systèmes comptables, ERP, CRM, tableaux de bord, portails administratifs sécurisés et applications par rôles.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Produits web modernes",
          description:
            "Sites rapides, marketplaces, plateformes de réservation et solutions e-commerce adaptées au mobile et au SEO.",
          icon: Code2,
        },
        {
          title: "IA et automatisation",
          description:
            "Assistants IA, workflows intelligents et intégrations pratiques réduisant les tâches répétitives.",
          icon: BrainCircuit,
        },
        {
          title: "Expérience produit",
          description:
            "Parcours clairs, interfaces accessibles et fonctionnalités utiles conçues autour de résultats mesurables.",
          icon: Sparkles,
        },
      ],
    },

    process: {
      eyebrow: "Comment je résous les problèmes",
      title:
        "Une méthode structurée, du défi opérationnel au logiciel fiable.",
      description:
        "Je commence par comprendre l’organisation derrière l’interface. Chaque décision est ensuite guidée par l’utilité, la sécurité, la maintenabilité, l’expérience utilisateur et la valeur métier.",
      items: [
        {
          number: "01",
          title: "Comprendre",
          description:
            "Étudier l’activité, les utilisateurs, les processus actuels, les contraintes et le résultat attendu.",
          icon: Search,
        },
        {
          number: "02",
          title: "Définir",
          description:
            "Transformer le défi en exigences claires, priorités, parcours utilisateurs et décisions techniques.",
          icon: Lightbulb,
        },
        {
          number: "03",
          title: "Construire",
          description:
            "Développer l’interface, la logique, la base de données, les accès sécurisés et les intégrations.",
          icon: Wrench,
        },
        {
          number: "04",
          title: "Valider",
          description:
            "Tester les parcours, le responsive, l’accessibilité, les cas limites, la performance et la production.",
          icon: ShieldCheck,
        },
      ],
    },

    direction: [
      {
        eyebrow: "Ma vision",
        title:
          "Créer des technologies rendant les entreprises plus claires, rapides et performantes.",
        description:
          "Je souhaite créer des produits numériques élégants et fiables qui aident les utilisateurs à travailler efficacement, décider avec précision et agir avec confiance.",
        points: [
          "Simplifier les opérations",
          "Améliorer les décisions",
          "Créer une valeur durable",
        ],
        icon: Eye,
      },
      {
        eyebrow: "Ma mission",
        title:
          "Transformer des problématiques professionnelles concrètes en logiciels accessibles.",
        description:
          "Ma mission est de réunir réflexion produit, compréhension métier et ingénierie moderne afin de créer des logiciels faciles à comprendre, adopter et utiliser.",
        points: [
          "Comprendre le besoin réel",
          "Créer des fonctions utiles",
          "Maintenir des produits fiables",
        ],
        icon: Target,
      },
      {
        eyebrow: "Mes objectifs futurs",
        title:
          "Évoluer à l’international tout en construisant des produits plus solides et évolutifs.",
        description:
          "Je souhaite contribuer à une équipe internationale ambitieuse tout en renforçant mon expertise en architecture, cloud, sécurité et systèmes intelligents.",
        points: [
          "Rejoindre une équipe internationale",
          "Approfondir mon expertise",
          "Créer des produits à impact",
        ],
        icon: Rocket,
      },
    ],

    hire: {
      eyebrow: "Pourquoi me recruter ?",
      title:
        "J’apporte responsabilité produit, compréhension opérationnelle et livraison complète.",
      description:
        "Ma valeur vient de la connexion entre l’exécution technique et la compréhension métier. Je considère les utilisateurs, les processus, la maintenabilité et les résultats mesurables.",
      items: [
        {
          title: "Ingénierie orientée métier",
          description:
            "Je comprends les contraintes opérationnelles et pourquoi un logiciel doit résoudre un véritable problème.",
          icon: Compass,
        },
        {
          title: "Responsabilité de bout en bout",
          description:
            "Je peux passer des exigences et de la conception au développement, aux tests et au déploiement.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Réflexion orientée produit",
          description:
            "J’évalue l’utilité, la maintenabilité, la valeur métier et l’impact global de chaque fonctionnalité.",
          icon: Sparkles,
        },
        {
          title: "Communication adaptable",
          description:
            "Je communique professionnellement en anglais et en français avec les clients et les équipes.",
          icon: Users,
        },
      ],
    },

    cta: {
      eyebrow: "Ouvert aux opportunités significatives",
      title: "Vous avez un poste ou un projet en tête ?",
      description:
        "Mogana.dev est ouvert aux postes internationaux à temps plein, à la mobilité, aux collaborations produit et à certains projets logiciels.",
      primary: "Contacter Mogana.dev",
      secondary: "Découvrir les projets",
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
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
    <motion.header
      variants={reveal}
      className="max-w-3xl"
    >
      <motion.div
        variants={reveal}
        className="flex items-center gap-3"
      >
        <span
          aria-hidden="true"
          className="h-[2px] w-8 shrink-0 bg-[#ff6b35]"
        />

        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
          {eyebrow}
        </p>
      </motion.div>

      <motion.h2
        variants={reveal}
        className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-3xl lg:text-[2rem]"
      >
        {title}
      </motion.h2>

      <motion.p
        variants={reveal}
        className="mt-3 max-w-3xl text-sm leading-7 text-white/75 sm:text-[15px]"
      >
        {description}
      </motion.p>
    </motion.header>
  );
}

function OrangeGlassCard({
  icon: Icon,
  title,
  description,
}: CapabilityItem) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{
        y: -5,
        transition: {
          duration: 0.25,
        },
      }}
      className="group flex h-full flex-col rounded-2xl border border-[#ff6b35]/35 bg-gradient-to-br from-[#ff6b35]/[0.13] via-[#ff6b35]/[0.055] to-transparent p-5 shadow-[0_16px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-[#ff6b35]/70 hover:from-[#ff6b35]/[0.20]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff6b35]/45 bg-[#ff6b35]/15 text-[#ff6b35]">
        <Icon
          className="h-5 w-5"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-4 font-display text-base font-extrabold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/72">
        {description}
      </p>
    </motion.article>
  );
}

export default function AboutMeBody({
  locale = "en",
}: AboutMeBodyProps) {
  const t = content[locale];
  const reduceMotion = useReducedMotion();

  const contactPath =
    locale === "fr" ? "/fr/contact" : "/contact";

  const projectsPath =
    locale === "fr" ? "/fr/projects" : "/projects";

  const viewportAnimation = reduceMotion
  ? {}
  : {
      initial: "hidden" as const,
      whileInView: "visible" as const,
      viewport: {
        once: true,
        amount: 0.12,
        margin: "0px 0px -60px 0px",
      },
    };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name:
      locale === "fr"
        ? "À propos de Mogana.dev"
        : "About Mogana.dev",
    url:
      locale === "fr"
        ? "https://mogana.dev/fr/about-me"
        : "https://mogana.dev/about-me",
    mainEntity: {
      "@type": "Organization",
      name: "Mogana.dev",
      url: "https://mogana.dev",
      description:
        locale === "fr"
          ? "Marque indépendante spécialisée dans les plateformes SaaS, l’IA, l’automatisation et les logiciels d’entreprise."
          : "Independent product engineering brand specialising in SaaS, AI, automation and enterprise software.",
    },
  };

  return (
    <main
      id="main-content"
      className="overflow-hidden bg-[#061224] text-white"
    >
      <Navbar locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

     {/*
  Navbar is fixed, so this offset prevents the banner from
  hiding behind it on desktop and mobile.
*/}
<div
  aria-hidden="true"
  className="h-[72px] sm:h-[76px] lg:h-[88px]"
/>

{/* Hero directly below the header — full image, no cropping */}
<motion.section
  initial={
    reduceMotion
      ? false
      : {
          opacity: 0,
        }
  }
  animate={{
    opacity: 1,
  }}
  transition={{
    duration: reduceMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative m-0 w-full overflow-hidden bg-[#061224] p-0"
>
  <div className="relative mx-auto w-full lg:max-w-[1440px]">
    <Image
      src="/images/banners/about.webp"
      alt={t.heroAlt}
      width={1920}
      height={720}
      priority
      quality={88}
      sizes="(max-width: 1023px) 100vw, 1440px"
      className="block h-auto w-full"
    />

    {/* Stronger dark transparency */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-black/45"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-black/35"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061224]/45 via-transparent to-black/15"
    />
  </div>
</motion.section>

      {/* Who am I */}
      <motion.section
        {...viewportAnimation}
        variants={reveal}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="py-8 sm:py-10"
      >
        <div className="mx-auto grid max-w-6xl gap-7 px-5 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 lg:px-10">
          <SectionHeading
            eyebrow={t.intro.eyebrow}
            title={t.intro.title}
            description={t.intro.description}
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {t.intro.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex min-h-12 items-center gap-3 rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/[0.08] px-4 py-3 backdrop-blur-lg"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />

                <span className="text-sm font-semibold text-white/85">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What I can do */}
      <section className="border-y border-white/10 bg-[#09172a] py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
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
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.capabilities.items.map((item) => (
              <OrangeGlassCard
                key={item.title}
                {...item}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* How I solve issues */}
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SectionHeading
              eyebrow={t.process.eyebrow}
              title={t.process.title}
              description={t.process.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.process.items.map((item) => {
  const Icon = item.icon;

  return (
    <motion.article
      key={item.number}
      variants={reveal}
      whileHover={{
        y: -5,
        transition: {
          duration: 0.25,
        },
      }}
      className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-[#ff6b35]/40 bg-gradient-to-br from-[#ff6b35]/[0.14] via-[#ff6b35]/[0.055] to-transparent p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-[#ff6b35]/80"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/45 bg-[#ff6b35]/15 text-[#ff6b35]">
          <Icon
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>

        <span className="font-display text-5xl font-black leading-none tracking-[-0.06em] text-white">
          {item.number}
        </span>
      </div>

      <h3 className="mt-6 font-display text-lg font-extrabold text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/72">
        {item.description}
      </p>

      <div
        aria-hidden="true"
        className="mt-auto h-[2px] w-12 bg-[#ff6b35]"
      />
    </motion.article>
  );
})}
          </motion.div>
        </div>
      </section>

     <section className="border-y border-white/10 bg-[#09172a] py-8 sm:py-10">
  <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
    <motion.div
      {...viewportAnimation}
      variants={stagger}
      className="grid items-stretch gap-4 md:grid-cols-3"
    >
      {t.direction.map((item) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.eyebrow}
            variants={reveal}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
            className="group flex h-full flex-col rounded-2xl border border-[#ff6b35]/45 bg-gradient-to-br from-[#ff6b35]/[0.18] via-[#ff6b35]/[0.075] to-transparent p-5 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-300 hover:border-[#ff6b35]/85 hover:from-[#ff6b35]/[0.24] sm:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff6b35]/50 bg-[#ff6b35]/20 text-[#ff6b35]">
                <Icon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </div>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6b35]">
                Mogana.dev
              </span>
            </div>

            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
              {item.eyebrow}
            </p>

            <h2 className="mt-3 font-display text-xl font-extrabold leading-snug text-white">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/72">
              {item.description}
            </p>

            <ul className="mt-auto space-y-2.5 pt-6">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm leading-6 text-white/75"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                    strokeWidth={3}
                    aria-hidden="true"
                  />

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </motion.div>
  </div>
</section> 

      {/* Why hire me */}
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SectionHeading
              eyebrow={t.hire.eyebrow}
              title={t.hire.title}
              description={t.hire.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            {t.hire.items.map((item) => (
              <OrangeGlassCard
                key={item.title}
                {...item}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-width orange CTA */}
      <motion.section
        {...viewportAnimation}
        variants={reveal}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full overflow-hidden bg-[#ff6b35]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#e84f19] via-[#ff6b35] to-[#ff834f]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-white/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-black/15 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-5 py-9 sm:px-6 sm:py-10 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/85">
              {t.cta.eyebrow}
            </p>

            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {t.cta.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-[15px]">
              {t.cta.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href={contactPath}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#e84f19] shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ff6b35]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.cta.primary}
            </Link>

            <Link
              href={projectsPath}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/60 bg-black/15 px-5 py-3 text-sm font-extrabold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {t.cta.secondary}
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