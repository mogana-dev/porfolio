export type Block =
  | { type: "lead"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; variant: "info" | "tip" | "warning"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readingTime: number;
  poster: string;
  blocks: Block[];
};

export const articlesEn: Article[] = [
  {
    slug: "saas-concept-to-production",
    title: "Building Enterprise SaaS from Concept to Production",
    category: "SaaS Engineering",
    summary: "What actually separates a working demo from a SaaS product a business can run its finances on.",
    readingTime: 7,
    poster: "/images/articles/saas-concept-to-production.webp",
    blocks: [
      { type: "lead", text: "The distance between a SaaS demo and a SaaS product a business actually depends on is almost entirely invisible in a screenshot — and almost entirely the work." },
      { type: "h2", text: "The data model comes first, not the UI" },
      { type: "p", text: "Every enterprise SaaS project starts with the same temptation: design the screens first, because that's what stakeholders can react to. The more durable order is the opposite. The data model — how companies, users, permissions and records relate to each other — is the piece that's genuinely expensive to change once real data exists." },
      { type: "h2", text: "Multi-tenancy is a decision, not a detail" },
      { type: "p", text: "Whether a platform serves one company or many changes the database schema, the authentication flow and the billing model from day one. Retrofitting multi-tenancy after a single-tenant build is one of the more expensive migrations in software — far more expensive than the extra planning it takes to decide correctly at the start." },
      { type: "list", items: [
        "Model the core entities (company, user, record) before designing a single screen.",
        "Decide row-level security and access boundaries early — they touch every query later.",
        "Treat billing and plan logic as core infrastructure, not a feature to bolt on later.",
      ] },
      { type: "callout", variant: "tip", title: "The concurrency test", text: "Before shipping any financial or transactional workflow, ask what happens if two users perform the same action at the same instant. If the honest answer is \"I'm not sure,\" that's the next thing to fix, not launch." },
      { type: "h2", text: "Production is a different bar than working" },
      { type: "p", text: "A feature that works in a demo and a feature that survives production are different claims. Production means it handles a payment that fails halfway, a form submitted twice, a report requested with no data yet. None of that shows up in a pitch, and all of it determines whether a business can actually run on the software." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Enterprise SaaS is won in the parts nobody photographs — the data model, the tenancy boundaries, the behavior under concurrent and partial failure. Getting the visible 20% right is necessary but not sufficient; the other 80% is what makes it enterprise-grade." },
    ],
  },
  {
    slug: "accounting-erp-platforms",
    title: "Designing Accounting and ERP Platforms for Real Businesses",
    category: "Enterprise SaaS",
    summary: "Accounting software isn't a features list — it's a trust system. Here's what that changes about how it should be built.",
    readingTime: 6,
    poster: "/images/articles/accounting-erp-platforms.webp",
    blocks: [
      { type: "lead", text: "A bug in most software produces a confused user. A bug in accounting software produces a wrong number on a tax filing. That difference should shape almost every design decision." },
      { type: "h2", text: "Every number needs a paper trail" },
      { type: "p", text: "In an accounting system, no total should exist without a traceable path back to the transactions that produced it. That's not a reporting feature — it's a structural requirement that has to be designed into the data model from the first migration, not added later when an audit asks for it." },
      { type: "h2", text: "Credit notes and payments are not simple CRUD" },
      { type: "p", text: "Applying a credit note, recording a partial payment, or reversing an entry all touch multiple records that need to stay consistent even under concurrent use. These workflows deserve transactional database functions with proper locking, not client-side logic that assumes nothing else is happening at the same time." },
      { type: "table", headers: ["Workflow", "Naive approach", "What holds up"], rows: [
        ["Payment recording", "Update balance directly from the client", "Server-side transaction with row locking"],
        ["Credit note application", "Manual balance adjustment", "Atomic function tying credit to specific invoices"],
        ["Multi-company reporting", "Separate queries merged in the UI", "Company-scoped queries with shared aggregation logic"],
      ] },
      { type: "callout", variant: "warning", title: "The reconciliation trap", text: "If a system makes it possible for the displayed balance and the sum of underlying transactions to ever disagree, it will happen — usually discovered by a customer, not by testing." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Accounting software is judged on whether the numbers can be trusted under pressure — concurrent use, partial failures, audits years later. Building for that bar from the start costs more up front and far less over the life of the product." },
    ],
  },
  {
    slug: "product-engineering-beyond-code",
    title: "Product Engineering Beyond Writing Code",
    category: "Product Thinking",
    summary: "The parts of shipping a product that have nothing to do with syntax, and why they usually matter more.",
    readingTime: 6,
    poster: "/images/articles/product-engineering-beyond-code.webp",
    blocks: [
      { type: "lead", text: "Writing code that works is the easy 60% of shipping a product. The other 40% — deciding what to build, for whom, and whether it actually solved anything — is where most projects actually succeed or fail." },
      { type: "h2", text: "Scoping is a skill, not a formality" },
      { type: "p", text: "The difference between a useful version one and a bloated one usually comes down to a single question asked early and honestly: what's the smallest thing that would actually help one specific person, today? Everything else can wait." },
      { type: "h2", text: "Talking to the people who'll use it beats guessing" },
      { type: "p", text: "Operations background teaches this directly — a warehouse manager can tell you in five minutes what a reporting dashboard needs to show, far faster and more accurately than iterating blind through three design rounds." },
      { type: "list", items: [
        "Define what \"done\" means for version one before writing a line of code, in a sentence a non-technical person could verify.",
        "Ship the narrowest version that's genuinely usable, not the most complete one.",
        "Treat the first week of real usage as more informative than a month of internal review.",
      ] },
      { type: "callout", variant: "info", text: "The most common product failure isn't bad code — it's a well-built answer to the wrong question, discovered only after launch." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Product engineering is the discipline of making sure the code being written is worth writing. That judgment doesn't show up in a diff, but it's usually the difference between a project that ships and one that ships something people actually use." },
    ],
  },
  {
    slug: "rbac-with-supabase",
    title: "Building Secure Role-Based Access with Supabase",
    category: "Backend Architecture",
    summary: "A practical approach to role-based access control that holds up under real audits, not just a demo login.",
    readingTime: 7,
    poster: "/images/articles/rbac-with-supabase.webp",
    blocks: [
      { type: "lead", text: "Role-based access control is easy to fake and genuinely hard to get right. The difference shows up the first time someone tries to access something they shouldn't — and either can't, or can." },
      { type: "h2", text: "Row-level security belongs in the database, not just the UI" },
      { type: "p", text: "Hiding a button for unauthorized users is a UX decision, not a security boundary. Real access control has to be enforced at the database layer — Supabase's row-level security policies mean even a direct API call can't bypass what a hidden button merely discourages." },
      { type: "h2", text: "Roles should map to real jobs, not generic tiers" },
      { type: "p", text: "\"Admin, editor, viewer\" is a convenient default, but it rarely matches how a real business actually splits responsibility. Finance staff, sales staff and warehouse staff need different, specific slices of the same data — modeling that precisely up front avoids a painful permissions rewrite later." },
      { type: "list", items: [
        "Write RLS policies as the source of truth; UI restrictions are a convenience layer on top, not the boundary itself.",
        "Test access control from an unauthorized account's perspective, not just the authorized one.",
        "Log permission denials — they're often the first sign of a policy that's wrong, not just a user doing something unusual.",
      ] },
      { type: "callout", variant: "tip", title: "The audit question", text: "Before launch, ask: if I gave an auditor direct database access, could they see who could see what, and why? If the answer requires reading application code, the access model needs a rework." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Real role-based access control lives in the database's enforcement layer, mapped to how the business actually splits work — not in a set of hidden buttons that happen to match a demo script." },
    ],
  },
  {
    slug: "marketplace-platforms-that-scale",
    title: "Designing Marketplace Platforms That Scale",
    category: "Marketplace Engineering",
    summary: "Why marketplaces succeed or fail on the seller side first, and what that means for how they should be built.",
    readingTime: 6,
    poster: "/images/articles/marketplace-platforms-that-scale.webp",
    blocks: [
      { type: "lead", text: "Every marketplace has two audiences, and almost every marketplace that fails focused on the wrong one first." },
      { type: "h2", text: "Sellers show up before buyers do, or nobody shows up" },
      { type: "p", text: "A marketplace with no listings has nothing for a buyer to find. That means the seller onboarding flow — how easy it is to list something, get paid, and trust the platform — has to be solved before buyer-side polish is worth investing in." },
      { type: "h2", text: "Trust signals matter more than feature count" },
      { type: "p", text: "Buyers on a new marketplace are taking a bigger risk than buyers on an established one. Reviews, verified sellers, clear dispute processes and visible response times do more for conversion than an extra filter option or a fancier search." },
      { type: "list", items: [
        "Design the seller listing flow to take minutes, not an afternoon.",
        "Make trust signals (reviews, verification, response time) visible before the click-through, not after.",
        "Start with one narrow category done well rather than every category done thinly.",
      ] },
      { type: "callout", variant: "info", text: "A marketplace with 50 excellent listings in one category usually converts better than one with 500 mediocre listings across ten." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Marketplace platforms scale from a solved seller-side problem outward — get sellers listing confidently in one category, then widen. Building for both sides equally from day one usually means neither side gets what it actually needs first." },
    ],
  },
  {
    slug: "nextjs-performance-seo",
    title: "Performance and SEO Best Practices in Next.js",
    category: "Web Performance",
    summary: "The Next.js fundamentals that actually move the needle on speed and search visibility — not the trendy shortcuts.",
    readingTime: 6,
    poster: "/images/articles/nextjs-performance-seo.webp",
    blocks: [
      { type: "lead", text: "Most Next.js performance advice online chases marginal gains. A short list of fundamentals accounts for most of the actual difference between a fast site and a slow one." },
      { type: "h2", text: "Static generation is still the fastest option available" },
      { type: "p", text: "Any page that doesn't need per-request personalization should be statically generated at build time. It's the single biggest performance lever in the framework, and it's often skipped simply because dynamic rendering is the path of least resistance." },
      { type: "h2", text: "Images are usually the actual bottleneck" },
      { type: "p", text: "Next.js's built-in image optimization handles responsive sizing and modern formats automatically — the mistake is usually not using it consistently, or serving a 2000px image to a component rendered at 400px wide." },
      { type: "table", headers: ["Lever", "Effort", "Typical impact"], rows: [
        ["Static generation over dynamic rendering", "Low", "High"],
        ["next/image everywhere, no plain <img>", "Low", "High"],
        ["Metadata + structured data per page", "Medium", "High for SEO specifically"],
        ["Bundle-splitting rarely-used components", "Medium", "Moderate"],
      ] },
      { type: "callout", variant: "tip", title: "The metadata check", text: "Every page should have a unique title and description that could stand alone in a search result — if two pages on a site share the same metadata, that's a concrete, fixable SEO gap." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Performance and SEO in Next.js mostly reward doing the fundamentals consistently across every page, rather than chasing an exotic optimization on one page while metadata and image handling are inconsistent everywhere else." },
    ],
  },
  {
    slug: "business-operations-to-software",
    title: "Applying Business Operations Experience to Software Design",
    category: "Product Thinking",
    summary: "What years on a warehouse floor teaches about building software that survives contact with real use.",
    readingTime: 6,
    poster: "/images/articles/business-operations-to-software.webp",
    blocks: [
      { type: "lead", text: "Software built by someone who has only ever built software tends to optimize for the demo. Software informed by real operations experience tends to optimize for the worst day." },
      { type: "h2", text: "Operations fail loudly; software fails softly" },
      { type: "p", text: "A bug in a typical web app means a confused user and a support ticket. A failure in a logistics or warehouse system means a truck sitting idle or a shipment missed — a very different order of consequence that changes how carefully the exception cases get designed." },
      { type: "h2", text: "Reporting exists to answer a question, not to look thorough" },
      { type: "p", text: "Operational reporting has one job: tell someone what to do next. A dashboard with forty metrics and no clear next action is operationally useless no matter how polished it looks — a lesson that applies directly to admin panels and business dashboards in software." },
      { type: "list", items: [
        "Design for the exception case first — the happy path is usually the easy 20%.",
        "Judge a report by the decision it enables, not the data it displays.",
        "Treat a process that depends on one person's memory as a bug, not a workaround.",
      ] },
      { type: "callout", variant: "info", text: "Before shipping a system, ask what it looks like on its worst day — heavy load, a key integration down, a user doing something unexpected — not just what it looks like in a clean demo." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Years spent accountable for what happens when a real system fails builds an instinct that's hard to learn from a tutorial: design for the exception, and judge the software by whether it holds up under pressure, not by how it looks in a walkthrough." },
    ],
  },
  {
    slug: "bilingual-digital-products-europe",
    title: "Building Bilingual Digital Products for European Markets",
    category: "Internationalization",
    summary: "What actually changes when a product needs to work equally well in two languages — and what mechanical translation misses.",
    readingTime: 6,
    poster: "/images/articles/bilingual-digital-products-europe.webp",
    blocks: [
      { type: "lead", text: "A bilingual product is not a monolingual product with a translated copy of every string. Treated that way, it usually shows in the details — SEO, tone, even routing." },
      { type: "h2", text: "Routing and SEO need a real strategy, not an afterthought" },
      { type: "p", text: "Duplicate content across languages without proper hreflang tagging actively hurts search visibility instead of helping it. Every page needs a clear canonical URL, correct alternate-language links, and locale-specific metadata — not just translated body copy sitting under the same tags as the original." },
      { type: "h2", text: "Mechanical translation reads like mechanical translation" },
      { type: "p", text: "Recruiters and clients in French-speaking markets notice tone as much as accuracy. A literal translation of an English sentence structure often reads stiffly in French, even when every word is technically correct — professional French needs its own sentence rhythm, not a word-for-word mirror." },
      { type: "list", items: [
        "Keep technology and brand names untranslated — translating \"React\" or \"Next.js\" helps no one.",
        "Write each language's marketing copy with its own voice, not as a translation pass on the other.",
        "Test the language switcher on every page type, including dynamic ones — it's the first thing a bilingual visitor tries.",
      ] },
      { type: "callout", variant: "tip", title: "The read-aloud test", text: "If a French sentence sounds odd read aloud by a French speaker, it's probably a literal translation rather than a native rewrite — worth fixing even if a translation tool would call it \"correct.\"" },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "A genuinely bilingual product treats each language as a first-class version of the site, not a translated layer over one canonical version — that shows up in routing, SEO, and simply in how natural the copy sounds to a native reader." },
    ],
  },
];

export function getArticles(locale: "en" | "fr") {
  return locale === "fr" ? articlesFr : articlesEn;
}

export function getArticleBySlug(locale: "en" | "fr", slug: string) {
  return getArticles(locale).find((a) => a.slug === slug);
}

import { articlesFr } from "./articles.fr";
