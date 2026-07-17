"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { waLink } from "@/lib/contact";
import type { Locale } from "@/lib/dictionary";

interface WhatsAppFloatProps {
  locale?: Locale;
}

const MESSAGES: Record<Locale, string> = {
  en:
    "Hello Mogana.dev, I visited your website and would like to discuss a project or opportunity.",
  fr:
    "Bonjour Mogana.dev, j’ai visité votre site et j’aimerais discuter d’un projet ou d’une opportunité.",
};

export default function WhatsAppFloat({
  locale = "en",
}: WhatsAppFloatProps) {
  const shouldReduceMotion = useReducedMotion();

  const label =
    locale === "fr"
      ? "Discuter sur WhatsApp"
      : "Chat on WhatsApp";

  return (
    <motion.a
      href={waLink(MESSAGES[locale])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.72,
              y: 14,
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.08,
            }
      }
      whileTap={
        shouldReduceMotion
          ? undefined
          : {
              scale: 0.94,
            }
      }
      className="
        group
        fixed
        bottom-4
        right-4
        z-[90]
        flex
        h-[62px]
        w-[62px]
        items-center
        justify-center
        rounded-full
        bg-transparent
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#25d366]
        focus-visible:ring-offset-3
        focus-visible:ring-offset-ink
        sm:bottom-5
        sm:right-5
        sm:h-[68px]
        sm:w-[68px]
      "
    >
      {/* Expanding pulse ring — no filled background */}
      <motion.span
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [0.88, 1.38, 1.38],
                opacity: [0, 0.42, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }
        }
        className="pointer-events-none absolute inset-[7px] rounded-full border border-[#25d366]/70"
      />

      {/* Second delayed pulse for a smoother rhythm */}
      <motion.span
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [0.88, 1.32, 1.32],
                opacity: [0, 0.26, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 2.5,
                delay: 1.25,
                repeat: Infinity,
                ease: "easeOut",
              }
        }
        className="pointer-events-none absolute inset-[7px] rounded-full border border-[#25d366]/45"
      />

      {/* Very soft glow only, not a button background */}
      <motion.span
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.12, 0.3, 0.12],
                scale: [0.92, 1.08, 0.92],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="pointer-events-none absolute inset-[9px] rounded-full bg-[#25d366]/20 blur-lg"
      />

      {/* Real WhatsApp image */}
      <motion.span
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -2, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="relative block h-[50px] w-[50px] sm:h-[56px] sm:w-[56px]"
      >
        <Image
          src="/icons/whatsapp.png"
          alt=""
          fill
          priority
          sizes="56px"
          className="object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.3)] transition-[filter] duration-300 group-hover:drop-shadow-[0_12px_20px_rgba(37,211,102,0.34)]"
        />
      </motion.span>

      {/* Desktop tooltip */}
      <span
        role="tooltip"
        className="
          pointer-events-none
          absolute
          right-[calc(100%+10px)]
          top-1/2
          hidden
          -translate-y-1/2
          whitespace-nowrap
          rounded-lg
          border
          border-white/10
          bg-[#071323]/95
          px-3
          py-2
          text-xs
          font-semibold
          text-white/85
          opacity-0
          shadow-[0_12px_32px_rgba(0,0,0,0.32)]
          backdrop-blur-xl
          transition-all
          duration-200
          group-hover:-translate-x-1
          group-hover:opacity-100
          lg:block
        "
      >
        {label}
      </span>
    </motion.a>
  );
}