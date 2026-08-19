"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";

import LangSwitcher from "./LangSwitcher";
import {
  dict,
  withLocale,
  type Locale,
} from "@/lib/dictionary";

interface NavbarProps {
  locale?: Locale;
}

interface NavigationLink {
  href: string;
  label: string;
}

function normalizePath(path: string) {
  if (path === "/" || path === "/fr") {
    return path;
  }

  return path.replace(/\/$/, "");
}

function isNavigationLinkActive(
  pathname: string,
  href: string,
) {
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(href);

  if (targetPath === "/" || targetPath === "/fr") {
    return currentPath === targetPath;
  }

  return (
    currentPath === targetPath ||
    currentPath.startsWith(`${targetPath}/`)
  );
}

export default function Navbar({
  locale = "en",
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const t = dict[locale].nav;

  const links = useMemo<NavigationLink[]>(
    () => [
      {
        href: withLocale("/", locale),
        label: t.home,
      },
      {
        href: withLocale("/about-me", locale),
        label: t.aboutMe,
      },
      {
        href: withLocale("/my-profile", locale),
        label: t.myProfile,
      },
      {
        href: withLocale("/projects", locale),
        label: t.projects,
      },
      {
        href: withLocale("/skills", locale),
        label: t.skills,
      },
      {
        href: withLocale("/articles", locale),
        label: t.articles,
      },
      {
        href: withLocale("/contact", locale),
        label: t.contact,
      },
    ],
    [locale, t],
  );

  useEffect(() => {
    const updateNavbarState = () => {
      setScrolled(window.scrollY > 10);
    };

    updateNavbarState();

    window.addEventListener(
      "scroll",
      updateNavbarState,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateNavbarState,
      );
    };
  }, []);

  return (
    <motion.header
      initial={
        shouldReduceMotion
          ? false
          : {
              y: -72,
              opacity: 0,
            }
      }
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[#071323]/95 shadow-[0_14px_45px_rgba(0,0,0,0.30)] backdrop-blur-2xl"
          : "bg-[#071323]/88 backdrop-blur-xl"
      }`}
    >
      <nav
        aria-label={
          locale === "fr"
            ? "Navigation principale"
            : "Primary navigation"
        }
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10"
      >
        {/* Brand */}
        <Link
          href={withLocale("/", locale)}
          aria-label={
            locale === "fr"
              ? "Mogana.dev — Accueil"
              : "Mogana.dev — Home"
          }
          className="group flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071323]"
        >
          <span className="relative block h-11 w-11 shrink-0 sm:h-12 sm:w-12">
            <Image
              src="/images/brand/logo.png"
              alt=""
              fill
              priority
              sizes="48px"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>

          <span className="whitespace-nowrap font-display text-xl font-extrabold tracking-[-0.04em] sm:text-[1.4rem]">
            <span className="text-white">
              Mogana
            </span>
            <span className="text-[#ff6b35]">
              .dev
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((link) => {
            const active = isNavigationLinkActive(
              pathname,
              link.href,
            );

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={`relative inline-flex h-10 items-center justify-center rounded-full px-3 text-[13px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] ${
                    active
                      ? "bg-white/[0.07] text-white"
                      : "text-white/65 hover:bg-white/[0.045] hover:text-white"
                  }`}
                >
                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-[18px] h-0.5 rounded-full bg-[#ff6b35]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop controls */}
        <div className="hidden shrink-0 items-center gap-2.5 xl:flex">
          <LangSwitcher locale={locale} />
        </div>

        {/* Mobile controls */}
        <MobileMenu
          key={pathname}
          links={links}
          locale={locale}
          pathname={pathname}
        />
      </nav>
    </motion.header>
  );
}

interface MobileMenuProps {
  links: NavigationLink[];
  locale: Locale;
  pathname: string;
}

function MobileMenu({
  links,
  locale,
  pathname,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  return (
    <div className="flex items-center gap-2 xl:hidden">
      <LangSwitcher locale={locale} compact />

      {/* Clean hamburger: no circle, no border, no background */}
      <button
        type="button"
        onClick={() => {
          setOpen((current) => !current);
        }}
        aria-label={
          open
            ? locale === "fr"
              ? "Fermer le menu"
              : "Close menu"
            : locale === "fr"
              ? "Ouvrir le menu"
              : "Open menu"
        }
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="group relative inline-flex h-10 w-10 items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071323]"
      >
        <span className="relative block h-[18px] w-7">
          <span
            aria-hidden="true"
            className={`absolute left-0 top-0 block h-[2px] w-7 rounded-full bg-white transition-all duration-300 ${
              open
                ? "top-2 rotate-45"
                : "group-hover:bg-[#ff8a57]"
            }`}
          />

          <span
            aria-hidden="true"
            className={`absolute left-0 top-2 block h-[2px] w-7 rounded-full bg-white transition-all duration-300 ${
              open
                ? "scale-x-0 opacity-0"
                : "group-hover:bg-[#ff8a57]"
            }`}
          />

          <span
            aria-hidden="true"
            className={`absolute left-0 top-4 block h-[2px] w-7 rounded-full bg-white transition-all duration-300 ${
              open
                ? "top-2 -rotate-45"
                : "group-hover:bg-[#ff8a57]"
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label={
                locale === "fr"
                  ? "Fermer le menu"
                  : "Close menu"
              }
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.2,
              }}
              className="fixed inset-0 top-[76px] z-40 cursor-default bg-black/55 backdrop-blur-sm"
            />

            <motion.div
              id="mobile-navigation"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -12,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: -10,
                    }
              }
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 top-[76px] z-50 max-h-[calc(100svh-76px)] overflow-y-auto bg-[#071323]/[0.99] px-4 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:px-6"
            >
              <div className="mx-auto flex max-w-7xl flex-col">
                <ul className="grid gap-1">
                  {links.map(
                    (link, index) => {
                      const active =
                        isNavigationLinkActive(
                          pathname,
                          link.href,
                        );

                      return (
                        <motion.li
                          key={link.href}
                          initial={
                            shouldReduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  x: -10,
                                }
                          }
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration:
                              shouldReduceMotion
                                ? 0
                                : 0.25,
                            delay:
                              shouldReduceMotion
                                ? 0
                                : 0.04 +
                                  index * 0.035,
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => {
                              setOpen(false);
                            }}
                            aria-current={
                              active
                                ? "page"
                                : undefined
                            }
                            className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                              active
                                ? "bg-[#ff6b35]/12 text-[#ff9a6c]"
                                : "text-white/80 hover:bg-white/[0.05] hover:text-white"
                            }`}
                          >
                            <span>
                              {link.label}
                            </span>

                            {active && (
                              <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-full bg-[#ff6b35] shadow-[0_0_14px_rgba(255,107,53,0.75)]"
                              />
                            )}
                          </Link>
                        </motion.li>
                      );
                    },
                  )}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}