import type { Metadata } from "next";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { getProjectBySlug, getLocalizedProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.filter((p) => p.hasCaseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const base = getProjectBySlug(slug);
  if (!base) return {};
  const project = getLocalizedProject(base, "fr");

  return {
    title: `${project.name} \u2014 \u00c9tude de Cas | Mogana.dev`,
    description: project.overview,
    alternates: {
      canonical: `/fr/case-studies/${project.slug}`,
      languages: {
        en: `/case-studies/${project.slug}`,
        fr: `/fr/case-studies/${project.slug}`,
        "x-default": `/case-studies/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.name} | \u00c9tude de Cas Mogana.dev`,
      description: project.overview,
      url: `https://mogana.dev/fr/case-studies/${project.slug}`,
      locale: "fr_FR",
      images: [{ url: project.image, width: 1600, height: 900, alt: `${project.name} \u2014 capture d'\u00e9cran` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | \u00c9tude de Cas Mogana.dev`,
      description: project.overview,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPageFr({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseStudyDetail slug={slug} locale="fr" />;
}
