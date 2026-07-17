"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

import { getHomeProjects } from "@/lib/projects";
import {
  dict,
  withLocale,
  type Locale,
} from "@/lib/dictionary";

interface FeaturedProjectsProps {
  locale?: Locale;
}

export default function FeaturedProjects({
  locale = "en",
}: FeaturedProjectsProps) {
  const projects = getHomeProjects(locale);
  const t = dict[locale].featuredProjects;
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const activeProject = projects[activeIndex];
  const activeHighlights = activeProject?.highlights ?? [];
  const activeTechnologies = activeProject?.tech ?? [];

  const selectProject = useCallback(
    (index: number) => {
      if (
        index < 0 ||
        index >= projects.length ||
        index === activeIndex
      ) {
        return;
      }

      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex, projects.length],
  );

  const showPrevious = useCallback(() => {
    if (projects.length < 2) {
      return;
    }

    setDirection(-1);

    setActiveIndex((current) =>
      current === 0
        ? projects.length - 1
        : current - 1,
    );
  }, [projects.length]);

  const showNext = useCallback(() => {
    if (projects.length < 2) {
      return;
    }

    setDirection(1);

    setActiveIndex((current) =>
      current === projects.length - 1
        ? 0
        : current + 1,
    );
  }, [projects.length]);

  useEffect(() => {
    if (
      paused ||
      shouldReduceMotion ||
      projects.length < 2
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      showNext();
    }, 7000);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    paused,
    projects.length,
    shouldReduceMotion,
    showNext,
  ]);

  useEffect(() => {
    const handleKeyboardNavigation = (
      event: KeyboardEvent,
    ) => {
      if (
        !sectionRef.current?.contains(
          document.activeElement,
        )
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyboardNavigation,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyboardNavigation,
      );
    };
  }, [showNext, showPrevious]);

  if (!activeProject) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="featured-projects-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative overflow-hidden bg-ink py-10 sm:py-12 lg:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-40 h-[420px] w-[78%] -translate-x-1/2 rounded-full bg-[#ff6b35]/[0.025] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff6b35]">
              {t.eyebrow}
            </p>

            <h2
              id="featured-projects-title"
              className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
            >
              {t.title}
            </h2>
          </div>

          <Link
            href={withLocale("/projects", locale)}
            className="group inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-sm font-semibold text-[#ff7842] transition-colors duration-300 hover:text-[#ffad7d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
          >
            <span>{t.viewAll}</span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Main project image */}
        <div className="relative mt-8 sm:mt-10">
          <button
            type="button"
            onClick={showPrevious}
            aria-label={
              locale === "fr"
                ? "Projet précédent"
                : "Previous project"
            }
            className="group absolute left-0 top-1/2 z-30 hidden h-12 w-12 -translate-x-[74%] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-[#ff6b35]/45 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] xl:flex"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label={
              locale === "fr"
                ? "Projet suivant"
                : "Next project"
            }
            className="group absolute right-0 top-1/2 z-30 hidden h-12 w-12 translate-x-[74%] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-[#ff6b35]/45 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] xl:flex"
          >
            <ArrowRight
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <div className="relative aspect-[16/9] w-full overflow-hidden bg-transparent">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={activeProject.slug}
                custom={direction}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        x: direction * 44,
                        scale: 0.99,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: direction * -44,
                        scale: 0.99,
                      }
                }
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.name} project preview`}
                  fill
                  priority
                  quality={82}
                  draggable={false}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="pointer-events-none select-none object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile controls */}
          <div className="mt-4 flex items-center justify-center gap-3 xl:hidden">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={
                locale === "fr"
                  ? "Projet précédent"
                  : "Previous project"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#ff6b35]/45 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4"
              />
            </button>

            <span className="min-w-20 text-center text-xs font-semibold text-white/50">
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={showNext}
              aria-label={
                locale === "fr"
                  ? "Projet suivant"
                  : "Next project"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#ff6b35]/45 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
            >
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div
          data-horizontal-scroll
          className="mt-5 overflow-x-auto overflow-y-visible pb-2 [overscroll-behavior:auto] [scrollbar-width:none] [touch-action:pan-y_pinch-zoom] [&::-webkit-scrollbar]:hidden lg:overflow-visible"
        >
          <div className="grid min-w-[1040px] grid-cols-8 gap-3 lg:min-w-0">
            {projects.map((project, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => selectProject(index)}
                  aria-label={`${
                    locale === "fr"
                      ? "Afficher"
                      : "Show"
                  } ${project.name}`}
                  aria-pressed={active}
                  className={`group relative aspect-[16/9] overflow-hidden rounded-xl border p-1.5 backdrop-blur-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] ${
                    active
                      ? "border-[#ff6b35]/75 bg-[#ff6b35]/[0.08] shadow-[0_0_24px_rgba(255,107,53,0.18)]"
                      : "border-white/10 bg-white/[0.035] hover:border-[#ff6b35]/40 hover:bg-white/[0.055]"
                  }`}
                >
                  <span className="relative block h-full w-full overflow-hidden rounded-lg bg-transparent">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      loading="lazy"
                      quality={75}
                      draggable={false}
                      sizes="150px"
                      className="pointer-events-none select-none object-contain object-center"
                    />
                  </span>

                  <span
                    className={`absolute bottom-1.5 left-1.5 flex h-7 min-w-7 items-center justify-center rounded-md border px-1.5 text-xs font-extrabold shadow-lg backdrop-blur-xl ${
                      active
                        ? "border-[#ff6b35] bg-[#ff6b35] text-white"
                        : "border-white/10 bg-[#071323]/80 text-white"
                    }`}
                  >
                    {index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic project details */}
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          <motion.div
            key={`${activeProject.slug}-details`}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
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
                    y: -8,
                  }
            }
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14"
          >
            {/* Left details */}
            <div>
              <h3 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
                {activeProject.name}
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-[#ff6b35]">
                {activeProject.category}
              </p>

              {activeHighlights.length > 0 && (
                <div className="mt-5 max-w-sm">
                  {activeHighlights.map(
                    (highlight, index) => (
                      <div
                        key={highlight}
                        className={`py-3 ${
                          index !==
                          activeHighlights.length - 1
                            ? "border-b border-white/15"
                            : ""
                        }`}
                      >
                        <p className="text-base font-bold leading-snug text-white/90">
                          {highlight}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Right details */}
            <div className="lg:pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={activeProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#ff6b35]/55 bg-[#ff6b35]/[0.04] px-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
                >
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                  <span>
                    {locale === "fr"
                      ? "Voir le projet"
                      : "View Project"}
                  </span>
                </a>

                <a
                  href="https://github.com/moganadev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    locale === "fr"
                      ? "Voir le profil GitHub de Mogana.dev"
                      : "View Mogana.dev GitHub profile"
                  }
                  className="group inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 bg-white/[0.035] px-4 text-sm font-bold text-white/80 transition-all duration-300 hover:border-[#ff6b35]/45 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
                >
                  <Github
                    aria-hidden="true"
                    className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110"
                  />

                  <span>GitHub</span>
                </a>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                {activeProject.overview}
              </p>

              {activeTechnologies.length > 0 && (
                <div className="mt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                    {locale === "fr"
                      ? "Technologies utilisées"
                      : "Technologies used"}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeTechnologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="inline-flex h-8 items-center rounded-full border border-white/10 bg-white/[0.035] px-3 text-xs font-medium text-white/70"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/40">
                <ExternalLink
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />

                {activeProject.websiteUrl.replace(
                  /^https?:\/\//,
                  "",
                )}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}