"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Code2,
  Download,
  Globe2,
  Languages,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/dictionary";

type HireMeContent = {
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
  why: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: LucideIcon;
    }>;
  };
  contribution: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: LucideIcon;
      points: string[];
    }>;
  };
  fit: {
    eyebrow: string;
    title: string;
    description: string;
    rolesTitle: string;
    roles: string[];
    environmentsTitle: string;
    environments: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  reassurance: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  cta: {
    title: string;
    description: string;
    contact: string;
    cv: string;
  };
};

const CONTENT: Record<Locale, HireMeContent> = {
  en: {
    intro: {
      eyebrow: "Why hire Mogana.dev",
      title:
        "A product-focused full stack engineer who understands both software and real business operations.",
      description:
        "I combine end-to-end product delivery with practical experience in logistics, hospitality, distribution and business operations. That allows me to understand the organisation behind the interface and build software around real workflows.",
    },
    summary: [
      {
        value: "Full stack",
        label: "Frontend, backend and database delivery",
        icon: Layers3,
      },
      {
        value: "Product-led",
        label: "Business requirements before features",
        icon: BriefcaseBusiness,
      },
      {
        value: "International",
        label: "English, French and relocation ready",
        icon: Globe2,
      },
    ],
    why: {
      eyebrow: "Why teams choose me",
      title: "More than implementation — practical product ownership.",
      description:
        "I do not approach development as isolated coding tasks. I study the users, workflows, constraints and business outcome, then connect those requirements to a maintainable technical solution.",
      items: [
        {
          title: "End-to-end delivery",
          description:
            "I can move from discovery and interface planning through application logic, database design, testing and deployment.",
          icon: Code2,
        },
        {
          title: "Operational awareness",
          description:
            "My previous experience helps me understand how teams work, where delays happen and what information a product must surface.",
          icon: Workflow,
        },
        {
          title: "Product communication",
          description:
            "I translate business language into clear product requirements and explain technical decisions without unnecessary complexity.",
          icon: Users,
        },
        {
          title: "Production mindset",
          description:
            "Security, responsive behaviour, permissions, performance and maintainability are considered throughout the build.",
          icon: ShieldCheck,
        },
      ],
    },
    contribution: {
      eyebrow: "What I can contribute",
      title: "Useful impact across the full product lifecycle.",
      description:
        "I can contribute independently while collaborating closely with product managers, designers, engineers and business stakeholders.",
      items: [
        {
          title: "SaaS & enterprise products",
          description:
            "Build structured applications for accounting, operations, customer management, reporting and internal workflows.",
          icon: Building2,
          points: [
            "Role-based access and secure data flows",
            "Dashboards, reports and administrative tools",
            "Reliable business rules and workflow automation",
          ],
        },
        {
          title: "Modern web platforms",
          description:
            "Create responsive corporate sites, marketplaces, booking systems and e-commerce experiences.",
          icon: Rocket,
          points: [
            "Fast mobile-first interfaces",
            "SEO-ready architecture and metadata",
            "Clear customer journeys and conversion paths",
          ],
        },
        {
          title: "AI & automation",
          description:
            "Apply AI and automation where they improve customer service, information access or repetitive workflows.",
          icon: Sparkles,
          points: [
            "AI assistants and business automation",
            "API and third-party service integration",
            "Responsible use of AI around practical outcomes",
          ],
        },
      ],
    },
    fit: {
      eyebrow: "Role alignment",
      title: "The roles and environments where I can add the most value.",
      description:
        "I am seeking a serious international team where I can contribute immediately, deepen my engineering expertise and help deliver products with measurable business value.",
      rolesTitle: "Relevant roles",
      roles: [
        "Full Stack Product Engineer",
        "Full Stack Developer",
        "SaaS Product Engineer",
        "AI & Automation Engineer",
        "Technical Product Builder",
        "Product-focused Software Engineer",
      ],
      environmentsTitle: "Best-fit environments",
      environments: [
        "SaaS and enterprise software teams",
        "Product companies solving operational problems",
        "Startups with experienced technical leadership",
        "International teams working in English or French",
        "Organisations open to relocation or sponsorship",
        "Teams that value ownership and continuous learning",
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "A clear process from requirement to production.",
      description:
        "My approach reduces ambiguity early, keeps implementation aligned with the business and supports a more dependable production result.",
      steps: [
        {
          number: "01",
          title: "Understand",
          description:
            "Study the organisation, users, workflows, constraints and desired outcome.",
        },
        {
          number: "02",
          title: "Define",
          description:
            "Translate the challenge into priorities, user journeys and technical responsibilities.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "Develop the interface, application logic, database, security and integrations.",
        },
        {
          number: "04",
          title: "Validate",
          description:
            "Test responsive behaviour, permissions, performance and production readiness.",
        },
      ],
    },
    reassurance: {
      eyebrow: "For recruiters and hiring managers",
      title: "A dependable professional profile built for long-term contribution.",
      description:
        "I am looking for the right team and a stable opportunity where I can contribute, learn from experienced engineers and continue growing into larger systems and responsibilities.",
      points: [
        "Available for full-time international employment",
        "Open to relocation and visa sponsorship",
        "Professional proficiency in English and French",
        "Experience delivering real production projects",
        "Comfortable working across technical and business conversations",
        "Committed to continuous learning and long-term product quality",
      ],
    },
    cta: {
      title: "Have a role where product thinking and full stack delivery matter?",
      description:
        "Share the position, team context and expected contribution. I will respond clearly and professionally.",
      contact: "Request an interview",
      cv: "Download CV",
    },
  },
  fr: {
    intro: {
      eyebrow: "Pourquoi recruter Mogana.dev",
      title:
        "Un ingénieur produit full stack qui comprend à la fois le logiciel et les opérations réelles d’une entreprise.",
      description:
        "Je combine la livraison complète de produits numériques avec une expérience pratique en logistique, hôtellerie, distribution et opérations. Cela me permet de comprendre l’organisation derrière l’interface et de construire autour de workflows réels.",
    },
    summary: [
      {
        value: "Full stack",
        label: "Frontend, backend et base de données",
        icon: Layers3,
      },
      {
        value: "Orienté produit",
        label: "Les besoins métier avant les fonctionnalités",
        icon: BriefcaseBusiness,
      },
      {
        value: "International",
        label: "Anglais, français et mobilité",
        icon: Globe2,
      },
    ],
    why: {
      eyebrow: "Pourquoi les équipes me choisissent",
      title: "Plus que l’implémentation — une véritable responsabilité produit.",
      description:
        "Je n’aborde pas le développement comme une suite de tâches isolées. J’étudie les utilisateurs, les workflows, les contraintes et le résultat attendu, puis je relie ces besoins à une solution maintenable.",
      items: [
        {
          title: "Livraison de bout en bout",
          description:
            "Je peux avancer de la découverte et la planification jusqu’à la logique applicative, la base de données, les tests et le déploiement.",
          icon: Code2,
        },
        {
          title: "Compréhension opérationnelle",
          description:
            "Mon expérience précédente m’aide à comprendre le fonctionnement des équipes, les blocages et les informations nécessaires.",
          icon: Workflow,
        },
        {
          title: "Communication produit",
          description:
            "Je transforme le langage métier en exigences produit claires et j’explique les décisions techniques sans complexité inutile.",
          icon: Users,
        },
        {
          title: "Vision production",
          description:
            "La sécurité, le responsive, les permissions, la performance et la maintenabilité sont intégrés dès la conception.",
          icon: ShieldCheck,
        },
      ],
    },
    contribution: {
      eyebrow: "Ce que je peux apporter",
      title: "Une contribution utile sur tout le cycle de vie du produit.",
      description:
        "Je peux travailler avec autonomie tout en collaborant étroitement avec les product managers, designers, ingénieurs et parties prenantes métier.",
      items: [
        {
          title: "Produits SaaS et entreprise",
          description:
            "Construire des applications structurées pour la comptabilité, les opérations, les clients, les rapports et les workflows internes.",
          icon: Building2,
          points: [
            "Accès par rôles et flux de données sécurisés",
            "Dashboards, rapports et outils administratifs",
            "Règles métier et automatisation fiables",
          ],
        },
        {
          title: "Plateformes web modernes",
          description:
            "Créer des sites professionnels, marketplaces, systèmes de réservation et expériences e-commerce responsives.",
          icon: Rocket,
          points: [
            "Interfaces mobile-first rapides",
            "Architecture SEO et métadonnées",
            "Parcours clients clairs et orientés conversion",
          ],
        },
        {
          title: "IA et automatisation",
          description:
            "Appliquer l’IA et l’automatisation lorsqu’elles améliorent le service, l’accès à l’information ou les tâches répétitives.",
          icon: Sparkles,
          points: [
            "Assistants IA et automatisation métier",
            "Intégrations API et services externes",
            "Utilisation responsable de l’IA",
          ],
        },
      ],
    },
    fit: {
      eyebrow: "Alignement du poste",
      title: "Les rôles et environnements où je peux apporter le plus de valeur.",
      description:
        "Je recherche une équipe internationale sérieuse où je peux contribuer rapidement, approfondir mon expertise et aider à livrer des produits à forte valeur métier.",
      rolesTitle: "Rôles pertinents",
      roles: [
        "Ingénieur Produit Full Stack",
        "Développeur Full Stack",
        "Ingénieur Produit SaaS",
        "Ingénieur IA et Automatisation",
        "Technical Product Builder",
        "Ingénieur logiciel orienté produit",
      ],
      environmentsTitle: "Environnements adaptés",
      environments: [
        "Équipes SaaS et logiciels d’entreprise",
        "Entreprises produit résolvant des problèmes opérationnels",
        "Startups avec leadership technique expérimenté",
        "Équipes internationales en anglais ou français",
        "Organisations ouvertes à la mobilité ou au sponsoring",
        "Équipes valorisant l’autonomie et l’apprentissage",
      ],
    },
    process: {
      eyebrow: "Ma méthode de travail",
      title: "Un processus clair du besoin jusqu’à la production.",
      description:
        "Mon approche réduit l’ambiguïté, maintient l’implémentation alignée avec le métier et favorise un résultat fiable en production.",
      steps: [
        {
          number: "01",
          title: "Comprendre",
          description:
            "Étudier l’organisation, les utilisateurs, les workflows, les contraintes et le résultat attendu.",
        },
        {
          number: "02",
          title: "Définir",
          description:
            "Transformer le défi en priorités, parcours utilisateurs et responsabilités techniques.",
        },
        {
          number: "03",
          title: "Construire",
          description:
            "Développer l’interface, la logique, la base, la sécurité et les intégrations.",
        },
        {
          number: "04",
          title: "Valider",
          description:
            "Tester le responsive, les permissions, la performance et la préparation à la production.",
        },
      ],
    },
    reassurance: {
      eyebrow: "Pour les recruteurs et responsables",
      title: "Un profil professionnel fiable, orienté contribution à long terme.",
      description:
        "Je recherche la bonne équipe et une opportunité stable où je peux contribuer, apprendre auprès d’ingénieurs expérimentés et progresser vers des systèmes plus importants.",
      points: [
        "Disponible pour un emploi international à temps plein",
        "Ouvert à la mobilité et au visa sponsorship",
        "Maîtrise professionnelle de l’anglais et du français",
        "Expérience de projets réels en production",
        "À l’aise dans les échanges techniques et métier",
        "Engagé dans l’apprentissage continu et la qualité produit",
      ],
    },
    cta: {
      title: "Vous avez un poste où la réflexion produit et le full stack sont essentiels ?",
      description:
        "Partagez le poste, le contexte de l’équipe et la contribution attendue. Je répondrai clairement et professionnellement.",
      contact: "Demander un entretien",
      cv: "Télécharger le CV",
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HireMeBody({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = CONTENT[locale];
  const reduceMotion = useReducedMotion();

  const viewport = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: {
          once: true,
          amount: 0.12,
        },
      };

  const contactPath = locale === "fr" ? "/fr/contact" : "/contact";
  const cvPath =
    locale === "fr"
      ? "/documents/Mogana-dev-CV-FR.pdf"
      : "/documents/Mogana-dev-CV-EN.pdf";

  return (
    <main id="main-content" tabIndex={-1} className="overflow-hidden bg-[#061224] text-white">
      <Navbar locale={locale} />

      {/* Banner only: no text or buttons */}
<div className="pt-[102px] lg:pt-0">
  <motion.section
    initial={reduceMotion ? undefined : { opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: reduceMotion ? 0 : 0.65 }}
    className="relative m-0 w-full overflow-hidden bg-[#061224]"
  >
    <Image
      src="/images/banners/hire-me.webp"
      alt={
        locale === "fr"
          ? "Bannière professionnelle Mogana.dev"
          : "Mogana.dev professional hiring banner"
      }
      width={1920}
      height={1080}
      priority
      quality={82}
      sizes="100vw"
      className="block h-auto w-full"
    />

    {/* Main dark overlay */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-black/55"
    />

    {/* Soft premium gradient */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061224]/80 via-[#061224]/20 to-black/15"
    />
  </motion.section>
</div>      

<motion.section
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.72,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="border-b border-white/10 py-9 sm:py-12"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff6b35]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {t.intro.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 max-w-5xl font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.intro.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
              {t.intro.description}
            </p>
          </div>

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3"
          >
            {t.summary.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={reveal}
                className="flex items-center gap-3"
              >
                <Icon className="h-5 w-5 text-[#ff6b35]" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-extrabold text-white">
                    {value}
                  </p>
                  <p className="mt-0.5 text-xs text-white/48">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            description={t.why.description}
          />

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.why.items.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={reveal}
                  className="group border-t border-[#ff6b35]/45 pt-5"
                >
                  <Icon
                    className="h-5 w-5 text-[#ff6b35]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.contribution.eyebrow}
            title={t.contribution.title}
            description={t.contribution.description}
          />

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-9 grid gap-8 lg:grid-cols-3"
          >
            {t.contribution.items.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={reveal}
                  className="border-t border-white/10 pt-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/[0.07]">
                      <Icon
                        className="h-[18px] w-[18px] text-[#ff6b35]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-xl font-extrabold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-white/72"
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.fit.eyebrow}
            title={t.fit.title}
            description={t.fit.description}
          />

          <div className="mt-9 grid gap-10 lg:grid-cols-2">
            <motion.div {...viewport} variants={reveal}>
              <h3 className="font-display text-xl font-extrabold text-white">
                {t.fit.rolesTitle}
              </h3>
              <ul className="mt-5 space-y-0">
                {t.fit.roles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-sm font-semibold text-white/76"
                  >
                    <BriefcaseBusiness
                      className="h-4 w-4 shrink-0 text-[#ff6b35]"
                      aria-hidden="true"
                    />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...viewport} variants={reveal}>
              <h3 className="font-display text-xl font-extrabold text-white">
                {t.fit.environmentsTitle}
              </h3>
              <ul className="mt-5 space-y-0">
                {t.fit.environments.map((environment) => (
                  <li
                    key={environment}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-sm font-semibold text-white/76"
                  >
                    <Building2
                      className="h-4 w-4 shrink-0 text-[#ff6b35]"
                      aria-hidden="true"
                    />
                    {environment}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            description={t.process.description}
          />

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.process.steps.map((step) => (
              <motion.article
                key={step.number}
                variants={reveal}
                className="border-t border-[#ff6b35]/45 pt-5"
              >
                <p className="font-display text-3xl font-black text-[#ff6b35]">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-lg font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:px-10">
          <motion.div {...viewport} variants={reveal}>
            <SectionHeading
              eyebrow={t.reassurance.eyebrow}
              title={t.reassurance.title}
              description={t.reassurance.description}
            />
          </motion.div>

          <motion.ul
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            className="space-y-4 lg:pt-7"
          >
            {t.reassurance.points.map((point) => (
              <motion.li
                key={point}
                variants={reveal}
                className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/72"
              >
                <BadgeCheck
                  className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ff6b35]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#e95420] via-[#ff6b35] to-[#ff8657]"
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
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.cta.contact}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={cvPath}
              download
              className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.cta.cv}
            </a>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="max-w-4xl"
    >
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-9 bg-[#ff6b35]" />
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
        {description}
      </p>
    </motion.header>
  );
}
