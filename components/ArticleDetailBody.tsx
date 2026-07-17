import { notFound } from "next/navigation";

import ArticleDetailClient from "@/components/ArticleDetailClient";
import { getArticleBySlug } from "@/lib/articles";
import type { Locale } from "@/lib/dictionary";

export default function ArticleDetailBody({
  slug,
  locale = "en",
}: {
  slug: string;
  locale?: Locale;
}) {
  const article = getArticleBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} locale={locale} />;
}
