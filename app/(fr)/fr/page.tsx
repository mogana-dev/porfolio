import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyMogana from "@/components/WhyMogana";
import Milestones from "@/components/Milestones";
import ArticlesSection from "@/components/ArticlesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { dict } from "@/lib/dictionary";

export default function HomeFr() {
  const locale = "fr" as const;
  const t = dict[locale].homeFinalCta;
  return (
    <main id="main-content" tabIndex={-1}>
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <StatsGrid locale={locale} />
      <FeaturedProjects locale={locale} />
      <WhyMogana locale={locale} />
      <Milestones locale="fr" />
      <ArticlesSection locale={locale} />
      <CTASection title={t.title} primaryLabel={t.primary} locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
