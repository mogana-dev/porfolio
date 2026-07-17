"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  BriefcaseBusiness,
  Globe2,
  Languages,
  Layers3,
  Plane,
} from "lucide-react";

import type { Locale } from "@/lib/dictionary";

interface StatsGridProps {
  locale?: Locale;
}

interface StatItem {
  id: string;
  value?: number;
  suffix?: string;
  title: string;
  description: string;
  icon: typeof BriefcaseBusiness;
}

const statsContent: Record<Locale, StatItem[]> = {
  en: [
    {
      id: "projects",
      value: 20,
      suffix: "+",
      title: "Projects Delivered",
      description: "Production-ready digital products",
      icon: BriefcaseBusiness,
    },
    {
      id: "industries",
      value: 15,
      suffix: "+",
      title: "Industries Served",
      description: "Solutions across multiple sectors",
      icon: Globe2,
    },
    {
      id: "technologies",
      value: 12,
      suffix: "+",
      title: "SaaS · ERP · CRM · AI",
      description: "End-to-end product capabilities",
      icon: Layers3,
    },
    {
      id: "languages",
      title: "English / French",
      description: "Professional communication",
      icon: Languages,
    },
    {
      id: "visa",
      title: "Visa Sponsorship",
      description: "Available for international opportunities",
      icon: Plane,
    },
  ],

  fr: [
    {
      id: "projects",
      value: 20,
      suffix: "+",
      title: "Projets livrés",
      description: "Produits numériques prêts pour la production",
      icon: BriefcaseBusiness,
    },
    {
      id: "industries",
      value: 15,
      suffix: "+",
      title: "Secteurs accompagnés",
      description: "Solutions pour plusieurs industries",
      icon: Globe2,
    },
    {
      id: "technologies",
      value: 12,
      suffix: "+",
      title: "SaaS · ERP · CRM · IA",
      description: "Compétences produit de bout en bout",
      icon: Layers3,
    },
    {
      id: "languages",
      title: "Anglais / Français",
      description: "Communication professionnelle",
      icon: Languages,
    },
    {
      id: "visa",
      title: "Sponsoring de visa",
      description: "Disponible pour des opportunités internationales",
      icon: Plane,
    },
  ],
};

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, {
    once: true,
    margin: "-40px",
  });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return;
    }

    let animationFrame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      /*
       * Ease-out cubic:
       * starts quickly and finishes smoothly.
       */
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const nextValue = Math.max(
        1,
        Math.round(1 + (value - 1) * easedProgress),
      );

      setCount(nextValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, shouldReduceMotion, value]);

  const displayValue =
    isInView && shouldReduceMotion ? value : count;

  return (
    <span ref={counterRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StatsGrid({
  locale = "en",
}: StatsGridProps) {
  const stats = statsContent[locale];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label={
        locale === "fr"
          ? "Chiffres clés et disponibilité"
          : "Key figures and availability"
      }
      className="relative overflow-hidden bg-ink py-5 sm:py-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="absolute bottom-0 left-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-36 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-30px",
                }}
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.45,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6b35]/25 hover:bg-[#ff6b35]/[0.045] sm:px-4 ${
                  stat.id === "visa"
                    ? "col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/0 to-transparent transition-all duration-300 group-hover:via-[#ff6b35]/55"
                />

                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl border border-[#ff6b35]/15 bg-[#ff6b35]/10 text-[#ff7842] transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9">
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </div>

                {typeof stat.value === "number" ? (
                  <p className="font-display text-xl font-extrabold leading-none tracking-[-0.03em] text-[#ff7842] sm:text-2xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>
                ) : (
                  <p className="font-display text-sm font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-base">
                    {stat.title}
                  </p>
                )}

                {typeof stat.value === "number" && (
                  <h2 className="mt-1.5 text-xs font-bold leading-tight text-white sm:text-[13px]">
                    {stat.title}
                  </h2>
                )}

                <p className="mx-auto mt-1 max-w-[190px] text-[10px] leading-[1.4] text-white/45 sm:text-[11px]">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}