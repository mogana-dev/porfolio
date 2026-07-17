import type { Metadata } from "next";
import ArticleDetailBody from "@/components/ArticleDetailBody";
import { getArticles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return getArticles("fr").map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug("fr", slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Articles Mogana.dev`,
    description: article.summary,
    alternates: {
      canonical: `/fr/articles/${article.slug}`,
      languages: {
        en: `/articles/${article.slug}`,
        fr: `/fr/articles/${article.slug}`,
        "x-default": `/articles/${article.slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://mogana.dev/fr/articles/${article.slug}`,
      type: "article",
      siteName: "Mogana.dev",
      locale: "fr_FR",
      images: [
        {
          url: article.poster,
          width: 1600,
          height: 900,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.poster],
    },
  };
}

export default async function ArticlePageFr({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ArticleDetailBody slug={slug} locale="fr" />;
}
