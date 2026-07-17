"use client";

import { usePathname } from "next/navigation";
import WhatsAppFloat from "./WhatsAppFloat";
import SocialRail from "./SocialRail";
import type { Locale } from "@/lib/dictionary";

export default function GlobalWidgets() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname.startsWith("/fr") ? "fr" : "en";

  return (
    <>
      <SocialRail />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
