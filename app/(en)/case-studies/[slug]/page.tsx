import type { Metadata } from "next";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { getProjectBySlug, getLocalizedProject, projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

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
  const project = getLocalizedProject(base, "en");

  return {
    title: `${project.name} Case Study | Mogana.dev`,
    description: project.overview,
    alternates: {
      canonical: `/case-studies/${project.slug}`,
      languages: {
        en: `/case-studies/${project.slug}`,
        fr: `/fr/case-studies/${project.slug}`,
        "x-default": `/case-studies/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.name} | Mogana.dev Case Study`,
      description: project.overview,
      url: `${SITE_URL}/case-studies/${project.slug}`,
      images: [{ url: project.image, width: 1600, height: 900, alt: `${project.name} — product screenshot` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Mogana.dev Case Study`,
      description: project.overview,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseStudyDetail slug={slug} locale="en" />;
}
