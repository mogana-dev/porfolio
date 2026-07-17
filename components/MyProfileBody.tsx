"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  ServerCog,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, waLink } from "@/lib/contact";
import type { Locale } from "@/lib/dictionary";

type MyProfileBodyProps = {
  locale?: Locale;
};

type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  logo: string;
  logoAlt: string;
  summary: string;
  responsibilities: string[];
  technologies?: string[];
};

type TechnologyGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

type ServiceEntry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProfileContent = {
  headline: string;
  subheadline: string;
  location: string;
  relocation: string;
  languages: string;
  availability: string;

  buttons: {
    email: string;
    whatsapp: string;
    projects: string;
  };

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };

  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceEntry[];
  };

  technology: {
    eyebrow: string;
    title: string;
    description: string;
    groups: TechnologyGroup[];
  };

  skills: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };

  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceEntry[];
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const content: Record<Locale, ProfileContent> = {
  en: {
    headline: "Full Stack Product Engineer",
    subheadline: "SaaS, AI & Business Automation",

    location: "Mauritius · Currently in India",
    relocation: "Open to international relocation",
    languages: "English & French",
    availability: "Open to full-time international opportunities",

    buttons: {
      email: "Email",
      whatsapp: "WhatsApp",
      projects: "View Projects",
    },

    about: {
      eyebrow: "About",
      title:
        "Product engineering strengthened by real operational experience.",
      paragraphs: [
        "Mogana.dev is an independent product engineering brand focused on SaaS platforms, enterprise software, AI-powered applications, marketplaces, e-commerce and business automation.",
        "Before moving fully into software, I worked across hospitality, logistics, warehousing and distribution. That experience taught me how businesses operate under real pressure and how technology can simplify workflows, improve visibility and support better decisions.",
        "Today, I work across the complete product lifecycle—from understanding business requirements and planning user journeys to development, database design, integration, testing, deployment and continuous improvement.",
      ],
      highlights: [
        "20+ software and web products",
        "SaaS, ERP, CRM and accounting systems",
        "AI and business workflow automation",
        "Professional English and French",
      ],
    },

    experience: {
      eyebrow: "Experience",
      title: "Professional experience",
      description:
        "A career connecting software engineering, product thinking, business operations and customer-focused environments.",

      items: [
        {
          role: "Full Stack Product Engineer",
          company: "BlueWave Technologies Ltd",
          location: "Mauritius",
          period: "March 2022 – Present",
          type: "Full-time · Product Engineering",
          logo: "/images/profile/BlueWavelogo.png",
          logoAlt: "BlueWave Technologies Ltd logo",
          summary:
            "Designing, building and maintaining modern digital products for companies across multiple industries.",
          responsibilities: [
            "Design and build enterprise SaaS platforms.",
            "Develop AI-powered business applications.",
            "Build ERP, CRM and accounting systems.",
            "Create marketplaces, booking systems and administration portals.",
            "Develop responsive corporate and e-commerce websites.",
            "Implement secure authentication and role-based access control.",
            "Integrate third-party APIs and cloud services.",
            "Deploy, maintain and improve production applications.",
          ],
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Supabase",
            "PostgreSQL",
            "REST APIs",
            "Tailwind CSS",
            "Git",
            "Vercel",
            "AI Integration",
          ],
        },

        {
          role: "Full Stack Developer",
          company: "Mobiz Ltd",
          location: "Mauritius",
          period: "January 2020 – March 2022",
          type: "Full-time",
          logo: "/images/profile/mobiz-mu-logo.png",
          logoAlt: "Mobiz Ltd logo",
          summary:
            "Built websites, business applications, e-commerce platforms, booking systems and digital tools for small and medium-sized businesses.",
          responsibilities: [
            "Developed responsive websites and web applications.",
            "Built business dashboards, contact forms and administration panels.",
            "Created customer-facing interfaces and internal workflows.",
            "Integrated APIs, databases and authentication.",
            "Delivered mobile-responsive and SEO-ready digital products.",
            "Worked directly with clients to convert business requirements into software.",
          ],
          technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Node.js",
            "REST APIs",
            "WordPress",
            "WooCommerce",
            "Git",
          ],
        },

        {
          role: "Head of Distribution",
          company: "Grays Inc",
          location: "Mauritius",
          period: "October 2015 – December 2019",
          type: "Logistics · Distribution · Supply Chain",
          logo: "/images/profile/grays-logo.png",
          logoAlt: "Grays Inc logo",
          summary:
            "Led logistics coordination, warehouse operations, stock control and distribution processes.",
          responsibilities: [
            "Managed warehouse and distribution operations.",
            "Coordinated inventory, transport and delivery workflows.",
            "Supervised operational teams and daily performance.",
            "Worked across logistics, planning and supply-chain processes.",
            "Developed the operational knowledge later applied to enterprise software.",
          ],
        },

        {
          role: "Hospitality Operations",
          company: "Beachcomber Resorts & Hotels",
          location: "Mauritius",
          period: "July 2010 – September 2015",
          type: "Hospitality · Front Office · Night Audit",
          logo: "/images/profile/beachcomber.jpg",
          logoAlt: "Beachcomber Resorts and Hotels logo",
          summary:
            "Worked in customer-facing hospitality operations, guest services and structured night-audit procedures.",
          responsibilities: [
            "Supported front-office and guest-service operations.",
            "Handled customer enquiries and administrative processes.",
            "Completed structured night-audit responsibilities.",
            "Worked in a service-focused and high-responsibility environment.",
            "Developed communication, organisation and customer-service skills.",
          ],
        },
      ],
    },

    technology: {
      eyebrow: "Technology",
      title: "Technologies used",
      description:
        "A modern technology stack used across SaaS products, enterprise systems, marketplaces and production websites.",

      groups: [
        {
          title: "Frontend Engineering",
          icon: Code2,
          items: [
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
          title: "Backend & APIs",
          icon: ServerCog,
          items: [
            "Node.js",
            "Next.js Server Actions",
            "REST APIs",
            "Authentication",
            "Authorisation",
            "Role-Based Access Control",
          ],
        },
        {
          title: "Database & Cloud",
          icon: Database,
          items: [
            "Supabase",
            "PostgreSQL",
            "Database Design",
            "Row-Level Security",
            "Vercel",
            "Git",
            "GitHub",
            "Cloud Deployment",
          ],
        },
        {
          title: "AI & Automation",
          icon: BrainCircuit,
          items: [
            "OpenAI",
            "Claude",
            "Prompt Engineering",
            "AI Workflow Integration",
            "Business Automation",
            "AI Software Development",
          ],
        },
      ],
    },

    skills: {
      eyebrow: "Skills",
      title: "Professional strengths",
      description:
        "A combination of technical delivery, product understanding and operational experience.",
      items: [
        "Product Thinking",
        "Software Engineering",
        "Business Analysis",
        "Technical Problem Solving",
        "SaaS Development",
        "Enterprise Software",
        "ERP & CRM Systems",
        "Marketplace Platforms",
        "API Integration",
        "UI / UX Design",
        "Leadership",
        "Communication",
        "Adaptability",
        "Continuous Learning",
      ],
    },

    services: {
      eyebrow: "Services",
      title: "Areas where I can contribute",
      description:
        "Practical product-engineering capabilities for software teams, businesses and product-led organisations.",

      items: [
        {
          title: "SaaS Product Development",
          description:
            "Secure SaaS applications, administration systems, dashboards and subscription-based platforms.",
          icon: Rocket,
        },
        {
          title: "Enterprise Software",
          description:
            "ERP, CRM, accounting, reporting and operational applications built around business workflows.",
          icon: BriefcaseBusiness,
        },
        {
          title: "AI & Automation",
          description:
            "AI assistants, intelligent workflows and automation tools that reduce manual work.",
          icon: Sparkles,
        },
        {
          title: "Web & Marketplace Products",
          description:
            "High-performance websites, booking platforms, marketplaces and e-commerce products.",
          icon: Globe2,
        },
      ],
    },

    cta: {
      eyebrow: "Open to international opportunities",
      title: "Looking for a product engineer?",
      description:
        "Mogana.dev is open to full-time roles, international relocation, product collaborations and selected software projects.",
      primary: "Contact Mogana.dev",
      secondary: "Explore Projects",
    },
  },

  fr: {
    headline: "Ingénieur Produit Full Stack",
    subheadline: "SaaS, IA et automatisation métier",

    location: "Maurice · Actuellement en Inde",
    relocation: "Ouvert à la mobilité internationale",
    languages: "Anglais et français",
    availability: "Ouvert aux opportunités internationales à temps plein",

    buttons: {
      email: "E-mail",
      whatsapp: "WhatsApp",
      projects: "Voir les projets",
    },

    about: {
      eyebrow: "À propos",
      title:
        "Une ingénierie produit renforcée par une véritable expérience opérationnelle.",
      paragraphs: [
        "Mogana.dev est une marque indépendante d’ingénierie produit spécialisée dans les plateformes SaaS, les logiciels d’entreprise, les applications IA, les marketplaces, l’e-commerce et l’automatisation.",
        "Avant de me consacrer pleinement au logiciel, j’ai travaillé dans l’hôtellerie, la logistique, l’entreposage et la distribution. Cette expérience m’a appris comment les entreprises fonctionnent sous de véritables contraintes.",
        "Aujourd’hui, j’interviens sur l’ensemble du cycle produit : compréhension du besoin, parcours utilisateur, développement, base de données, intégrations, tests, déploiement et amélioration continue.",
      ],
      highlights: [
        "Plus de 20 produits logiciels et web",
        "SaaS, ERP, CRM et comptabilité",
        "IA et automatisation des workflows",
        "Anglais et français professionnels",
      ],
    },

    experience: {
      eyebrow: "Expérience",
      title: "Expérience professionnelle",
      description:
        "Un parcours reliant ingénierie logicielle, réflexion produit, opérations métier et environnements orientés client.",

      items: [
        {
          role: "Ingénieur Produit Full Stack",
          company: "BlueWave Technologies Ltd",
          location: "Maurice",
          period: "Mars 2022 – Aujourd’hui",
          type: "Temps plein · Ingénierie produit",
          logo: "/images/profile/BlueWavelogo.png",
          logoAlt: "Logo BlueWave Technologies Ltd",
          summary:
            "Conception, développement et maintenance de produits numériques pour plusieurs secteurs.",
          responsibilities: [
            "Concevoir et développer des plateformes SaaS.",
            "Créer des applications professionnelles alimentées par l’IA.",
            "Développer des systèmes ERP, CRM et comptables.",
            "Créer des marketplaces, réservations et portails administratifs.",
            "Développer des sites professionnels et e-commerce.",
            "Implémenter l’authentification et les accès par rôles.",
            "Intégrer des API et services cloud.",
            "Déployer et améliorer les applications en production.",
          ],
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Supabase",
            "PostgreSQL",
            "REST APIs",
            "Tailwind CSS",
            "Git",
            "Vercel",
            "Intégration IA",
          ],
        },

        {
          role: "Développeur Full Stack",
          company: "Mobiz Ltd",
          location: "Maurice",
          period: "Janvier 2020 – Mars 2022",
          type: "Temps plein",
          logo: "/images/profile/mobiz-mu-logo.png",
          logoAlt: "Logo Mobiz Ltd",
          summary:
            "Création de sites web, applications métier, plateformes e-commerce, réservations et outils numériques.",
          responsibilities: [
            "Développer des sites et applications responsives.",
            "Créer des tableaux de bord et interfaces administratives.",
            "Concevoir des interfaces clients et workflows internes.",
            "Intégrer des API, bases de données et systèmes d’authentification.",
            "Livrer des produits optimisés pour le mobile et le SEO.",
            "Transformer les besoins clients en solutions logicielles.",
          ],
          technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Node.js",
            "REST APIs",
            "WordPress",
            "WooCommerce",
            "Git",
          ],
        },

        {
          role: "Responsable de la Distribution",
          company: "Grays Inc",
          location: "Maurice",
          period: "Octobre 2015 – Décembre 2019",
          type: "Logistique · Distribution · Supply Chain",
          logo: "/images/profile/grays-logo.png",
          logoAlt: "Logo Grays Inc",
          summary:
            "Gestion de la coordination logistique, des entrepôts, des stocks et des processus de distribution.",
          responsibilities: [
            "Gérer les opérations d’entrepôt et de distribution.",
            "Coordonner les stocks, transports et livraisons.",
            "Superviser les équipes et les performances.",
            "Travailler sur les processus logistiques et supply chain.",
            "Appliquer cette expérience à la conception de logiciels d’entreprise.",
          ],
        },

        {
          role: "Opérations Hôtelières",
          company: "Beachcomber Resorts & Hotels",
          location: "Maurice",
          period: "Juillet 2010 – Septembre 2015",
          type: "Hôtellerie · Réception · Audit de nuit",
          logo: "/images/profile/beachcomber.jpg",
          logoAlt: "Logo Beachcomber Resorts and Hotels",
          summary:
            "Expérience dans les opérations hôtelières, le service client et les procédures d’audit de nuit.",
          responsibilities: [
            "Assurer les opérations de réception.",
            "Gérer les demandes clients et processus administratifs.",
            "Effectuer des responsabilités structurées d’audit de nuit.",
            "Travailler dans un environnement exigeant et orienté service.",
            "Développer des compétences en communication et organisation.",
          ],
        },
      ],
    },

    technology: {
      eyebrow: "Technologies",
      title: "Technologies utilisées",
      description:
        "Une stack moderne utilisée pour les produits SaaS, systèmes d’entreprise, marketplaces et sites en production.",

      groups: [
        {
          title: "Frontend",
          icon: Code2,
          items: [
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
          title: "Backend et API",
          icon: ServerCog,
          items: [
            "Node.js",
            "Next.js Server Actions",
            "REST APIs",
            "Authentification",
            "Autorisation",
            "Accès par rôles",
          ],
        },
        {
          title: "Base de données et cloud",
          icon: Database,
          items: [
            "Supabase",
            "PostgreSQL",
            "Conception de bases",
            "Row-Level Security",
            "Vercel",
            "Git",
            "GitHub",
            "Déploiement cloud",
          ],
        },
        {
          title: "IA et automatisation",
          icon: BrainCircuit,
          items: [
            "OpenAI",
            "Claude",
            "Prompt Engineering",
            "Intégration de workflows IA",
            "Automatisation métier",
            "Développement logiciel IA",
          ],
        },
      ],
    },

    skills: {
      eyebrow: "Compétences",
      title: "Forces professionnelles",
      description:
        "Une combinaison de compétences techniques, de réflexion produit et d’expérience opérationnelle.",
      items: [
        "Réflexion produit",
        "Ingénierie logicielle",
        "Analyse métier",
        "Résolution de problèmes",
        "Développement SaaS",
        "Logiciels d’entreprise",
        "ERP et CRM",
        "Marketplaces",
        "Intégration API",
        "UI / UX Design",
        "Leadership",
        "Communication",
        "Adaptabilité",
        "Apprentissage continu",
      ],
    },

    services: {
      eyebrow: "Services",
      title: "Domaines dans lesquels je peux contribuer",
      description:
        "Compétences d’ingénierie produit pour équipes logicielles, entreprises et organisations orientées produit.",

      items: [
        {
          title: "Développement SaaS",
          description:
            "Applications SaaS sécurisées, systèmes administratifs, tableaux de bord et plateformes d’abonnement.",
          icon: Rocket,
        },
        {
          title: "Logiciels d’entreprise",
          description:
            "ERP, CRM, comptabilité, rapports et applications opérationnelles.",
          icon: BriefcaseBusiness,
        },
        {
          title: "IA et automatisation",
          description:
            "Assistants IA, workflows intelligents et outils réduisant le travail manuel.",
          icon: Sparkles,
        },
        {
          title: "Web et marketplaces",
          description:
            "Sites rapides, plateformes de réservation, marketplaces et produits e-commerce.",
          icon: Globe2,
        },
      ],
    },

    cta: {
      eyebrow: "Ouvert aux opportunités internationales",
      title: "Vous recherchez un ingénieur produit ?",
      description:
        "Mogana.dev est ouvert aux postes à temps plein, à la mobilité internationale, aux collaborations produit et à certains projets logiciels.",
      primary: "Contacter Mogana.dev",
      secondary: "Découvrir les projets",
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
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
  description?: string;
}) {
  return (
    <motion.header
      variants={reveal}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-3">
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-[2px] w-9 origin-left bg-[#ff6b35]"
        />

        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-[15px]">
          {description}
        </p>
      )}
    </motion.header>
  );
}


