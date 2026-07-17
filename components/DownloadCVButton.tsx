"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronDown,
  Download,
  FileText,
} from "lucide-react";

import type { Locale } from "@/lib/dictionary";

const documents = {
  en: [
    {
      label: "CV — English",
      href: "/documents/cv/mogana-dev-cv-en.pdf",
    },
    {
      label: "CV — Français",
      href: "/documents/cv/mogana-dev-cv-fr.pdf",
    },
    {
      label: "Motivation Letter — English",
      href:
        "/documents/motivation-letters/mogana-dev-motivation-letter-en.pdf",
    },
    {
      label: "Lettre de motivation — Français",
      href:
        "/documents/motivation-letters/mogana-dev-lettre-motivation-fr.pdf",
    },
  ],

  fr: [
    {
      label: "CV — Français",
      href: "/documents/cv/mogana-dev-cv-fr.pdf",
    },
    {
      label: "CV — English",
      href: "/documents/cv/mogana-dev-cv-en.pdf",
    },
    {
      label: "Lettre de motivation — Français",
      href:
        "/documents/motivation-letters/mogana-dev-lettre-motivation-fr.pdf",
    },
    {
      label: "Motivation Letter — English",
      href:
        "/documents/motivation-letters/mogana-dev-motivation-letter-en.pdf",
    },
  ],
} satisfies Record<
  Locale,
  Array<{
    label: string;
    href: string;
  }>
>;

interface DownloadCVButtonProps {
  variant?: "solid" | "outline";
  size?: "default" | "compact" | "mobile";
  dropdownAlign?: "left" | "center" | "right";
  className?: string;
  locale?: Locale;
}

export default function DownloadCVButton({
  variant = "solid",
  size = "default",
  dropdownAlign = "center",
  className = "",
  locale = "en",
}: DownloadCVButtonProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();
  const shouldReduceMotion = useReducedMotion();

  const label =
    locale === "fr"
      ? "Télécharger le CV"
      : "Download CV";

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutsideClick,
    );

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick,
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      firstItemRef.current?.focus();
    }, shouldReduceMotion ? 0 : 120);

    return () => {
      window.clearTimeout(focusTimer);
    };
  }, [open, shouldReduceMotion]);

  const sizeStyle = {
    default: "h-14 px-7 text-sm",
    compact: "h-10 px-4 text-xs sm:h-11 sm:px-5 sm:text-[13px]",
    mobile: "h-12 px-5 text-sm",
  }[size];

  const iconSize =
    size === "compact"
      ? "h-3.5 w-3.5"
      : "h-4 w-4";

  const variantStyle =
    variant === "solid"
      ? "border border-[#ff7b45]/20 bg-gradient-to-r from-[#ff6131] via-[#ff6b35] to-[#ff824d] text-white shadow-[0_10px_28px_rgba(255,107,53,0.22)] hover:shadow-[0_15px_36px_rgba(255,107,53,0.34)]"
      : "border border-[#ff6b35]/45 bg-white/[0.035] text-white hover:border-[#ff6b35]/75 hover:bg-[#ff6b35]/10 hover:text-[#ffad7d]";

  const dropdownPosition = {
    left: "left-0",
    center:
      "left-1/2 -translate-x-1/2",
    right: "right-0",
  }[dropdownAlign];

  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (
      event.key === "ArrowDown" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative z-[120] ${
        size === "compact"
          ? "w-auto"
          : "w-full"
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => {
          setOpen((current) => !current);
        }}
        onKeyDown={handleButtonKeyDown}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className={`group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071323] ${sizeStyle} ${variantStyle}`}
      >
        <Download
          aria-hidden="true"
          className={`${iconSize} shrink-0`}
        />

        <span>{label}</span>

        <ChevronDown
          aria-hidden="true"
          className={`${iconSize} shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={
              locale === "fr"
                ? "Documents à télécharger"
                : "Documents to download"
            }
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -8,
                    scale: 0.98,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -6,
                    scale: 0.98,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`absolute top-[calc(100%+10px)] z-[130] w-full min-w-[280px] overflow-hidden rounded-2xl border border-white/[0.1] bg-[#09172a]/[0.99] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.58)] backdrop-blur-2xl sm:w-[320px] ${dropdownPosition}`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/60 to-transparent"
            />

            {documents[locale].map((document, index) => (
              <a
                key={document.href}
                ref={
                  index === 0
                    ? firstItemRef
                    : undefined
                }
                href={document.href}
                download
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                }}
                className="group/item flex min-h-12 w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-medium leading-snug text-white/75 transition-all duration-200 hover:bg-[#ff6b35]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b45]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#ff6b35]/15 bg-[#ff6b35]/10 text-[#ff7b45] transition-all duration-200 group-hover/item:border-[#ff6b35]/30 group-hover/item:bg-[#ff6b35]/15">
                  <FileText
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </span>

                <span className="min-w-0">
                  {document.label}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}