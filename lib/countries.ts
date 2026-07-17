import type { Locale } from "@/lib/dictionary";

type Localized<T = string> = {
  en: T;
  fr: T;
};

export type Country = {
  slug: string;
  name: Localized;
  banner: string;
  blurb: Localized;
  languages: Localized;
  intro: Localized;
  marketFit: Localized;
  industries: Localized<string[]>;
  companyTypes: Localized<string[]>;
  visa: Localized;
  whyHireMe: Localized;
};

export const countries: Country[] = [
  {
    slug: "netherlands",
    name: { en: "Netherlands", fr: "Pays-Bas" },
    banner: "/images/countries/netherlands.webp",
    blurb: {
      en: "Amsterdam's SaaS and scale-up scene, plus a logistics sector that matches my operations background.",
      fr: "La scène SaaS et scale-up d'Amsterdam, avec un secteur logistique qui correspond à mon parcours opérationnel.",
    },
    languages: {
      en: "Dutch is the national language, but English is the standard working language across Amsterdam's tech and SaaS scene, so day-to-day collaboration is straightforward. Professional French is a practical add-on for teams with Belgian, French or North African clients and offices.",
      fr: "Le néerlandais est la langue nationale, mais l'anglais est la langue de travail standard dans l'écosystème tech et SaaS d'Amsterdam, ce qui simplifie la collaboration au quotidien. Mon français professionnel est un atout pratique pour les équipes ayant des clients ou bureaux belges, français ou nord-africains.",
    },
    intro: {
      en: "The Netherlands pairs a dense, English-speaking SaaS and scale-up ecosystem with one of Europe's busiest logistics and trade corridors through the Port of Rotterdam and Schiphol. That combination — modern product engineering culture next to real-world supply chain operations — is a natural fit for a background that spans both software and years of hands-on logistics work.",
      fr: "Les Pays-Bas combinent un écosystème SaaS et scale-up dense et anglophone avec l'un des corridors logistiques et commerciaux les plus actifs d'Europe, via le port de Rotterdam et Schiphol. Cette combinaison — culture moderne d'ingénierie produit à côté d'opérations logistiques concrètes — correspond naturellement à un parcours qui allie logiciel et plusieurs années d'expérience terrain en logistique.",
    },
    marketFit: {
      en: "Dutch scale-ups build lean, product-led teams where one engineer is expected to own a problem end to end — exactly how I've worked across ERP, accounting and marketplace platforms. My experience with Next.js, TypeScript, Supabase and PostgreSQL maps directly onto the stack most Amsterdam and Rotterdam SaaS teams already run.",
      fr: "Les scale-ups néerlandaises construisent des équipes lean et orientées produit, où un seul ingénieur est censé porter un problème de bout en bout — exactement la façon dont j'ai travaillé sur des plateformes ERP, comptables et marketplace. Mon expérience avec Next.js, TypeScript, Supabase et PostgreSQL correspond directement à la stack déjà utilisée par la plupart des équipes SaaS d'Amsterdam et Rotterdam.",
    },
    industries: {
      en: ["SaaS & scale-ups", "Logistics & supply chain tech", "Fintech", "E-commerce", "Agri-tech"],
      fr: ["SaaS & scale-ups", "Tech logistique & supply chain", "Fintech", "E-commerce", "Agri-tech"],
    },
    companyTypes: {
      en: ["Series A–C scale-ups", "Product-led SaaS teams", "Logistics & trade platforms", "Remote-first companies"],
      fr: ["Scale-ups Série A–C", "Équipes SaaS orientées produit", "Plateformes logistique & commerce", "Entreprises remote-first"],
    },
    visa: {
      en: "I'm open to relocating to the Netherlands and to sponsorship conversations, including the routes Dutch employers commonly use for skilled non-EU hires such as the highly skilled migrant scheme. I'm also comfortable starting remote while a longer-term move is arranged.",
      fr: "Je suis ouvert à une relocalisation aux Pays-Bas et à des discussions de sponsoring, y compris les dispositifs couramment utilisés par les employeurs néerlandais pour les profils qualifiés hors UE, comme le régime des travailleurs migrants hautement qualifiés. Je suis aussi à l'aise pour démarrer à distance pendant qu'un déménagement est organisé.",
    },
    whyHireMe: {
      en: "A Dutch SaaS or logistics-tech team gets a full stack engineer who has actually run warehouse and distribution operations, not just built software for them — plus the accounting and ERP delivery experience to move fast on finance-heavy products.",
      fr: "Une équipe SaaS ou logtech néerlandaise gagne un ingénieur full stack qui a réellement géré des opérations d'entrepôt et de distribution, pas seulement construit des logiciels pour elles — avec en plus une expérience de livraison ERP et comptable pour avancer vite sur des produits à forte composante financière.",
    },
  },
  {
    slug: "germany",
    name: { en: "Germany", fr: "Allemagne" },
    banner: "/images/countries/germany.webp",
    blurb: {
      en: "Europe's largest economy, with deep enterprise software and Mittelstand demand for reliable engineering.",
      fr: "La plus grande économie d'Europe, avec une forte demande de génie logiciel fiable dans l'entreprise et le Mittelstand.",
    },
    languages: {
      en: "German remains valuable for Mittelstand and public-sector projects, but Berlin, Munich and Hamburg tech teams run largely in English, especially at SaaS and scale-up companies. My professional French is useful for German companies with French or Swiss subsidiaries.",
      fr: "L'allemand reste précieux pour les projets liés au Mittelstand et au secteur public, mais les équipes tech de Berlin, Munich et Hambourg fonctionnent largement en anglais, surtout dans les SaaS et scale-ups. Mon français professionnel est utile pour les entreprises allemandes ayant des filiales françaises ou suisses.",
    },
    intro: {
      en: "Germany combines Europe's largest enterprise software market with a Mittelstand culture built on precision, process and long-term reliability — values that line up closely with a background rooted in logistics and business operations before moving into engineering. Berlin's startup scene adds a second, faster-paced entry point for SaaS and product work.",
      fr: "L'Allemagne combine le plus grand marché de logiciels d'entreprise d'Europe avec une culture du Mittelstand fondée sur la précision, le processus et la fiabilité à long terme — des valeurs proches d'un parcours ancré dans la logistique et les opérations avant de passer à l'ingénierie. La scène startup de Berlin offre un second point d'entrée, plus rapide, pour le SaaS et le produit.",
    },
    marketFit: {
      en: "German enterprise buyers expect accounting, reporting and compliance features to be correct, not approximate — the same standard I held building VAT reporting and credit-note logic for ERP platforms in production. On the Berlin/Munich SaaS side, my Next.js, TypeScript and Supabase experience fits directly into how most modern German product teams ship.",
      fr: "Les acheteurs d'entreprise allemands attendent des fonctionnalités comptables, de reporting et de conformité exactes, pas approximatives — le même niveau d'exigence que j'ai appliqué en construisant la logique de TVA et de notes de crédit pour des plateformes ERP en production. Côté SaaS berlinois ou munichois, mon expérience Next.js, TypeScript et Supabase s'intègre directement à la façon dont la plupart des équipes produit allemandes modernes livrent.",
    },
    industries: {
      en: ["Enterprise software", "Industrial digitalisation", "Fintech", "Automotive tech", "SaaS & scale-ups"],
      fr: ["Logiciels d'entreprise", "Digitalisation industrielle", "Fintech", "Tech automobile", "SaaS & scale-ups"],
    },
    companyTypes: {
      en: ["Mittelstand digitalisation teams", "Berlin/Munich SaaS scale-ups", "Enterprise software vendors", "Fintech & banking tech"],
      fr: ["Équipes de digitalisation du Mittelstand", "Scale-ups SaaS de Berlin/Munich", "Éditeurs de logiciels d'entreprise", "Fintech & banque"],
    },
    visa: {
      en: "I'm open to relocating to Germany and to visa sponsorship, including pathways employers regularly use for skilled non-EU specialists such as the EU Blue Card. A remote start is also workable while relocation logistics are finalised.",
      fr: "Je suis ouvert à une relocalisation en Allemagne et à un sponsoring de visa, y compris les dispositifs régulièrement utilisés par les employeurs pour les spécialistes qualifiés hors UE comme la carte bleue européenne. Un démarrage à distance est également envisageable pendant que la relocalisation se finalise.",
    },
    whyHireMe: {
      en: "German enterprise and Mittelstand teams get an engineer who treats financial accuracy and process discipline as non-negotiable — proven across multiple production accounting and ERP platforms — combined with modern full stack delivery speed.",
      fr: "Les équipes d'entreprise et du Mittelstand allemand gagnent un ingénieur pour qui l'exactitude financière et la rigueur des processus ne sont pas négociables — démontré sur plusieurs plateformes comptables et ERP en production — combiné à une vitesse de livraison full stack moderne.",
    },
  },
  {
    slug: "luxembourg",
    name: { en: "Luxembourg", fr: "Luxembourg" },
    banner: "/images/countries/luxembourg.webp",
    blurb: {
      en: "A financial and logistics hub where French, English and fintech expertise all matter at once.",
      fr: "Un carrefour financier et logistique où le français, l'anglais et l'expertise fintech comptent tous à la fois.",
    },
    languages: {
      en: "Luxembourg's financial and tech sector runs on a mix of French, English and German, often within the same team. My professional fluency in both English and French is a direct fit rather than a bonus, especially for fintech and regtech employers serving French-speaking clients across the region.",
      fr: "Le secteur financier et technologique luxembourgeois fonctionne avec un mélange de français, d'anglais et d'allemand, souvent au sein d'une même équipe. Ma maîtrise professionnelle de l'anglais et du français est un atout direct plutôt qu'un simple plus, en particulier pour les employeurs fintech et regtech servant une clientèle francophone dans la région.",
    },
    intro: {
      en: "Luxembourg punches well above its size as a European financial centre, and hosts major logistics operations — Cargolux and large-scale e-commerce fulfilment among them — that mirror the operational side of my background. It's a market where fintech precision and logistics-grade reliability both matter, and where being genuinely bilingual in English and French is a real advantage.",
      fr: "Luxembourg pèse bien au-delà de sa taille en tant que centre financier européen, et héberge des opérations logistiques majeures — Cargolux et des plateformes e-commerce à grande échelle notamment — qui font écho au volet opérationnel de mon parcours. C'est un marché où la précision fintech et la fiabilité logistique comptent toutes les deux, et où être réellement bilingue anglais-français est un avantage concret.",
    },
    marketFit: {
      en: "Financial platforms in Luxembourg demand the same rigour I've applied building multi-company accounting SaaS, VAT reporting and role-based access control for enterprise clients. That, paired with logistics-industry familiarity, fits both the fintech/regtech and logistics-tech sides of the local market.",
      fr: "Les plateformes financières luxembourgeoises exigent la même rigueur que celle appliquée à la construction de SaaS comptables multi-sociétés, de rapports TVA et de contrôle d'accès par rôle pour des clients d'entreprise. Associée à une bonne connaissance du secteur logistique, cette expérience correspond aussi bien au volet fintech/regtech qu'au volet logtech du marché local.",
    },
    industries: {
      en: ["Fintech & regtech", "Financial services SaaS", "Logistics & e-commerce fulfilment", "Enterprise software"],
      fr: ["Fintech & regtech", "SaaS pour services financiers", "Logistique & e-commerce", "Logiciels d'entreprise"],
    },
    companyTypes: {
      en: ["Financial services SaaS providers", "Regtech & compliance platforms", "Logistics operators", "EU-facing multilingual teams"],
      fr: ["Éditeurs SaaS pour services financiers", "Plateformes regtech & conformité", "Opérateurs logistiques", "Équipes multilingues orientées UE"],
    },
    visa: {
      en: "I'm open to relocating to Luxembourg and to sponsorship discussions for the permits typically used for skilled non-EU professionals in the financial and tech sector, with a remote-start option available while that's arranged.",
      fr: "Je suis ouvert à une relocalisation au Luxembourg et à des discussions de sponsoring pour les permis habituellement utilisés pour les profils qualifiés hors UE dans les secteurs financier et technologique, avec une option de démarrage à distance pendant l'organisation.",
    },
    whyHireMe: {
      en: "Luxembourg fintech and logistics teams get an engineer who is genuinely bilingual in English and French, has shipped production-grade financial software, and understands operational reliability from the inside, not just from a spec document.",
      fr: "Les équipes fintech et logistique luxembourgeoises gagnent un ingénieur réellement bilingue anglais-français, ayant livré des logiciels financiers de qualité production, et qui comprend la fiabilité opérationnelle de l'intérieur, pas seulement à travers un cahier des charges.",
    },
  },
  {
    slug: "ireland",
    name: { en: "Ireland", fr: "Irlande" },
    banner: "/images/countries/ireland.webp",
    blurb: {
      en: "Dublin's global SaaS and enterprise hub, where English fluency removes every language barrier.",
      fr: "Le pôle SaaS et entreprise mondial de Dublin, où la maîtrise de l'anglais élimine toute barrière linguistique.",
    },
    languages: {
      en: "English is the working language for virtually every tech team in Ireland, so there's no language barrier to factor in. My professional French becomes the differentiator instead — useful for Dublin-based teams running EMEA operations that include French-speaking markets.",
      fr: "L'anglais est la langue de travail de pratiquement toutes les équipes tech en Irlande, il n'y a donc aucune barrière linguistique à considérer. Mon français professionnel devient alors l'élément différenciant — utile pour les équipes basées à Dublin qui gèrent des opérations EMEA incluant des marchés francophones.",
    },
    intro: {
      en: "Dublin has become one of the world's densest concentrations of SaaS and enterprise software companies, largely because English removes friction for global teams. That makes Ireland a straightforward, high-opportunity market for a full stack product engineer whose working language is already English, with French as an added EMEA-market asset.",
      fr: "Dublin est devenue l'une des plus fortes concentrations mondiales d'entreprises SaaS et de logiciels d'entreprise, en grande partie parce que l'anglais réduit les frictions pour les équipes internationales. Cela fait de l'Irlande un marché direct et riche en opportunités pour un ingénieur produit full stack dont la langue de travail est déjà l'anglais, avec le français comme atout supplémentaire pour le marché EMEA.",
    },
    marketFit: {
      en: "Dublin's SaaS and enterprise companies run on the same stack I already ship in production — Next.js, TypeScript, Supabase, PostgreSQL — and expect engineers comfortable owning a feature from database schema to deployed UI, which is how I've worked across every project in this portfolio.",
      fr: "Les entreprises SaaS et d'entreprise de Dublin utilisent la même stack que je livre déjà en production — Next.js, TypeScript, Supabase, PostgreSQL — et attendent des ingénieurs à l'aise pour porter une fonctionnalité du schéma de base de données jusqu'à l'interface déployée, ce qui correspond à la façon dont j'ai travaillé sur chaque projet de ce portfolio.",
    },
    industries: {
      en: ["Enterprise SaaS", "Fintech", "AI & automation", "E-commerce", "Global tech hubs"],
      fr: ["SaaS d'entreprise", "Fintech", "IA & automatisation", "E-commerce", "Pôles tech internationaux"],
    },
    companyTypes: {
      en: ["Global SaaS companies with EMEA hubs", "Enterprise software vendors", "Fintech scale-ups", "AI product teams"],
      fr: ["Entreprises SaaS mondiales avec pôle EMEA", "Éditeurs de logiciels d'entreprise", "Scale-ups fintech", "Équipes produit IA"],
    },
    visa: {
      en: "I'm open to relocating to Ireland and to sponsorship conversations, including the employment permit routes Irish employers commonly use for skilled non-EU hires, with the option to start remotely first.",
      fr: "Je suis ouvert à une relocalisation en Irlande et à des discussions de sponsoring, y compris les permis de travail habituellement utilisés par les employeurs irlandais pour les profils qualifiés hors UE, avec la possibilité de démarrer à distance dans un premier temps.",
    },
    whyHireMe: {
      en: "Dublin-based SaaS and enterprise teams get a full stack engineer already fluent in their working language and stack, with the added value of professional French for EMEA-facing products and clients.",
      fr: "Les équipes SaaS et d'entreprise basées à Dublin gagnent un ingénieur full stack déjà à l'aise dans leur langue de travail et leur stack, avec la valeur ajoutée d'un français professionnel pour les produits et clients orientés EMEA.",
    },
  },
  {
    slug: "belgium",
    name: { en: "Belgium", fr: "Belgique" },
    banner: "/images/countries/belgium.webp",
    blurb: {
      en: "The EU's institutional and logistics capital, where French fluency is a direct professional advantage.",
      fr: "La capitale institutionnelle et logistique de l'UE, où la maîtrise du français est un atout professionnel direct.",
    },
    languages: {
      en: "French is one of Belgium's official languages and the working language of much of Brussels and Wallonia's business community, alongside Dutch and English. Being fully professional in both French and English fits Belgium's multilingual business culture directly, without needing to build that fluency from scratch.",
      fr: "Le français est l'une des langues officielles de Belgique et la langue de travail d'une grande partie du monde des affaires bruxellois et wallon, aux côtés du néerlandais et de l'anglais. Être pleinement professionnel en français et en anglais correspond directement à la culture d'entreprise multilingue belge, sans avoir à développer cette aisance de zéro.",
    },
    intro: {
      en: "Belgium sits at the crossroads of EU institutions, a major logistics corridor through the Port of Antwerp and Brussels Airport, and a genuinely French-speaking business culture in Wallonia and Brussels. That combination of language fit and logistics-sector familiarity makes it one of the more natural markets in this list.",
      fr: "La Belgique se situe au carrefour des institutions européennes, d'un important corridor logistique via le port d'Anvers et l'aéroport de Bruxelles, et d'une culture d'entreprise réellement francophone en Wallonie et à Bruxelles. Cette combinaison d'adéquation linguistique et de connaissance du secteur logistique en fait l'un des marchés les plus naturels de cette liste.",
    },
    marketFit: {
      en: "Belgian logistics, e-commerce and enterprise software employers value the same operational grounding that shaped my move into engineering, plus production experience with accounting, VAT and multi-company SaaS platforms that maps well onto Belgium's finance and logistics tech sectors.",
      fr: "Les employeurs belges de la logistique, de l'e-commerce et des logiciels d'entreprise valorisent le même ancrage opérationnel qui a façonné mon passage vers l'ingénierie, ainsi qu'une expérience de production sur des plateformes comptables, TVA et SaaS multi-sociétés qui correspond bien aux secteurs belges de la finance et de la tech logistique.",
    },
    industries: {
      en: ["Logistics & freight tech", "Enterprise software", "Fintech", "E-commerce", "EU institutional tech"],
      fr: ["Tech logistique & fret", "Logiciels d'entreprise", "Fintech", "E-commerce", "Tech institutionnelle UE"],
    },
    companyTypes: {
      en: ["Logistics & freight platforms", "French-speaking enterprise teams", "Fintech & accounting SaaS", "Brussels-based scale-ups"],
      fr: ["Plateformes logistique & fret", "Équipes d'entreprise francophones", "Fintech & SaaS comptable", "Scale-ups basées à Bruxelles"],
    },
    visa: {
      en: "I'm open to relocating to Belgium and to sponsorship discussions for the single permit routes typically used for skilled non-EU professionals, and comfortable starting remotely while relocation is arranged.",
      fr: "Je suis ouvert à une relocalisation en Belgique et à des discussions de sponsoring pour les permis uniques habituellement utilisés pour les profils qualifiés hors UE, et je suis à l'aise pour démarrer à distance pendant l'organisation de la relocalisation.",
    },
    whyHireMe: {
      en: "Belgian teams get an engineer who communicates fluently in French and English without a transition period, backed by real production experience in the accounting and logistics-adjacent software Belgium's economy runs on.",
      fr: "Les équipes belges gagnent un ingénieur qui communique couramment en français et en anglais sans période de transition, appuyé par une réelle expérience de production sur les logiciels comptables et proches de la logistique sur lesquels repose l'économie belge.",
    },
  },
  {
    slug: "switzerland",
    name: { en: "Switzerland", fr: "Suisse" },
    banner: "/images/countries/switzerland.webp",
    blurb: {
      en: "A precision-driven fintech and SaaS market where accuracy in financial software is the baseline expectation.",
      fr: "Un marché fintech et SaaS exigeant la précision, où l'exactitude des logiciels financiers est la norme attendue.",
    },
    languages: {
      en: "Switzerland's tech and financial sector operates across German, French and English, with Geneva and francophone Switzerland running largely in French and Zurich largely in English and German. My English and French fluency gives me a working entry point into both halves of the market.",
      fr: "Le secteur tech et financier suisse fonctionne en allemand, français et anglais, la Suisse romande et Genève travaillant surtout en français, et Zurich surtout en anglais et en allemand. Ma maîtrise de l'anglais et du français me donne un point d'entrée opérationnel dans les deux zones du marché.",
    },
    intro: {
      en: "Switzerland's reputation for precision extends directly into its fintech and enterprise software sector, where financial accuracy, security and reliability aren't negotiable — a standard that matches the discipline required building VAT reporting, credit-note logic and role-based financial access control in production.",
      fr: "La réputation de précision de la Suisse s'étend directement à son secteur fintech et logiciels d'entreprise, où l'exactitude financière, la sécurité et la fiabilité ne sont pas négociables — une exigence proche de la rigueur nécessaire pour construire des rapports TVA, une logique de notes de crédit et un contrôle d'accès financier par rôle en production.",
    },
    marketFit: {
      en: "Zurich and Geneva fintech and SaaS teams expect the same rigour I've applied across multiple enterprise accounting platforms, combined with modern full stack delivery in Next.js, TypeScript, Supabase and PostgreSQL — a stack well represented among Swiss scale-ups.",
      fr: "Les équipes fintech et SaaS de Zurich et Genève attendent la même rigueur que celle appliquée sur plusieurs plateformes comptables d'entreprise, combinée à une livraison full stack moderne en Next.js, TypeScript, Supabase et PostgreSQL — une stack bien représentée parmi les scale-ups suisses.",
    },
    industries: {
      en: ["Fintech & banking tech", "Enterprise SaaS", "Precision manufacturing tech", "AI & automation"],
      fr: ["Fintech & tech bancaire", "SaaS d'entreprise", "Tech industrielle de précision", "IA & automatisation"],
    },
    companyTypes: {
      en: ["Fintech & banking software teams", "Zurich/Geneva SaaS scale-ups", "Enterprise software vendors", "French-speaking Swiss teams"],
      fr: ["Équipes logicielles fintech & bancaires", "Scale-ups SaaS de Zurich/Genève", "Éditeurs de logiciels d'entreprise", "Équipes suisses francophones"],
    },
    visa: {
      en: "I'm open to relocating to Switzerland and to sponsorship discussions. I understand Swiss work-permit quotas for non-EU/EFTA hires are more selective than in the EU, and I'm realistic about timelines while remaining genuinely interested in the right opportunity.",
      fr: "Je suis ouvert à une relocalisation en Suisse et à des discussions de sponsoring. J'ai conscience que les quotas de permis de travail suisses pour les profils hors UE/AELE sont plus sélectifs qu'au sein de l'UE, et je reste réaliste sur les délais tout en étant réellement intéressé par la bonne opportunité.",
    },
    whyHireMe: {
      en: "Swiss fintech and SaaS teams get an engineer who already treats financial precision as the default, is fluent in both French and English, and has delivered production accounting software to the standard Swiss clients expect.",
      fr: "Les équipes fintech et SaaS suisses gagnent un ingénieur pour qui la précision financière est déjà la norme, parfaitement à l'aise en français comme en anglais, et ayant livré des logiciels comptables en production au niveau attendu par la clientèle suisse.",
    },
  },
  {
    slug: "france",
    name: { en: "France", fr: "France" },
    banner: "/images/countries/france.webp",
    blurb: {
      en: "Paris's growing SaaS scene, approached in native-level French with no cultural or language ramp-up needed.",
      fr: "La scène SaaS grandissante de Paris, abordée en français natif, sans période d'adaptation culturelle ou linguistique.",
    },
    languages: {
      en: "French is a working language for me, not a learned one — a direct result of Mauritius's own French-speaking heritage — which removes the usual ramp-up period for joining a French team. English fluency covers the international side of French SaaS companies expanding across Europe.",
      fr: "Le français est pour moi une langue de travail, pas une langue apprise — un lien direct avec l'héritage francophone de Maurice — ce qui supprime la période d'adaptation habituelle pour intégrer une équipe française. La maîtrise de l'anglais couvre le volet international des entreprises SaaS françaises qui se développent à travers l'Europe.",
    },
    intro: {
      en: "France's SaaS and tech sector, centred on Paris and its French Tech ecosystem, is a market where language and culture are already familiar ground given Mauritius's French-speaking heritage — meaning the focus can stay entirely on the engineering and product work rather than adaptation.",
      fr: "Le secteur SaaS et tech français, centré sur Paris et son écosystème French Tech, est un marché où la langue et la culture sont déjà un terrain familier grâce à l'héritage francophone de Maurice — ce qui permet de se concentrer entièrement sur le travail d'ingénierie et de produit plutôt que sur l'adaptation.",
    },
    marketFit: {
      en: "French SaaS and enterprise companies building in Next.js, TypeScript and Supabase-style stacks get an engineer who can operate natively in French with clients and stakeholders, while shipping the same production-grade ERP, accounting and marketplace features already delivered across this portfolio.",
      fr: "Les entreprises SaaS et d'entreprise françaises construisant sur des stacks Next.js, TypeScript et de type Supabase gagnent un ingénieur capable d'échanger nativement en français avec clients et parties prenantes, tout en livrant les mêmes fonctionnalités ERP, comptables et marketplace de qualité production déjà présentes dans ce portfolio.",
    },
    industries: {
      en: ["SaaS & French Tech scale-ups", "Fintech", "Enterprise software", "E-commerce", "AI integration"],
      fr: ["SaaS & scale-ups French Tech", "Fintech", "Logiciels d'entreprise", "E-commerce", "Intégration IA"],
    },
    companyTypes: {
      en: ["Paris-based SaaS scale-ups", "French enterprise software vendors", "Fintech & accounting platforms", "French-speaking remote-first teams"],
      fr: ["Scale-ups SaaS basées à Paris", "Éditeurs français de logiciels d'entreprise", "Plateformes fintech & comptables", "Équipes francophones remote-first"],
    },
    visa: {
      en: "I'm open to relocating to France and to sponsorship discussions, including talent-focused routes French employers use for skilled non-EU professionals, with a remote start available while relocation is organised.",
      fr: "Je suis ouvert à une relocalisation en France et à des discussions de sponsoring, y compris les dispositifs orientés talents utilisés par les employeurs français pour les profils qualifiés hors UE, avec un démarrage à distance possible pendant l'organisation de la relocalisation.",
    },
    whyHireMe: {
      en: "French teams get a full stack engineer who is natively comfortable in French, understands enterprise software and accounting logic in production, and needs no cultural or language onboarding to contribute from day one.",
      fr: "Les équipes françaises gagnent un ingénieur full stack pleinement à l'aise en français, qui comprend les logiciels d'entreprise et la logique comptable en production, et n'a besoin d'aucune adaptation culturelle ou linguistique pour contribuer dès le premier jour.",
    },
  },
  {
    slug: "portugal",
    name: { en: "Portugal", fr: "Portugal" },
    banner: "/images/countries/portugal.webp",
    blurb: {
      en: "Lisbon and Porto's fast-growing SaaS scene, with immigration policy genuinely built for international tech talent.",
      fr: "La scène SaaS en forte croissance de Lisbonne et Porto, avec une politique migratoire réellement pensée pour les talents tech internationaux.",
    },
    languages: {
      en: "English is the standard working language across Lisbon and Porto's tech and SaaS companies, so there's no language barrier to entry. Professional French adds value for Portuguese companies serving French-speaking markets in Europe and Africa.",
      fr: "L'anglais est la langue de travail standard dans les entreprises tech et SaaS de Lisbonne et Porto, il n'y a donc aucune barrière linguistique à l'entrée. Le français professionnel apporte une valeur ajoutée pour les entreprises portugaises servant des marchés francophones en Europe et en Afrique.",
    },
    intro: {
      en: "Portugal has built one of Europe's most genuinely welcoming environments for international tech talent, with a fast-growing SaaS and startup scene in Lisbon and Porto and immigration policy designed specifically around attracting skilled tech professionals rather than working against them.",
      fr: "Le Portugal a bâti l'un des environnements les plus réellement accueillants d'Europe pour les talents tech internationaux, avec une scène SaaS et startup en forte croissance à Lisbonne et Porto, et une politique migratoire pensée spécifiquement pour attirer des professionnels qualifiés plutôt que pour les freiner.",
    },
    marketFit: {
      en: "Lisbon's SaaS and startup teams tend to be lean and fast-moving, valuing engineers who can own a feature end to end — the same working style I've used delivering ERP, accounting and marketplace platforms independently, on a stack (Next.js, TypeScript, Supabase) that's already common in the Portuguese startup scene.",
      fr: "Les équipes SaaS et startup de Lisbonne sont généralement lean et rapides, et valorisent les ingénieurs capables de porter une fonctionnalité de bout en bout — le même mode de travail que j'ai utilisé pour livrer des plateformes ERP, comptables et marketplace de façon autonome, sur une stack (Next.js, TypeScript, Supabase) déjà courante dans l'écosystème startup portugais.",
    },
    industries: {
      en: ["SaaS & startups", "Fintech", "E-commerce", "Tourism tech", "AI & automation"],
      fr: ["SaaS & startups", "Fintech", "E-commerce", "Tech du tourisme", "IA & automatisation"],
    },
    companyTypes: {
      en: ["Lisbon/Porto startups", "Remote-first SaaS teams", "Fintech scale-ups", "Tourism & hospitality tech"],
      fr: ["Startups de Lisbonne/Porto", "Équipes SaaS remote-first", "Scale-ups fintech", "Tech du tourisme & de l'hôtellerie"],
    },
    visa: {
      en: "I'm genuinely open to relocating to Portugal, including through the visa routes Portugal has built specifically for tech professionals, and to sponsorship discussions with employers who prefer a more traditional route.",
      fr: "Je suis réellement ouvert à une relocalisation au Portugal, y compris via les dispositifs de visa que le pays a mis en place spécifiquement pour les professionnels de la tech, ainsi qu'à des discussions de sponsoring avec les employeurs préférant une voie plus classique.",
    },
    whyHireMe: {
      en: "Portuguese SaaS and startup teams get a full stack engineer used to owning problems independently, with hospitality and tourism-operations background that adds direct insight for Portugal's tourism-tech sector specifically.",
      fr: "Les équipes SaaS et startup portugaises gagnent un ingénieur full stack habitué à porter des problèmes de façon autonome, avec une expérience en hôtellerie et opérations touristiques qui apporte un éclairage direct, notamment pour le secteur de la tech du tourisme au Portugal.",
    },
  },
  {
    slug: "norway",
    name: { en: "Norway", fr: "Norvège" },
    banner: "/images/countries/norway.webp",
    blurb: {
      en: "A maritime and energy tech market where logistics-sector experience directly overlaps with software needs.",
      fr: "Un marché de la tech maritime et énergétique où l'expérience du secteur logistique recoupe directement les besoins logiciels.",
    },
    languages: {
      en: "English is widely used as a working language across Norwegian tech and maritime companies, making it straightforward to contribute without Norwegian fluency. Professional French is a secondary asset for Norwegian companies with francophone shipping or trade partners.",
      fr: "L'anglais est largement utilisé comme langue de travail dans les entreprises tech et maritimes norvégiennes, ce qui permet de contribuer facilement sans maîtriser le norvégien. Le français professionnel est un atout secondaire pour les entreprises norvégiennes ayant des partenaires maritimes ou commerciaux francophones.",
    },
    intro: {
      en: "Norway's economy runs heavily on maritime and energy operations, and its tech sector reflects that — strong demand for software that supports shipping, logistics and industrial digitalisation, which lines up closely with hands-on warehouse and distribution experience prior to software.",
      fr: "L'économie norvégienne repose fortement sur les opérations maritimes et énergétiques, et son secteur technologique reflète cette réalité — une forte demande pour des logiciels soutenant le transport maritime, la logistique et la digitalisation industrielle, ce qui correspond étroitement à une expérience concrète en entrepôt et distribution avant le passage au logiciel.",
    },
    marketFit: {
      en: "Norwegian maritime-tech and logistics platforms need engineers who understand real operational constraints, not just abstract requirements — a gap my logistics and warehousing background fills directly, backed by production experience building marketplace, SaaS and enterprise systems with Next.js, TypeScript and PostgreSQL.",
      fr: "Les plateformes maritimes et logistiques norvégiennes ont besoin d'ingénieurs qui comprennent les contraintes opérationnelles réelles, pas seulement des exigences abstraites — un écart que mon expérience en logistique et gestion d'entrepôt comble directement, appuyée par une expérience de production sur des systèmes marketplace, SaaS et d'entreprise avec Next.js, TypeScript et PostgreSQL.",
    },
    industries: {
      en: ["Maritime & shipping tech", "Energy sector digitalisation", "Fintech", "SaaS & enterprise software"],
      fr: ["Tech maritime & transport", "Digitalisation du secteur énergétique", "Fintech", "SaaS & logiciels d'entreprise"],
    },
    companyTypes: {
      en: ["Maritime & shipping tech companies", "Energy sector software teams", "Oslo-based SaaS scale-ups", "Logistics platforms"],
      fr: ["Entreprises tech maritime & transport", "Équipes logicielles du secteur énergétique", "Scale-ups SaaS basées à Oslo", "Plateformes logistiques"],
    },
    visa: {
      en: "I'm open to relocating to Norway and to sponsorship discussions for the skilled worker permit routes Norwegian employers typically use, with a remote-start option available while that process is underway.",
      fr: "Je suis ouvert à une relocalisation en Norvège et à des discussions de sponsoring pour les permis de travailleur qualifié habituellement utilisés par les employeurs norvégiens, avec une option de démarrage à distance pendant que la procédure est en cours.",
    },
    whyHireMe: {
      en: "Norwegian maritime and logistics-tech teams get an engineer with genuine operational grounding in warehousing and distribution, not just software theory, paired with modern full stack delivery experience.",
      fr: "Les équipes tech maritime et logistique norvégiennes gagnent un ingénieur avec un véritable ancrage opérationnel en entreposage et distribution, pas seulement une théorie logicielle, associé à une expérience de livraison full stack moderne.",
    },
  },
  {
    slug: "sweden",
    name: { en: "Sweden", fr: "Suède" },
    banner: "/images/countries/sweden.webp",
    blurb: {
      en: "The Nordic SaaS capital, home to some of Europe's most product-driven engineering cultures.",
      fr: "La capitale nordique du SaaS, siège de certaines des cultures d'ingénierie les plus orientées produit d'Europe.",
    },
    languages: {
      en: "Swedish tech companies operate almost entirely in English, from Stockholm's SaaS unicorns to smaller scale-ups, so there's no language barrier to factor in. Professional French is an added asset for Swedish companies expanding into French-speaking European markets.",
      fr: "Les entreprises tech suédoises fonctionnent presque entièrement en anglais, des licornes SaaS de Stockholm aux plus petites scale-ups, il n'y a donc aucune barrière linguistique à considérer. Le français professionnel est un atout supplémentaire pour les entreprises suédoises se développant vers des marchés européens francophones.",
    },
    intro: {
      en: "Stockholm has produced a disproportionate share of Europe's SaaS success stories, built on flat, product-led engineering cultures where individual ownership and clean execution matter more than hierarchy — an environment that suits someone used to owning a project end to end.",
      fr: "Stockholm a produit une part disproportionnée des succès SaaS européens, construits sur des cultures d'ingénierie plates et orientées produit, où l'autonomie individuelle et l'exécution propre comptent plus que la hiérarchie — un environnement adapté à quelqu'un habitué à porter un projet de bout en bout.",
    },
    marketFit: {
      en: "Swedish SaaS teams expect engineers to move fast on a modern stack without heavy process overhead — Next.js, TypeScript and Supabase/PostgreSQL are already the kind of tooling I ship in production, and the ownership model matches how I've delivered every project in this portfolio independently.",
      fr: "Les équipes SaaS suédoises attendent des ingénieurs capables d'avancer vite sur une stack moderne sans lourdeur de process — Next.js, TypeScript et Supabase/PostgreSQL font déjà partie des outils que je livre en production, et le modèle d'autonomie correspond à la façon dont j'ai livré chaque projet de ce portfolio de manière indépendante.",
    },
    industries: {
      en: ["SaaS unicorns & scale-ups", "Fintech", "E-commerce", "AI & automation", "Enterprise software"],
      fr: ["Licornes SaaS & scale-ups", "Fintech", "E-commerce", "IA & automatisation", "Logiciels d'entreprise"],
    },
    companyTypes: {
      en: ["Stockholm SaaS scale-ups", "Fintech & payments platforms", "Product-led engineering teams", "E-commerce platforms"],
      fr: ["Scale-ups SaaS de Stockholm", "Plateformes fintech & paiement", "Équipes d'ingénierie orientées produit", "Plateformes e-commerce"],
    },
    visa: {
      en: "I'm open to relocating to Sweden and to sponsorship discussions for the work permit routes Swedish employers typically use for skilled non-EU hires, with a remote-start option while relocation is arranged.",
      fr: "Je suis ouvert à une relocalisation en Suède et à des discussions de sponsoring pour les permis de travail habituellement utilisés par les employeurs suédois pour les profils qualifiés hors UE, avec une option de démarrage à distance pendant l'organisation de la relocalisation.",
    },
    whyHireMe: {
      en: "Swedish SaaS teams get a full stack engineer already comfortable with flat, ownership-driven teams, fluent in the stack most Stockholm scale-ups run, and used to shipping without heavy process around them.",
      fr: "Les équipes SaaS suédoises gagnent un ingénieur full stack déjà à l'aise avec des équipes plates et autonomes, maîtrisant la stack utilisée par la plupart des scale-ups de Stockholm, et habitué à livrer sans lourdeur de process.",
    },
  },
  {
    slug: "denmark",
    name: { en: "Denmark", fr: "Danemark" },
    banner: "/images/countries/denmark.webp",
    blurb: {
      en: "Home to Maersk and a major logistics-tech sector, alongside a growing Copenhagen SaaS scene.",
      fr: "Siège de Maersk et d'un important secteur logtech, aux côtés d'une scène SaaS grandissante à Copenhague.",
    },
    languages: {
      en: "English is the effective working language of Danish tech and logistics companies, including at global shipping firms headquartered in Copenhagen, so there's no language barrier to entry. Professional French adds value for Danish companies operating in French-speaking trade markets.",
      fr: "L'anglais est la langue de travail effective des entreprises tech et logistiques danoises, y compris au sein des groupes maritimes mondiaux basés à Copenhague, il n'y a donc aucune barrière linguistique à l'entrée. Le français professionnel apporte une valeur ajoutée pour les entreprises danoises opérant sur des marchés commerciaux francophones.",
    },
    intro: {
      en: "Denmark is home to some of the world's largest shipping and logistics operations alongside a growing Copenhagen SaaS and green-tech scene, making it a market where operational experience in logistics carries real weight next to modern product engineering skills.",
      fr: "Le Danemark abrite certaines des plus grandes opérations maritimes et logistiques au monde, aux côtés d'une scène SaaS et green-tech grandissante à Copenhague, ce qui en fait un marché où l'expérience opérationnelle en logistique pèse autant que les compétences modernes d'ingénierie produit.",
    },
    marketFit: {
      en: "Danish logistics-tech and SaaS employers value engineers who understand supply chain operations from the inside — exactly what years in warehousing and distribution provided before this software career — combined with production experience in Next.js, TypeScript and PostgreSQL-based systems.",
      fr: "Les employeurs danois de la logtech et du SaaS valorisent les ingénieurs qui comprennent les opérations de la chaîne d'approvisionnement de l'intérieur — exactement ce que des années en entreposage et distribution ont apporté avant cette carrière logicielle — combiné à une expérience de production sur des systèmes basés sur Next.js, TypeScript et PostgreSQL.",
    },
    industries: {
      en: ["Shipping & logistics tech", "Green tech", "SaaS & scale-ups", "Fintech"],
      fr: ["Tech maritime & logistique", "Green tech", "SaaS & scale-ups", "Fintech"],
    },
    companyTypes: {
      en: ["Shipping & logistics-tech companies", "Copenhagen SaaS scale-ups", "Green-tech & sustainability platforms", "Enterprise software teams"],
      fr: ["Entreprises tech maritime & logistique", "Scale-ups SaaS de Copenhague", "Plateformes green-tech & durabilité", "Équipes logicielles d'entreprise"],
    },
    visa: {
      en: "I'm open to relocating to Denmark and to sponsorship discussions for the positive-list and skilled-worker permit routes Danish employers commonly use, with a remote-start option while relocation is finalised.",
      fr: "Je suis ouvert à une relocalisation au Danemark et à des discussions de sponsoring pour les dispositifs de liste positive et de permis de travailleur qualifié couramment utilisés par les employeurs danois, avec une option de démarrage à distance pendant la finalisation de la relocalisation.",
    },
    whyHireMe: {
      en: "Danish logistics-tech and SaaS teams get an engineer with genuine warehousing and distribution experience behind the software, plus a production track record across ERP, marketplace and accounting platforms.",
      fr: "Les équipes logtech et SaaS danoises gagnent un ingénieur avec une réelle expérience en entreposage et distribution derrière le logiciel, ainsi qu'un historique de production sur des plateformes ERP, marketplace et comptables.",
    },
  },
  {
    slug: "australia",
    name: { en: "Australia", fr: "Australie" },
    banner: "/images/countries/australia.webp",
    blurb: {
      en: "A large English-speaking SaaS and enterprise market with strong Commonwealth and Indian Ocean ties to Mauritius.",
      fr: "Un vaste marché SaaS et d'entreprise anglophone, avec des liens forts avec Maurice via le Commonwealth et l'océan Indien.",
    },
    languages: {
      en: "English is the sole working language across Australian tech, which removes any language consideration entirely. Professional French remains a differentiator for Australian companies with operations in francophone Pacific or African markets.",
      fr: "L'anglais est l'unique langue de travail dans la tech australienne, ce qui élimine toute considération linguistique. Le français professionnel reste un élément différenciant pour les entreprises australiennes ayant des activités sur des marchés francophones du Pacifique ou d'Afrique.",
    },
    intro: {
      en: "Australia offers a large, mature SaaS and enterprise software market in Sydney and Melbourne, with Commonwealth and Indian Ocean regional ties that make it a culturally familiar move from Mauritius, English fluency included from day one.",
      fr: "L'Australie offre un marché SaaS et logiciels d'entreprise vaste et mature à Sydney et Melbourne, avec des liens régionaux via le Commonwealth et l'océan Indien qui en font une destination culturellement familière depuis Maurice, maîtrise de l'anglais incluse dès le premier jour.",
    },
    marketFit: {
      en: "Australian SaaS and enterprise teams building on Next.js, TypeScript and Supabase/PostgreSQL-style stacks get an engineer with a proven record shipping ERP, accounting, marketplace and AI-integrated platforms independently, ready to contribute without a stack-adjustment period.",
      fr: "Les équipes SaaS et d'entreprise australiennes construisant sur des stacks de type Next.js, TypeScript et Supabase/PostgreSQL gagnent un ingénieur au parcours prouvé, ayant livré de façon autonome des plateformes ERP, comptables, marketplace et intégrant l'IA, prêt à contribuer sans période d'adaptation technique.",
    },
    industries: {
      en: ["Enterprise SaaS", "Fintech", "AI & automation", "E-commerce & marketplaces", "Mining & logistics tech"],
      fr: ["SaaS d'entreprise", "Fintech", "IA & automatisation", "E-commerce & marketplaces", "Tech minière & logistique"],
    },
    companyTypes: {
      en: ["Sydney/Melbourne SaaS scale-ups", "Enterprise software vendors", "Fintech platforms", "AI product teams"],
      fr: ["Scale-ups SaaS de Sydney/Melbourne", "Éditeurs de logiciels d'entreprise", "Plateformes fintech", "Équipes produit IA"],
    },
    visa: {
      en: "I'm open to relocating to Australia and to sponsorship discussions for the skilled visa routes Australian employers use for international hires, while recognising the distance means remote collaboration or a hybrid arrangement may suit an initial stage best.",
      fr: "Je suis ouvert à une relocalisation en Australie et à des discussions de sponsoring pour les visas qualifiés utilisés par les employeurs australiens pour les recrutements internationaux, tout en reconnaissant que la distance peut rendre une collaboration à distance ou un format hybride plus adapté dans un premier temps.",
    },
    whyHireMe: {
      en: "Australian SaaS and enterprise teams get a full stack engineer fluent in English from day one, with a Commonwealth-region cultural fit and a delivery record across ERP, marketplace and AI-powered platforms.",
      fr: "Les équipes SaaS et d'entreprise australiennes gagnent un ingénieur full stack parfaitement à l'aise en anglais dès le premier jour, avec une proximité culturelle liée au Commonwealth et un historique de livraison sur des plateformes ERP, marketplace et intégrant l'IA.",
    },
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getLocalizedCountryName(country: Country, locale: Locale): string {
  return country.name[locale];
}

export function getLocalizedCountryBlurb(country: Country, locale: Locale): string {
  return country.blurb[locale];
}

export function getLocalizedCountry(country: Country, locale: Locale = "en") {
  return {
    slug: country.slug,
    name: country.name[locale],
    banner: country.banner,
    blurb: country.blurb[locale],
    languages: country.languages[locale],
    intro: country.intro[locale],
    marketFit: country.marketFit[locale],
    industries: country.industries[locale],
    companyTypes: country.companyTypes[locale],
    visa: country.visa[locale],
    whyHireMe: country.whyHireMe[locale],
  };
}
