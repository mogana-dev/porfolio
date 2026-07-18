import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Lock, Boxes } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import SEOJsonLd, { breadcrumbSchema, projectSchema } from "@/components/SEOJsonLd";
import { getProjectBySlug, getLocalizedProject, projects } from "@/lib/projects";
import { dict, withLocale, type Locale } from "@/lib/dictionary";

const statusStyle: Record<string, string> = {
  Live: "text-brand border-brand/40 bg-brand/10",
  "In Progress": "text-amber-400 border-amber-400/40 bg-amber-400/10",
  "Private Demo": "text-dim border-line bg-panel2",
  "Case Study Available": "text-brand border-brand/40 bg-brand/10",
};

export default function CaseStudyDetail({ slug, locale = "en" }: { slug: string; locale?: Locale }) {
  const base = getProjectBySlug(slug);
  if (!base || !base.hasCaseStudy) notFound();
  const project = getLocalizedProject(base, locale);
  const t = dict[locale].caseStudyDetail;
  const common = dict[locale].common;

  const caseStudies = projects.filter((p) => p.hasCaseStudy);
  const currentIndex = caseStudies.findIndex((p) => p.slug === project.slug);
  const next = getLocalizedProject(caseStudies[(currentIndex + 1) % caseStudies.length], locale);

  return (
    <main id="main-content" tabIndex={-1}>
      <SEOJsonLd
        graph={[
          breadcrumbSchema([
            { name: "Home", path: withLocale("/", locale) },
            { name: dict[locale].nav.caseStudies, path: withLocale("/case-studies", locale) },
            { name: project.name, path: withLocale(`/case-studies/${project.slug}`, locale) },
          ]),
          projectSchema(project, locale),
        ]}
      />
      <Navbar locale={locale} />
      <article className="relative pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-brand/20 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10">
          <Link href={withLocale("/case-studies", locale)} className="inline-flex items-center gap-1.5 text-sm text-dim hover:text-mist transition-colors focus-ring rounded">
            <ArrowLeft className="w-4 h-4" />
            {t.backLink}
          </Link>

          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className={`text-[11px] uppercase tracking-wide rounded-full border px-2.5 py-1 ${statusStyle[project.status]}`}>
              {common.statusLabels[project.status]}
            </span>
            <span className="text-[11px] uppercase tracking-wide rounded-full border border-brand/30 bg-brand/10 text-brand px-2.5 py-1">
              {common.categoryLabels[project.category]}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight">{project.name}</h1>
          <p className="mt-4 text-lg text-dim max-w-2xl">{project.overview}</p>

          <div className="mt-8 relative aspect-video rounded-2xl overflow-hidden border border-line bg-white glass">
            <div className="absolute inset-x-0 top-0 h-8 bg-panel2 border-b border-line flex items-center gap-1.5 px-3 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="absolute inset-0 top-8 bg-white p-3">
              <Image
                src={project.image}
                alt={`${project.name} — product screenshot`}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand/50 px-4 py-2 text-sm font-semibold text-brand hover:bg-brand/10 transition-all focus-ring"
              >
                {t.liveDemo}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel2 px-4 py-2 text-sm font-medium text-dim">
                {t.liveDemoPrivate}
              </span>
            )}
            {project.repoStatus === "public" && project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-panel2 px-4 py-2 text-sm font-medium text-mist/85 hover:text-mist transition-all focus-ring"
              >
                {t.repository}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel2 px-4 py-2 text-sm font-medium text-dim">
                <Lock className="w-3.5 h-3.5" />
                {t.privateRepository}
              </span>
            )}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <p className="text-[11px] uppercase tracking-wide text-dim">{t.role}</p>
              <p className="mt-1 text-sm font-medium">{project.role}</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-[11px] uppercase tracking-wide text-dim">{t.technologies}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.map((tc) => <TechBadge key={tc} label={tc} />)}
              </div>
            </div>
          </div>

          <div className="section-divider mt-12" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-lg font-bold">{t.problem}</h2>
              <p className="mt-2 text-sm text-mist/85 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold">{t.solution}</h2>
              <p className="mt-2 text-sm text-mist/85 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {project.approach && (
            <div className="mt-12 glass rounded-2xl p-7 md:p-9">
              <h2 className="font-display text-xl font-bold">{t.approach}</h2>
              <ul className="mt-5 space-y-3">
                {project.approach.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-mist/85">
                    <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-lg font-bold">{t.features}</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.features.map((f) => (
                  <span key={f} className="text-xs rounded-full border border-line bg-panel2 px-3 py-1 text-dim">{f}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold">{t.challenges}</h2>
              <p className="mt-2 text-sm text-mist/85 leading-relaxed">{project.challenges}</p>
            </div>
          </div>

          {project.architecture && (
            <div className="mt-8 glass rounded-2xl p-7 md:p-9">
              <div className="flex items-center gap-2.5">
                <Boxes className="w-5 h-5 text-brand" />
                <h2 className="font-display text-lg font-bold">{t.architecture}</h2>
              </div>
              <p className="mt-3 text-sm text-mist/85 leading-relaxed">{project.architecture}</p>
            </div>
          )}

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-lg font-bold">{t.outcome}</h2>
              <p className="mt-2 text-sm text-mist/85 leading-relaxed">{project.outcome}</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold">{t.futureImprovements}</h2>
              <p className="mt-2 text-sm text-mist/85 leading-relaxed">{project.futureImprovements}</p>
            </div>
          </div>

          {project.lessonsLearned && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-bold">{t.lessonsLearned}</h2>
              <p className="mt-2 text-sm text-mist/85 leading-relaxed">{project.lessonsLearned}</p>
            </div>
          )}

          <div className="mt-14 glass rounded-2xl p-7 md:p-9 text-center">
            <p className="font-display text-xl md:text-2xl font-bold">{t.ctaTitle}</p>
            <p className="mt-3 text-dim max-w-xl mx-auto">{t.ctaBody}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href={withLocale("/contact", locale)} className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm focus-ring">
                {t.contactBtn}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={withLocale(`/case-studies/${next.slug}`, locale)}
                className="inline-flex items-center gap-2 rounded-full border border-brand/50 px-6 py-3 text-sm font-semibold text-brand hover:bg-brand/10 hover:shadow-glow transition-all focus-ring"
              >
                {t.next}: {next.name}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer locale={locale} />
    </main>
  );
}
