import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { getLocalizedProjects } from "@/lib/projects";
import { dict, type Locale } from "@/lib/dictionary";

export default function CaseStudiesBody({ locale = "en" }: { locale?: Locale }) {
  const t = dict[locale].caseStudiesPage;
  const featured = getLocalizedProjects(locale).filter((p) => p.hasCaseStudy);

  return (
    <main id="main-content">
      <Navbar locale={locale} />
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <section className="relative py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, idx) => (
            <ProjectCard key={p.slug} project={p} index={idx} locale={locale} />
          ))}
        </div>
      </section>
      <CTASection title={t.ctaTitle} locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
