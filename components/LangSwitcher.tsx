"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/dictionary";

interface LangSwitcherProps {
  locale?: Locale;
  compact?: boolean;
}

function getLanguagePath(
  pathname: string,
  targetLocale: Locale,
) {
  const pathWithoutFrenchPrefix =
    pathname === "/fr"
      ? "/"
      : pathname.startsWith("/fr/")
        ? pathname.slice(3)
        : pathname;

  if (targetLocale === "fr") {
    return pathWithoutFrenchPrefix === "/"
      ? "/fr"
      : `/fr${pathWithoutFrenchPrefix}`;
  }

  return pathWithoutFrenchPrefix || "/";
}

const languages = [
  {
    locale: "en" as const,
    label: "English",
    shortLabel: "EN",
    flag: "/images/flags/en-flag.svg",
  },
  {
    locale: "fr" as const,
    label: "Français",
    shortLabel: "FR",
    flag: "/images/flags/fr-flag.svg",
  },
];

export default function LangSwitcher({
  locale = "en",
  compact = false,
}: LangSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={
        locale === "fr"
          ? "Choisir la langue"
          : "Choose language"
      }
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md ${
        compact ? "gap-0.5" : "gap-1"
      }`}
    >
      {languages.map((language) => {
        const active =
          language.locale === locale;

        return (
          <Link
            key={language.locale}
            href={getLanguagePath(
              pathname,
              language.locale,
            )}
            hrefLang={language.locale}
            lang={language.locale}
            aria-label={language.label}
            aria-current={
              active ? "page" : undefined
            }
            title={language.label}
            className={`group relative inline-flex items-center justify-center gap-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] ${
              compact
                ? "h-8 min-w-9 px-1.5"
                : "h-9 min-w-[46px] px-2.5"
            } ${
              active
                ? "bg-white text-[#071323] shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
                : "text-white/65 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            <span
              className={`relative shrink-0 overflow-hidden rounded-[2px] ${
                compact
                  ? "h-[14px] w-[20px]"
                  : "h-4 w-[23px]"
              }`}
            >
              <Image
                src={language.flag}
                alt=""
                fill
                sizes="24px"
                className="object-cover"
              />
            </span>

            {!compact && (
              <span className="text-[11px] font-bold uppercase tracking-wide">
                {language.shortLabel}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