function AnimatedOutlineButton({
  href,
  icon: Icon,
  children,
  external = false,
  className = "",
}: {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const sharedClasses = `
    group relative inline-flex h-11 shrink-0 items-center justify-center gap-2
    overflow-hidden rounded-full border border-white/15 bg-[#081629]
    px-4 text-sm font-extrabold text-white
    transition duration-300 hover:-translate-y-0.5
    hover:border-[#ff6b35]/75 hover:shadow-[0_10px_28px_rgba(255,107,53,0.14)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224]
    ${className}
  `;

  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px
        -translate-x-[170%] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent
        transition-transform duration-700 group-hover:translate-x-[170%]"
      />

      <Icon
        className="relative z-10 h-4 w-4 shrink-0 text-[#ff6b35]"
        aria-hidden="true"
      />

      <span className="relative z-10 whitespace-nowrap">{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClasses}>
      {content}
    </Link>
  );
}

export default function MyProfileBody({
  locale = "en",
}: MyProfileBodyProps) {
  const t = content[locale];
  const reduceMotion = useReducedMotion();

  const projectsPath =
    locale === "fr" ? "/fr/projects" : "/projects";

  const contactPath =
    locale === "fr" ? "/fr/contact" : "/contact";

  const viewportAnimation = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: {
          once: true,
          amount: 0.12,
          margin: "0px 0px -55px 0px",
        },
      };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name:
      locale === "fr"
        ? "Profil professionnel Mogana.dev"
        : "Mogana.dev Professional Profile",
    url:
      locale === "fr"
        ? "https://mogana.dev/fr/my-profile"
        : "https://mogana.dev/my-profile",
    mainEntity: {
      "@type": "Organization",
      name: "Mogana.dev",
      url: "https://mogana.dev",
      description:
        locale === "fr"
          ? "Ingénierie produit full stack, SaaS, intelligence artificielle et automatisation."
          : "Full stack product engineering, SaaS, artificial intelligence and business automation.",
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

   
    {/* LinkedIn-style cover and identity */}
    <div className="pt-[102px] lg:pt-0">
      <motion.section
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full overflow-hidden bg-[#081629]"
      >
        {/*
          The intrinsic image ratio is preserved at every breakpoint.
          No fill, no fixed-height parent and no object-cover are used,
          so the complete cover remains visible without cropping.
        */}
        <Image
          src="/images/profile/profile-cover.webp"
          alt="Mogana.dev professional profile cover"
          width={1920}
          height={520}
          priority
          quality={82}
          sizes="100vw"
          className="block h-auto w-full"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/35"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061224]/50 via-transparent to-black/10"
        />
      </motion.section>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          {/*
            A small overlap keeps the full portrait visible on mobile.
            Desktop uses a stronger LinkedIn-style overlap.
          */}
          <div className="relative -mt-8 sm:-mt-12 lg:-mt-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
            >
              <motion.div
                aria-hidden="true"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-[5px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#ff6b35_72deg,transparent_145deg,#ff6b35_235deg,transparent_315deg)]"
              />

              <div className="absolute inset-0 rounded-full bg-[#061224]" />

              <div className="absolute inset-[5px] overflow-hidden rounded-full border-4 border-[#061224] bg-[#0b182a]">
                <Image
                  src="/images/profile/profile-photo.jpg"
                  alt="Mogana.dev professional profile"
                  fill
                  priority
                  sizes="(max-width: 639px) 96px, (max-width: 1023px) 128px, 144px"
                  className="object-cover object-center"
                />
              </div>

              <span className="absolute bottom-0 right-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-[#061224] bg-[#0a66c2] shadow-[0_5px_18px_rgba(10,102,194,0.4)] sm:h-8 sm:w-8">
                <BadgeCheck
                  className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]"
                  strokeWidth={2.5}
                  aria-label="Verified professional profile"
                />
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.62,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-6 pb-8 pt-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8 lg:pb-10"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-[28px] font-extrabold leading-none tracking-[-0.035em] text-white sm:text-4xl">
                  Mogana.dev
                </h1>

                <BadgeCheck
                  className="h-5 w-5 shrink-0 text-[#0a66c2] sm:h-6 sm:w-6"
                  strokeWidth={2.4}
                  aria-label="Verified professional brand"
                />
              </div>

              <p className="mt-4 text-[17px] font-extrabold leading-snug text-white sm:text-xl">
                {t.headline}
              </p>

              <p className="mt-1.5 text-[14px] font-bold leading-snug text-[#ff6b35] sm:text-base">
                {t.subheadline}
              </p>

              <div className="mt-5 grid gap-3 text-sm text-white/65 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
                <span className="inline-flex min-w-0 items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-[#ff6b35]" aria-hidden="true" />
                  <span>{t.location}</span>
                </span>

                <span className="inline-flex min-w-0 items-center gap-2">
                  <Globe2 className="h-4 w-4 shrink-0 text-[#ff6b35]" aria-hidden="true" />
                  <span>{t.relocation}</span>
                </span>

                <span className="inline-flex min-w-0 items-center gap-2">
                  <Languages className="h-4 w-4 shrink-0 text-[#ff6b35]" aria-hidden="true" />
                  <span>{t.languages}</span>
                </span>
              </div>

              <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3.5 py-2 text-[11px] font-bold leading-snug text-emerald-300 sm:text-xs">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span>{t.availability}</span>
              </div>
            </div>

            {/*
              Mobile: two compact buttons plus a full-width Projects action.
              Desktop: all three compact actions remain on one row.
            */}
            <div className="grid w-full grid-cols-2 gap-3 lg:flex lg:w-auto lg:flex-nowrap lg:items-center lg:justify-end lg:pt-2">
              <AnimatedOutlineButton
                href={`mailto:${CONTACT_EMAIL}`}
                icon={Mail}
                className="w-full lg:w-auto"
              >
                {t.buttons.email}
              </AnimatedOutlineButton>

              <AnimatedOutlineButton
                href={waLink(
                  "Hello Mogana.dev, I would like to connect regarding a role or project.",
                )}
                icon={MessageCircle}
                external
                className="w-full lg:w-auto"
              >
                {t.buttons.whatsapp}
              </AnimatedOutlineButton>

              <AnimatedOutlineButton
                href={projectsPath}
                icon={ArrowRight}
                className="col-span-2 w-full lg:col-auto lg:w-auto"
              >
                {t.buttons.projects}
              </AnimatedOutlineButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

      {/* About — clean background, no container */}
      <motion.section
        {...viewportAnimation}
        variants={reveal}
        className="border-t border-white/10 py-9 sm:py-11"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />

          <div className="mt-6 max-w-4xl space-y-4">
            {t.about.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={reveal}
                className="text-sm leading-7 text-white/72 sm:text-[15px]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2"
          >
            {t.about.highlights.map((highlight) => (
              <motion.div
                key={highlight}
                variants={reveal}
                className="flex items-center gap-3 border-b border-white/10 pb-4"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />

                <span className="text-sm font-semibold text-white/85">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience with animated line and real logos */}
      <section className="border-t border-white/10 py-9 sm:py-11">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              description={t.experience.description}
            />
          </motion.div>

          <div className="relative mt-9">
            {/* Animated timeline */}
            <motion.div
              aria-hidden="true"
              initial={
                reduceMotion
                  ? false
                  : {
                      scaleY: 0,
                    }
              }
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 left-6 top-0 w-[2px] origin-top bg-gradient-to-b from-[#ff6b35] via-[#ff6b35]/65 to-transparent sm:left-8"
            />

            <div className="space-y-10">
              {t.experience.items.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  {...viewportAnimation}
                  variants={reveal}
                  className="relative grid grid-cols-[50px_minmax(0,1fr)] gap-5 sm:grid-cols-[66px_minmax(0,1fr)] sm:gap-7"
                >
                  {/* Logo on left of animated line */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.06,
                              rotate: 2,
                            }
                      }
                      className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#ff6b35]/40 bg-white p-1.5 shadow-[0_0_0_5px_#061224,0_0_28px_rgba(255,107,53,0.16)] sm:h-16 sm:w-16"
                    >
                      <Image
                        src={experience.logo}
                        alt={experience.logoAlt}
                        fill
                        sizes="64px"
                        className="object-contain p-1.5"
                      />
                    </motion.div>
                  </div>

                  <div className="min-w-0 border-b border-white/10 pb-10">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                      <div>
                        <h3 className="font-display text-xl font-extrabold text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-base font-bold text-[#ff6b35]">
                          {experience.company}
                        </p>

                        <p className="mt-1 text-sm text-white/50">
                          {experience.type}
                        </p>
                      </div>

                      <div className="shrink-0 md:text-right">
                        <p className="text-sm font-semibold text-white/75">
                          {experience.period}
                        </p>

                        <p className="mt-1 text-xs text-white/45">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 max-w-4xl text-sm leading-7 text-white/72 sm:text-[15px]">
                      {experience.summary}
                    </p>

                    <ul className="mt-5 grid gap-x-8 gap-y-2.5 lg:grid-cols-2">
                      {experience.responsibilities.map(
                        (responsibility) => (
                          <li
                            key={responsibility}
                            className="flex items-start gap-2.5 text-sm leading-6 text-white/68"
                          >
                            <CheckCircle2
                              className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                              aria-hidden="true"
                            />

                            <span>{responsibility}</span>
                          </li>
                        ),
                      )}
                    </ul>

                    {experience.technologies && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/12 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-white/68 transition hover:border-[#ff6b35]/45 hover:text-white"
                            >
                              {technology}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies — clean background */}
      <section className="border-t border-white/10 py-9 sm:py-11">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.technology.eyebrow}
              title={t.technology.title}
              description={t.technology.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2"
          >
            {t.technology.groups.map((group) => {
              const Icon = group.icon;

              return (
                <motion.article
                  key={group.title}
                  variants={reveal}
                  className="border-b border-white/10 pb-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff6b35]/35 bg-[#ff6b35]/10 text-[#ff6b35]">
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-display text-lg font-extrabold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70 transition hover:border-[#ff6b35]/45 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/10 py-9 sm:py-11">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.skills.eyebrow}
              title={t.skills.title}
              description={t.skills.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {t.skills.items.map((skill) => (
              <motion.span
                key={skill}
                variants={reveal}
                className="rounded-full border border-[#ff6b35]/25 bg-[#ff6b35]/[0.035] px-4 py-2 text-sm font-medium text-white/78 transition hover:border-[#ff6b35]/65 hover:text-white"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 py-9 sm:py-11">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <motion.div
            {...viewportAnimation}
            variants={reveal}
          >
            <SectionHeading
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              description={t.services.description}
            />
          </motion.div>

          <motion.div
            {...viewportAnimation}
            variants={stagger}
            className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2"
          >
            {t.services.items.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={reveal}
                  className="group flex gap-4 border-b border-white/10 pb-7"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/35 bg-[#ff6b35]/10 text-[#ff6b35] transition group-hover:border-[#ff6b35]/70 group-hover:bg-[#ff6b35]/15">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-extrabold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/68">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Full-width orange CTA */}
      <motion.section
        {...viewportAnimation}
        variants={reveal}
        className="relative overflow-hidden bg-[#ff6b35]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#e8521e] via-[#ff6b35] to-[#ff8657]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-white/15 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/85">
              {t.cta.eyebrow}
            </p>

            <h2 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {t.cta.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/85 sm:text-[15px]">
              {t.cta.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={contactPath}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#e8521e] transition hover:-translate-y-0.5 hover:bg-orange-50"
            >
              <Mail
                className="h-4 w-4"
                aria-hidden="true"
              />
              {t.cta.primary}
            </Link>

            <Link
              href={projectsPath}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/55 bg-black/10 px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-black/20"
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