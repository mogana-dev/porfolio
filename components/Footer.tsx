"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaRedditAlien,
  FaYoutube,
} from "react-icons/fa";
import {
  FaDev,
  FaHashnode,
  FaXTwitter,
} from "react-icons/fa6";

import {
  CONTACT_EMAIL,
  WHATSAPP_NUMBER_DISPLAY,
  waLink,
} from "@/lib/contact";
import {
  dict,
  withLocale,
  type Locale,
} from "@/lib/dictionary";

interface FooterProps {
  locale?: Locale;
}

const socialProfiles = [
  {
    label: "GitHub",
    href: "https://github.com/moganadev",
    icon: FaGithub,
  },
  {
    label: "X",
    href: "https://x.com/moganadev",
    icon: FaXTwitter,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/moganadev",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/moganadev",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@moganadev",
    icon: FaYoutube,
  },
  {
    label: "Dev.to",
    href: "https://dev.to/moganadev",
    icon: FaDev,
  },
  {
    label: "Hashnode",
    href: "https://hashnode.com/@moganadev",
    icon: FaHashnode,
  },
  {
    label: "Reddit",
    href: "https://reddit.com/user/moganadev",
    icon: FaRedditAlien,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/moganadev",
    icon: FaDiscord,
  },
] as const;

export default function Footer({
  locale = "en",
}: FooterProps) {
  const footer = dict[locale].footer;
  const nav = dict[locale].nav;
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const quickLinks = [
    {
      href: withLocale("/about-me", locale),
      label: nav.aboutMe,
    },
    {
      href: withLocale("/my-profile", locale),
      label: nav.myProfile,
    },
    {
      href: withLocale("/projects", locale),
      label: nav.projects,
    },
    {
      href: withLocale("/skills", locale),
      label: nav.skills,
    },
    {
      href: withLocale("/case-studies", locale),
      label: nav.caseStudies,
    },
    {
      href: withLocale("/countries", locale),
      label: nav.countries,
    },
  ];

  const recruiterLinks = [
    {
      href: withLocale("/hire-me", locale),
      label: footer.hireMe,
    },
    {
      href: withLocale("/availability", locale),
      label: footer.availability,
    },
    {
      href: withLocale("/recruiter-faq", locale),
      label: footer.recruiterFaq,
    },
    {
      href: withLocale("/contact", locale),
      label: nav.contact,
    },
  ];

  const legalLinks = [
    {
      href: withLocale("/privacy", locale),
      label: footer.privacy,
    },
    {
      href: withLocale("/site-map", locale),
      label: footer.sitemap,
    },
  ];

  const labels =
    locale === "fr"
      ? {
          social: "Réseaux et communautés",
          location: "Basé à Maurice",
          opportunity:
            "Disponible pour des opportunités internationales et le sponsoring de visa.",
          brandDescription:
            "Ingénierie produit Full Stack, plateformes SaaS, ERP, marketplaces, e-commerce et solutions numériques propulsées par l’IA.",
        }
      : {
          social: "Socials and communities",
          location: "Based in Mauritius",
          opportunity:
            "Available for international opportunities and visa sponsorship.",
          brandDescription:
            "Full Stack Product Engineering, SaaS platforms, ERP systems, marketplaces, e-commerce and AI-powered digital solutions.",
        };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion
          ? 0
          : 0.07,
        delayChildren: shouldReduceMotion
          ? 0
          : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
          y: 18,
        },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion
          ? 0
          : 0.48,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 h-72 w-[72%] -translate-x-1/2 rounded-full bg-[#ff6b35]/[0.03] blur-[145px]" />

        <div className="absolute -left-40 top-16 h-64 w-64 rounded-full bg-[#ff6b35]/[0.025] blur-[115px]" />

        <div className="absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-[#ff8a50]/[0.02] blur-[115px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-40px",
        }}
        variants={containerVariants}
        className="relative mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pb-9 sm:pt-14 md:px-10 lg:pt-16"
      >
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.9fr_1.1fr] lg:gap-8">
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link
              href={withLocale("/", locale)}
              aria-label="Mogana.dev"
              className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
            >
              <span className="relative block h-11 w-11 shrink-0">
                <Image
                  src="/images/brand/logo.png"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </span>

              <span className="whitespace-nowrap font-display text-2xl font-extrabold tracking-[-0.045em]">
                <span className="text-white">
                  Mogana
                </span>

                <span className="text-[#ff6b35]">
                  .dev
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
              {footer.mission ||
                labels.brandDescription}
            </p>

            <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-white/42">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-[#ff6b35]"
              />

              <div>
                <p className="font-semibold text-white/65">
                  {labels.location}
                </p>

                <p className="mt-0.5 max-w-xs">
                  {labels.opportunity}
                </p>
              </div>
            </div>

            {/* Social profiles */}
            <div className="mt-6">
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-[#ff6b35]">
                {labels.social}
              </p>

              <div className="flex max-w-[330px] flex-wrap gap-2.5">
                {socialProfiles.map(
                  (social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        title={social.label}
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                scale: 0.85,
                                y: 8,
                              }
                        }
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration:
                            shouldReduceMotion
                              ? 0
                              : 0.32,
                          delay:
                            shouldReduceMotion
                              ? 0
                              : index * 0.035,
                        }}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                y: -3,
                                scale: 1.05,
                              }
                        }
                        className="
                          group
                          relative
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-[9px]
                          border
                          border-white/[0.08]
                          bg-gradient-to-br
                          from-[#162c4c]
                          via-[#0e213b]
                          to-[#071528]
                          text-[#8fb5df]
                          shadow-[
                            inset_1px_1px_0_rgba(255,255,255,0.09),
                            inset_-1px_-1px_0_rgba(0,0,0,0.35),
                            0_7px_15px_rgba(0,0,0,0.28)
                          ]
                          transition-all
                          duration-300
                          hover:border-[#ff6b35]/40
                          hover:text-[#ff8a57]
                          hover:shadow-[
                            inset_1px_1px_0_rgba(255,255,255,0.1),
                            inset_-1px_-1px_0_rgba(0,0,0,0.35),
                            0_10px_24px_rgba(0,0,0,0.4),
                            0_0_18px_rgba(255,107,53,0.1)
                          ]
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#ff6b35]
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-1.5 top-1 h-px rounded-full bg-white/10"
                        />

                        <Icon
                          aria-hidden="true"
                          className="relative h-[15px] w-[15px]"
                        />
                      </motion.a>
                    );
                  },
                )}
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <FooterHeading>
              {footer.quickLinks}
            </FooterHeading>

            <FooterLinks links={quickLinks} />
          </motion.div>

          {/* Recruiter links */}
          <motion.div variants={itemVariants}>
            <FooterHeading>
              {footer.forRecruiters}
            </FooterHeading>

            <FooterLinks
              links={recruiterLinks}
            />
          </motion.div>

          {/* Focus areas */}
          <motion.div variants={itemVariants}>
            <FooterHeading>
              {footer.focusAreas}
            </FooterHeading>

            <ul className="space-y-2.5 text-sm">
              {footer.capabilities.map(
                (capability) => (
                  <li
                    key={capability}
                    className="leading-6 text-white/55"
                  >
                    {capability}
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <FooterHeading>
              {footer.contactTitle}
            </FooterHeading>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group inline-flex w-fit items-start gap-2.5 text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#ff6b35]/15 bg-[#ff6b35]/[0.07]">
                  <Mail
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#ff6b35]"
                  />
                </span>

                <span className="pt-1">
                  {CONTACT_EMAIL}
                </span>
              </a>

              <a
                href={waLink(
                  locale === "fr"
                    ? "Bonjour Mogana.dev, j’ai visité votre portfolio et je souhaite discuter d’un projet ou d’une opportunité."
                    : "Hello Mogana.dev, I visited your portfolio and would like to discuss a project or opportunity.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-start gap-2.5 text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#ff6b35]/15 bg-[#ff6b35]/[0.07]">
                  <MessageCircle
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#ff6b35]"
                  />
                </span>

                <span className="pt-1">
                  {WHATSAPP_NUMBER_DISPLAY}
                </span>
              </a>

              <p className="mt-1 max-w-xs text-xs leading-5 text-white/38">
                {footer.availabilityLine}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          variants={itemVariants}
          className="mt-11 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-6 sm:flex-row"
        >
          <p className="text-center text-xs text-white/35 sm:text-left">
            © {year} Mogana.dev.{" "}
            {footer.rights}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/42">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded transition-colors duration-200 hover:text-[#ff8a57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff6b35]">
      {children}
    </h2>
  );
}

function FooterLinks({
  links,
}: {
  links: Array<{
    href: string;
    label: string;
  }>;
}) {
  return (
    <ul className="space-y-2.5 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group inline-flex items-center gap-1.5 rounded text-white/55 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
          >
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#ff6b35]/0 transition-colors duration-200 group-hover:bg-[#ff6b35]"
            />

            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}