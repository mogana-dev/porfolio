import type { Locale } from "@/lib/dictionary";

export type ProjectCategory =
  | "Enterprise SaaS"
  | "Marketplace"
  | "E-Commerce"
  | "Corporate Website"
  | "Personal Brand";

export type ProjectStatus =
  | "Live"
  | "In Progress"
  | "Private Demo"
  | "Case Study Available";

export type HomeProject = {
  slug: string;
  name: string;
  category: string;
  overview: string;
  highlights: string[];
  tech: string[];
  image: string;
  websiteUrl: string;
};

type Localized<T = string> = {
  en: T;
  fr: T;
};

type ProjectContent = {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  hasCaseStudy: boolean;
  overview: Localized;
  highlights: Localized<string[]>;
  tech: string[];
  image: string;
  websiteUrl: string;
  demoUrl: string | null;
  repoStatus: "public" | "private";
  repoUrl?: string;
  role: Localized;
  problem: Localized;
  solution: Localized;
  approach: Localized<string[]>;
  features: Localized<string[]>;
  challenges: Localized;
  architecture?: Localized;
  outcome: Localized;
  futureImprovements: Localized;
  lessonsLearned?: Localized;
};

const CATEGORY_LABELS: Record<ProjectCategory, Localized> = {
  "Enterprise SaaS": { en: "Enterprise SaaS", fr: "SaaS d'Entreprise" },
  Marketplace: { en: "Marketplace", fr: "Marketplace" },
  "E-Commerce": { en: "E-Commerce", fr: "E-Commerce" },
  "Corporate Website": { en: "Corporate Website", fr: "Site Web d'Entreprise" },
  "Personal Brand": { en: "Personal Brand", fr: "Marque Personnelle" },
};

const CATEGORY_ORDER: ProjectCategory[] = [
  "Enterprise SaaS",
  "Marketplace",
  "E-Commerce",
  "Corporate Website",
  "Personal Brand",
];

const projectsContent: ProjectContent[] = [
  {
    slug: "ram-pottery-hub",
    name: "Ram Pottery Hub",
    category: "Enterprise SaaS",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Enterprise ERP and accounting platform developed for Ram Pottery Ltd, covering invoicing, quotations, credit notes, inventory, customers, VAT reporting and real-time business analytics.",
      fr: "Plateforme ERP et comptable développée pour Ram Pottery Ltd, couvrant factures, devis, notes de crédit, stock, clients, TVA et analyses métier en temps réel.",
    },
    highlights: {
      en: ["Complete financial workflows", "Production-ready ERP platform"],
      fr: ["Workflows financiers complets", "Plateforme ERP prête pour la production"],
    },
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "REST API"],
    image: "/images/projects/rampotteryhub-com.png",
    websiteUrl: "https://rampotteryhub.com",
    demoUrl: "https://rampotteryhub.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Ram Pottery Ltd was running invoicing, quotations, credit notes, stock and VAT reporting across disconnected spreadsheets and manual processes, making it hard to get an accurate, real-time view of the business.",
      fr: "Ram Pottery Ltd gérait factures, devis, notes de crédit, stock et TVA sur des feuilles de calcul déconnectées et des processus manuels, rendant difficile une vue précise et en temps réel de l'activité.",
    },
    solution: {
      en: "A dedicated ERP and accounting platform was built to centralise invoicing, quotations, credit notes, inventory, customer records and VAT reporting in one system, with real-time dashboards for day-to-day decisions.",
      fr: "Une plateforme ERP et comptable dédiée a été conçue pour centraliser factures, devis, notes de crédit, stock, clients et TVA dans un seul système, avec des tableaux de bord en temps réel pour les décisions quotidiennes.",
    },
    approach: {
      en: [
        "Mapped existing invoicing, quotation and VAT workflows before writing any code",
        "Designed a relational schema covering customers, products, stock and tax rules",
        "Built the platform in incremental modules, validated against real business documents at each stage",
      ],
      fr: [
        "Cartographie des workflows existants de facturation, devis et TVA avant toute ligne de code",
        "Conception d'un schéma relationnel couvrant clients, produits, stock et règles fiscales",
        "Construction par modules incrémentaux, validés à chaque étape avec de vrais documents métier",
      ],
    },
    features: {
      en: ["Invoicing & quotations", "Credit notes", "Inventory management", "VAT reporting", "Real-time analytics"],
      fr: ["Factures & devis", "Notes de crédit", "Gestion des stocks", "Rapports TVA", "Analyses en temps réel"],
    },
    challenges: {
      en: "Keeping VAT calculations and credit-note logic accurate across edge cases such as partial refunds and mixed-rate invoices required careful, tested business logic rather than generic accounting shortcuts.",
      fr: "Garantir l'exactitude des calculs de TVA et de la logique des notes de crédit sur des cas particuliers (remboursements partiels, factures à taux mixtes) a demandé une logique métier rigoureuse et testée.",
    },
    architecture: {
      en: "Built on Next.js with a Supabase/PostgreSQL backend, using REST APIs to separate the accounting logic from the presentation layer and keep reporting queries performant as data volume grows.",
      fr: "Construit sur Next.js avec un backend Supabase/PostgreSQL, via des API REST séparant la logique comptable de la couche de présentation pour garder des rapports performants à mesure que le volume de données augmente.",
    },
    outcome: {
      en: "The platform is in active production use at Ram Pottery Ltd, handling day-to-day invoicing, stock and VAT reporting for the business.",
      fr: "La plateforme est utilisée en production chez Ram Pottery Ltd pour la facturation, le stock et les rapports TVA au quotidien.",
    },
    futureImprovements: {
      en: "Planned next steps include deeper analytics and automated VAT filing exports.",
      fr: "Les prochaines étapes prévues incluent des analyses plus poussées et des exports automatisés pour la déclaration de TVA.",
    },
    lessonsLearned: {
      en: "Enterprise accounting software lives or dies on getting the edge cases right — the unglamorous validation work mattered more than any single feature.",
      fr: "Un logiciel comptable d'entreprise se joue sur les cas particuliers — le travail de validation, peu visible, a compté plus que n'importe quelle fonctionnalité isolée.",
    },
  },
  {
    slug: "ram-pottery-mu",
    name: "Ram Pottery",
    category: "E-Commerce",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Premium e-commerce platform showcasing handcrafted Mauritian pottery, with product collections, responsive shopping, cart management and a streamlined customer experience.",
      fr: "Plateforme e-commerce premium présentant la poterie artisanale mauricienne, avec collections, panier, navigation responsive et parcours d'achat simplifié.",
    },
    highlights: {
      en: ["Mobile-first shopping", "Craft-focused presentation"],
      fr: ["Achat mobile-first", "Présentation axée sur l'artisanat"],
    },
    tech: ["Next.js", "React", "TypeScript", "Supabase", "E-Commerce"],
    image: "/images/projects/rampottery-mu.png",
    websiteUrl: "https://rampottery.mu",
    demoUrl: "https://rampottery.mu",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Ram Pottery needed an online storefront that could present handcrafted Mauritian pottery with the same care as the physical showroom, without a heavy off-the-shelf e-commerce platform.",
      fr: "Ram Pottery avait besoin d'une boutique en ligne capable de présenter la poterie artisanale mauricienne avec le même soin que la salle d'exposition physique, sans recourir à une plateforme e-commerce lourde et générique.",
    },
    solution: {
      en: "A custom, mobile-first e-commerce platform was built with product collections, cart management and a streamlined checkout tailored to how the brand sells its pieces.",
      fr: "Une plateforme e-commerce sur mesure, mobile-first, a été construite avec collections de produits, gestion du panier et un parcours d'achat simplifié, adapté à la façon dont la marque vend ses pièces.",
    },
    approach: {
      en: [
        "Audited the existing product catalogue and photography to design a presentation-first layout",
        "Built responsive product and collection pages optimised for mobile shopping",
        "Implemented cart and checkout flows with minimal friction for first-time buyers",
      ],
      fr: [
        "Audit du catalogue produit et des visuels existants pour concevoir une mise en page orientée présentation",
        "Création de pages produits et collections responsives optimisées pour l'achat mobile",
        "Mise en place d'un panier et d'un tunnel d'achat à friction minimale pour les nouveaux acheteurs",
      ],
    },
    features: {
      en: ["Product collections", "Responsive shopping", "Cart management", "Mobile-first design", "Streamlined checkout"],
      fr: ["Collections de produits", "Achat responsive", "Gestion du panier", "Design mobile-first", "Tunnel d'achat simplifié"],
    },
    challenges: {
      en: "Balancing rich product photography with fast load times on mobile connections required careful image optimisation throughout the catalogue.",
      fr: "Concilier des visuels produits riches et des temps de chargement rapides sur mobile a demandé une optimisation d'images soignée sur tout le catalogue.",
    },
    architecture: {
      en: "Built with Next.js and React on the frontend and Supabase for product, order and customer data, keeping the storefront fast while data stays structured for future growth.",
      fr: "Construit avec Next.js et React côté frontend et Supabase pour les données produits, commandes et clients, gardant la boutique rapide tout en structurant les données pour la croissance future.",
    },
    outcome: {
      en: "The storefront is live and used by Ram Pottery to sell directly to customers online.",
      fr: "La boutique est en ligne et utilisée par Ram Pottery pour vendre directement aux clients.",
    },
    futureImprovements: {
      en: "Future work includes expanding payment options and adding customer accounts with order history.",
      fr: "Les améliorations prévues incluent l'ajout de moyens de paiement supplémentaires et de comptes clients avec historique de commandes.",
    },
    lessonsLearned: {
      en: "For a craft-focused brand, presentation quality drives conversion as much as checkout speed.",
      fr: "Pour une marque artisanale, la qualité de présentation influence la conversion autant que la rapidité du tunnel d'achat.",
    },
  },
  {
    slug: "travel-holiday-mauritius",
    name: "Travel Holiday Mauritius",
    category: "Corporate Website",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Tourism website promoting airport transfers, guided tours and holiday experiences across Mauritius, designed for fast enquiries, WhatsApp bookings and international visitors.",
      fr: "Site touristique proposant transferts aéroport, excursions guidées et expériences à Maurice, conçu pour les demandes rapides et réservations WhatsApp.",
    },
    highlights: {
      en: ["Fast booking enquiries", "International traveller experience"],
      fr: ["Demandes de réservation rapides", "Expérience pour voyageurs internationaux"],
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Responsive Design"],
    image: "/images/projects/Travel-Holiday-Mauritius.png",
    websiteUrl: "https://travelholidaymauritius.com",
    demoUrl: "https://travelholidaymauritius.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Travel Holiday Mauritius needed a fast way for international visitors to enquire about airport transfers, guided tours and holiday experiences without a slow, form-heavy booking process.",
      fr: "Travel Holiday Mauritius avait besoin d'un moyen rapide pour les visiteurs internationaux de se renseigner sur les transferts aéroport, excursions guidées et séjours, sans un processus de réservation lourd.",
    },
    solution: {
      en: "A tourism website was built around fast enquiries and direct WhatsApp bookings, giving visitors a low-friction path from browsing to contacting the business.",
      fr: "Un site touristique a été conçu autour de demandes rapides et de réservations WhatsApp directes, offrant aux visiteurs un parcours simple de la navigation au contact.",
    },
    approach: {
      en: [
        "Researched what international travellers look for first (transfers, tours, pricing)",
        "Designed clear service pages with direct WhatsApp and enquiry CTAs",
        "Optimised for search visibility and mobile browsing from abroad",
      ],
      fr: [
        "Étude de ce que recherchent en premier les voyageurs internationaux (transferts, excursions, tarifs)",
        "Conception de pages de services claires avec appels à l'action WhatsApp et demande directe",
        "Optimisation pour la visibilité sur les moteurs de recherche et la navigation mobile depuis l'étranger",
      ],
    },
    features: {
      en: ["Airport transfer booking", "Guided tour listings", "WhatsApp enquiries", "SEO-optimised pages", "Responsive design"],
      fr: ["Réservation de transferts aéroport", "Liste d'excursions guidées", "Demandes via WhatsApp", "Pages optimisées SEO", "Design responsive"],
    },
    challenges: {
      en: "International visitors arrive with very different levels of familiarity with Mauritius, so the content had to stay clear and self-explanatory without local assumptions.",
      fr: "Les visiteurs internationaux arrivent avec des niveaux de connaissance très variables de Maurice, le contenu devait donc rester clair et explicite sans présupposés locaux.",
    },
    architecture: {
      en: "Built with Next.js and TypeScript, using static generation and Tailwind CSS for fast, SEO-friendly pages that load quickly on mobile.",
      fr: "Construit avec Next.js et TypeScript, en génération statique avec Tailwind CSS pour des pages rapides et optimisées SEO sur mobile.",
    },
    outcome: {
      en: "The site is live and actively used to generate transfer and tour enquiries from international travellers.",
      fr: "Le site est en ligne et génère activement des demandes de transferts et d'excursions de la part de voyageurs internationaux.",
    },
    futureImprovements: {
      en: "Planned improvements include an online booking calendar and multi-language expansion beyond English and French.",
      fr: "Les améliorations prévues incluent un calendrier de réservation en ligne et une extension multilingue au-delà de l'anglais et du français.",
    },
    lessonsLearned: {
      en: "For tourism enquiries, removing steps between interest and contact matters more than adding features.",
      fr: "Pour les demandes touristiques, réduire les étapes entre l'intérêt et le contact compte plus que l'ajout de fonctionnalités.",
    },
  },
  {
    slug: "zadaz-in",
    name: "Zadaz.in",
    category: "Corporate Website",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "International import and export website connecting businesses between India and Mauritius through structured services, product categories and quotation requests.",
      fr: "Site d'import-export reliant les entreprises de l'Inde et de Maurice avec services structurés, catégories de produits et demandes de devis.",
    },
    highlights: {
      en: ["India–Mauritius trade focus", "Clear B2B enquiry flow"],
      fr: ["Commerce Inde–Maurice", "Parcours de demande B2B clair"],
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    image: "/images/projects/Zadaz-in.png",
    websiteUrl: "https://zadaz.in",
    demoUrl: "https://zadaz.in",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Zadaz.in needed to present structured import/export services between India and Mauritius to B2B buyers who wanted clear categories and a straightforward way to request quotations.",
      fr: "Zadaz.in avait besoin de présenter des services d'import-export structurés entre l'Inde et Maurice à des acheteurs B2B recherchant des catégories claires et une demande de devis simple.",
    },
    solution: {
      en: "A trade website was built around structured product categories and a direct quotation-request flow, positioning the business clearly to both Indian and Mauritian buyers.",
      fr: "Un site de commerce a été conçu autour de catégories de produits structurées et d'un parcours de demande de devis direct, positionnant clairement l'entreprise auprès des acheteurs indiens et mauriciens.",
    },
    approach: {
      en: [
        "Organised services and products into clear, navigable categories",
        "Built a structured enquiry form for quotation requests",
        "Optimised content for search terms used by international B2B buyers",
      ],
      fr: [
        "Organisation des services et produits en catégories claires et navigables",
        "Construction d'un formulaire structuré pour les demandes de devis",
        "Optimisation du contenu pour les termes de recherche utilisés par les acheteurs B2B internationaux",
      ],
    },
    features: {
      en: ["Product categories", "Quotation requests", "B2B enquiry flow", "SEO-optimised content", "Bilingual-ready structure"],
      fr: ["Catégories de produits", "Demandes de devis", "Parcours de demande B2B", "Contenu optimisé SEO", "Structure prête pour le bilinguisme"],
    },
    challenges: {
      en: "Presenting a wide range of import/export categories without overwhelming visitors required careful information architecture.",
      fr: "Présenter une large gamme de catégories d'import-export sans submerger les visiteurs a demandé une architecture de l'information soignée.",
    },
    architecture: {
      en: "Built with Next.js, React and TypeScript with Tailwind CSS, structured for fast static delivery and straightforward SEO indexing.",
      fr: "Construit avec Next.js, React et TypeScript avec Tailwind CSS, structuré pour une livraison statique rapide et une indexation SEO simple.",
    },
    outcome: {
      en: "The site is live and used to generate quotation requests from businesses trading between India and Mauritius.",
      fr: "Le site est en ligne et génère des demandes de devis d'entreprises commerçant entre l'Inde et Maurice.",
    },
    futureImprovements: {
      en: "Planned work includes a searchable product catalogue and account-based quotation tracking.",
      fr: "Les travaux prévus incluent un catalogue produit consultable et un suivi des devis par compte.",
    },
    lessonsLearned: {
      en: "For cross-border B2B trade, clarity of categorisation builds more trust than visual polish alone.",
      fr: "Pour le commerce B2B transfrontalier, la clarté de la catégorisation renforce la confiance davantage que le seul soin visuel.",
    },
  },
  {
    slug: "atelier-de-mea",
    name: "Atelier de Mea",
    category: "E-Commerce",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Elegant online boutique for handmade Mauritian fashion accessories, allowing customers to explore collections and purchase locally crafted products.",
      fr: "Boutique élégante d'accessoires de mode mauriciens faits main, permettant de découvrir les collections et d'acheter des créations locales.",
    },
    highlights: {
      en: ["Elegant product discovery", "Locally crafted collections"],
      fr: ["Découverte élégante des produits", "Collections artisanales locales"],
    },
    tech: ["Next.js", "React", "TypeScript", "Supabase", "E-Commerce"],
    image: "/images/projects/atelierdemea.png",
    websiteUrl: "https://atelierdemea.com",
    demoUrl: "https://atelierdemea.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Atelier de Mea needed an online boutique that matched the elegance of its handmade fashion accessories, letting customers discover collections and buy locally crafted pieces directly.",
      fr: "Atelier de Mea avait besoin d'une boutique en ligne à la hauteur de l'élégance de ses accessoires de mode faits main, permettant aux clientes de découvrir les collections et d'acheter directement.",
    },
    solution: {
      en: "An elegant e-commerce boutique was built with a strong focus on product discovery, showcasing handmade collections in a way that reflects the brand's craft positioning.",
      fr: "Une boutique e-commerce élégante a été construite avec un fort accent sur la découverte de produits, mettant en valeur les collections faites main dans l'esprit artisanal de la marque.",
    },
    approach: {
      en: [
        "Designed a visual identity around the brand's handmade, boutique positioning",
        "Built collection and product pages optimised for discovery and browsing",
        "Implemented a simple, trustworthy purchase flow for first-time buyers",
      ],
      fr: [
        "Conception d'une identité visuelle reflétant le positionnement artisanal et boutique de la marque",
        "Création de pages collections et produits optimisées pour la découverte",
        "Mise en place d'un parcours d'achat simple et rassurant pour les nouvelles clientes",
      ],
    },
    features: {
      en: ["Collection discovery", "Product galleries", "Secure checkout", "Locally crafted product focus", "Mobile-friendly browsing"],
      fr: ["Découverte de collections", "Galeries produits", "Paiement sécurisé", "Mise en avant des produits artisanaux locaux", "Navigation mobile fluide"],
    },
    challenges: {
      en: "Handmade products vary piece to piece, so the catalogue structure needed to communicate uniqueness without complicating the buying decision.",
      fr: "Les produits faits main varient d'une pièce à l'autre, la structure du catalogue devait donc communiquer cette unicité sans complexifier la décision d'achat.",
    },
    architecture: {
      en: "Built with Next.js, React and TypeScript, backed by Supabase for product and order data behind a lightweight, image-focused frontend.",
      fr: "Construit avec Next.js, React et TypeScript, adossé à Supabase pour les données produits et commandes derrière un frontend léger, axé sur l'image.",
    },
    outcome: {
      en: "The boutique is live, giving Atelier de Mea a direct online sales channel for its handmade collections.",
      fr: "La boutique est en ligne, offrant à Atelier de Mea un canal de vente direct pour ses collections faites main.",
    },
    futureImprovements: {
      en: "Planned additions include customer wishlists and limited-edition drop notifications.",
      fr: "Les ajouts prévus incluent des listes de souhaits et des notifications pour les éditions limitées.",
    },
    lessonsLearned: {
      en: "For handcrafted goods, product photography and story carry as much weight as the checkout experience.",
      fr: "Pour des produits artisanaux, la photographie produit et le récit pèsent autant que l'expérience de paiement.",
    },
  },
  {
    slug: "bluewave-saas",
    name: "BlueWave Accounting",
    category: "Enterprise SaaS",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Multi-company accounting and management platform featuring dashboards, invoicing, expenses, VAT reporting, customer records and role-based user administration.",
      fr: "Plateforme comptable multi-sociétés avec tableaux de bord, factures, dépenses, TVA, clients et administration des utilisateurs par rôle.",
    },
    highlights: {
      en: ["Multi-company architecture", "Advanced financial dashboards"],
      fr: ["Architecture multi-sociétés", "Tableaux de bord financiers avancés"],
    },
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Authentication"],
    image: "/images/projects/bluewavesaas.png",
    websiteUrl: "https://bluewavetechnologies.site",
    demoUrl: "https://bluewavetechnologies.site",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "BlueWave needed a single platform to manage accounting across multiple companies, instead of maintaining separate spreadsheets and tools per entity.",
      fr: "BlueWave avait besoin d'une seule plateforme pour gérer la comptabilité de plusieurs sociétés, au lieu de maintenir des feuilles de calcul et outils séparés par entité.",
    },
    solution: {
      en: "A multi-company accounting SaaS was built with dashboards, invoicing, expenses, VAT reporting and role-based user administration, all scoped per company from one login.",
      fr: "Un SaaS comptable multi-sociétés a été construit avec tableaux de bord, factures, dépenses, TVA et administration des utilisateurs par rôle, le tout cloisonné par société depuis une seule connexion.",
    },
    approach: {
      en: [
        "Designed a multi-tenant data model so each company's records stay isolated",
        "Built role-based access control for finance, admin and viewer-level users",
        "Layered dashboards and VAT reporting on top of the core accounting data",
      ],
      fr: [
        "Conception d'un modèle de données multi-tenant isolant les enregistrements de chaque société",
        "Mise en place d'un contrôle d'accès par rôle pour utilisateurs finance, admin et lecture seule",
        "Ajout de tableaux de bord et de rapports TVA au-dessus des données comptables principales",
      ],
    },
    features: {
      en: ["Multi-company dashboards", "Invoicing & expenses", "VAT reporting", "Customer records", "Role-based administration"],
      fr: ["Tableaux de bord multi-sociétés", "Factures & dépenses", "Rapports TVA", "Fiches clients", "Administration par rôle"],
    },
    challenges: {
      en: "Keeping data strictly isolated between companies while still allowing a single user to switch between entities required careful access-control design.",
      fr: "Garantir une isolation stricte des données entre sociétés tout en permettant à un même utilisateur de basculer entre entités a demandé une conception rigoureuse du contrôle d'accès.",
    },
    architecture: {
      en: "Built on Next.js and TypeScript with Supabase and PostgreSQL, using row-level scoping per company and authenticated APIs for all financial operations.",
      fr: "Construit sur Next.js et TypeScript avec Supabase et PostgreSQL, avec un cloisonnement par société au niveau des lignes et des API authentifiées pour toutes les opérations financières.",
    },
    outcome: {
      en: "The platform is in production use, giving BlueWave a consolidated view of accounting across its companies.",
      fr: "La plateforme est utilisée en production, offrant à BlueWave une vue consolidée de la comptabilité de ses sociétés.",
    },
    futureImprovements: {
      en: "Planned work includes consolidated cross-company reporting and automated bank reconciliation.",
      fr: "Les travaux prévus incluent des rapports consolidés multi-sociétés et un rapprochement bancaire automatisé.",
    },
    lessonsLearned: {
      en: "Multi-tenant access control is easiest to get right when it's designed before the first feature, not retrofitted afterwards.",
      fr: "Le contrôle d'accès multi-tenant est plus simple à réussir lorsqu'il est conçu avant la première fonctionnalité, plutôt qu'ajouté après coup.",
    },
  },
  {
    slug: "dan-and-shi",
    name: "Dan & Shi",
    category: "Corporate Website",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Professional pest control website presenting residential and commercial services, online enquiries and direct WhatsApp communication across Mauritius.",
      fr: "Site professionnel de lutte antiparasitaire présentant les services résidentiels et commerciaux, demandes en ligne et contact WhatsApp.",
    },
    highlights: {
      en: ["Clear service presentation", "Lead-focused contact journey"],
      fr: ["Présentation claire des services", "Parcours de contact orienté conversion"],
    },
    tech: ["Next.js", "React", "TypeScript", "SEO", "Responsive Design"],
    image: "/images/projects/danandshi.png",
    websiteUrl: "https://danandshi.com",
    demoUrl: "https://danandshi.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Dan & Shi needed a professional web presence that could turn residential and commercial pest-control enquiries into direct contact, especially via WhatsApp.",
      fr: "Dan & Shi avait besoin d'une présence web professionnelle capable de transformer les demandes de lutte antiparasitaire résidentielles et commerciales en contact direct, notamment via WhatsApp.",
    },
    solution: {
      en: "A service-focused website was built presenting residential and commercial offerings clearly, with online enquiries and direct WhatsApp contact built into every page.",
      fr: "Un site orienté services a été construit présentant clairement les offres résidentielles et commerciales, avec demandes en ligne et contact WhatsApp direct sur chaque page.",
    },
    approach: {
      en: [
        "Structured services by residential vs commercial need for quick self-identification",
        "Placed WhatsApp and enquiry CTAs consistently across every page",
        "Optimised for local search across Mauritius",
      ],
      fr: [
        "Structuration des services par besoin résidentiel ou commercial pour une identification rapide",
        "Placement cohérent des appels à l'action WhatsApp et demande sur chaque page",
        "Optimisation pour la recherche locale à Maurice",
      ],
    },
    features: {
      en: ["Residential & commercial services", "Online enquiries", "WhatsApp contact", "Local SEO", "Responsive design"],
      fr: ["Services résidentiels & commerciaux", "Demandes en ligne", "Contact WhatsApp", "SEO local", "Design responsive"],
    },
    challenges: {
      en: "Pest control enquiries are often urgent, so the site needed to minimise the number of steps between landing on a page and reaching the business.",
      fr: "Les demandes de lutte antiparasitaire sont souvent urgentes, le site devait donc réduire au minimum les étapes entre l'arrivée sur une page et le contact avec l'entreprise.",
    },
    architecture: {
      en: "Built with Next.js, React and TypeScript, statically generated for fast load times and strong local SEO performance.",
      fr: "Construit avec Next.js, React et TypeScript, en génération statique pour des temps de chargement rapides et un bon référencement local.",
    },
    outcome: {
      en: "The site is live and actively generating service enquiries for Dan & Shi.",
      fr: "Le site est en ligne et génère activement des demandes de service pour Dan & Shi.",
    },
    futureImprovements: {
      en: "Planned improvements include an online scheduling tool for service visits.",
      fr: "Les améliorations prévues incluent un outil de planification en ligne pour les visites de service.",
    },
    lessonsLearned: {
      en: "For urgent, local services, a fast path to WhatsApp outperforms a polished but longer contact form.",
      fr: "Pour des services locaux urgents, un accès rapide à WhatsApp l'emporte sur un formulaire de contact soigné mais plus long.",
    },
  },
  {
    slug: "gpwccu",
    name: "GPWCCU",
    category: "Enterprise SaaS",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Secure cooperative platform handling members, savings, withdrawals, loans, repayments, receipts, cash-book operations and detailed reporting.",
      fr: "Plateforme coopérative sécurisée gérant membres, épargnes, retraits, prêts, remboursements, reçus, caisse et rapports détaillés.",
    },
    highlights: {
      en: ["Complete member lifecycle", "Secure financial administration"],
      fr: ["Cycle complet des membres", "Administration financière sécurisée"],
    },
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    image: "/images/projects/gpwccu.png",
    websiteUrl: "https://gpwccu.com",
    demoUrl: "https://gpwccu.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "GPWCCU needed a secure system to manage members, savings, withdrawals, loans and repayments that had previously relied on manual cash-book processes.",
      fr: "GPWCCU avait besoin d'un système sécurisé pour gérer membres, épargnes, retraits, prêts et remboursements, jusque-là tenus par des processus manuels de caisse.",
    },
    solution: {
      en: "A cooperative management platform was built covering the full member lifecycle — savings, withdrawals, loans, repayments, receipts and cash-book operations — with detailed reporting.",
      fr: "Une plateforme de gestion coopérative a été construite couvrant tout le cycle de vie des membres — épargnes, retraits, prêts, remboursements, reçus et caisse — avec des rapports détaillés.",
    },
    approach: {
      en: [
        "Mapped the cooperative's existing savings, loan and repayment processes in detail",
        "Modelled member accounts, transactions and loan schedules in a secure database",
        "Built cash-book and receipt workflows that mirror how staff actually process transactions",
      ],
      fr: [
        "Cartographie détaillée des processus existants d'épargne, de prêt et de remboursement",
        "Modélisation des comptes membres, transactions et échéanciers de prêt dans une base sécurisée",
        "Construction des workflows de caisse et de reçus reflétant le traitement réel des transactions par le personnel",
      ],
    },
    features: {
      en: ["Member management", "Savings & withdrawals", "Loans & repayments", "Digital receipts", "Cash-book reporting"],
      fr: ["Gestion des membres", "Épargnes & retraits", "Prêts & remboursements", "Reçus numériques", "Rapports de caisse"],
    },
    challenges: {
      en: "Financial cooperative data is sensitive and transaction-heavy, so accuracy and auditability had to be built in from the first schema decision.",
      fr: "Les données d'une coopérative financière sont sensibles et transactionnelles, l'exactitude et la traçabilité ont donc été intégrées dès les premières décisions de schéma.",
    },
    architecture: {
      en: "Built with Next.js, React, TypeScript, Supabase and PostgreSQL, with structured transaction records supporting detailed financial reporting.",
      fr: "Construit avec Next.js, React, TypeScript, Supabase et PostgreSQL, avec des enregistrements de transactions structurés permettant des rapports financiers détaillés.",
    },
    outcome: {
      en: "The platform is in production use, handling member savings, loans and cash-book operations for the cooperative.",
      fr: "La plateforme est utilisée en production pour gérer l'épargne, les prêts et les opérations de caisse des membres de la coopérative.",
    },
    futureImprovements: {
      en: "Planned work includes member self-service statements and automated loan repayment reminders.",
      fr: "Les travaux prévus incluent des relevés en libre-service pour les membres et des rappels automatisés de remboursement de prêt.",
    },
    lessonsLearned: {
      en: "In financial systems, an accurate audit trail is as important as the transaction itself.",
      fr: "Dans les systèmes financiers, une piste d'audit fiable est aussi importante que la transaction elle-même.",
    },
  },
  {
    slug: "heaven-seeds-academy",
    name: "Heaven Seeds Academy",
    category: "Corporate Website",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Modern educational website for an inclusive international academy, featuring programmes, admissions, galleries and multilingual information.",
      fr: "Site éducatif moderne pour une académie internationale inclusive, avec programmes, admissions, galeries et contenu multilingue.",
    },
    highlights: {
      en: ["Inclusive education presentation", "Clear admissions journey"],
      fr: ["Présentation de l'éducation inclusive", "Parcours d'admission clair"],
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "CMS"],
    image: "/images/projects/heavenseedsacademy.png",
    websiteUrl: "https://heavenseedacademy.com",
    demoUrl: "https://heavenseedacademy.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Heaven Seeds Academy needed a modern website to present its programmes and admissions process clearly to an international, multilingual audience of families.",
      fr: "Heaven Seeds Academy avait besoin d'un site moderne présentant clairement ses programmes et son processus d'admission à un public international et multilingue de familles.",
    },
    solution: {
      en: "An educational website was built featuring programmes, admissions, galleries and multilingual information, designed to feel inclusive and welcoming to prospective families.",
      fr: "Un site éducatif a été construit avec programmes, admissions, galeries et contenu multilingue, conçu pour être inclusif et accueillant pour les familles.",
    },
    approach: {
      en: [
        "Structured programme and admissions content around the questions parents ask first",
        "Built a gallery system to showcase the academy's environment and activities",
        "Prepared the content structure for multilingual delivery",
      ],
      fr: [
        "Structuration du contenu des programmes et admissions autour des premières questions des parents",
        "Création d'un système de galerie pour présenter l'environnement et les activités de l'académie",
        "Préparation de la structure de contenu pour une diffusion multilingue",
      ],
    },
    features: {
      en: ["Programme pages", "Admissions journey", "Photo galleries", "Multilingual content", "SEO-optimised structure"],
      fr: ["Pages programmes", "Parcours d'admission", "Galeries photo", "Contenu multilingue", "Structure optimisée SEO"],
    },
    challenges: {
      en: "Presenting an inclusive, international academy meant the content and imagery had to work equally well for families from very different cultural backgrounds.",
      fr: "Présenter une académie internationale et inclusive impliquait que le contenu et les visuels fonctionnent aussi bien pour des familles d'horizons culturels très différents.",
    },
    architecture: {
      en: "Built with Next.js and TypeScript with Tailwind CSS and a lightweight CMS-driven content structure for easy updates.",
      fr: "Construit avec Next.js et TypeScript avec Tailwind CSS et une structure de contenu pilotée par un CMS léger pour des mises à jour faciles.",
    },
    outcome: {
      en: "The site is live and used by the academy to present programmes and guide families through admissions.",
      fr: "Le site est en ligne et utilisé par l'académie pour présenter ses programmes et guider les familles dans l'admission.",
    },
    futureImprovements: {
      en: "Planned improvements include an online admissions application form and expanded language support.",
      fr: "Les améliorations prévues incluent un formulaire de candidature en ligne et un support linguistique élargi.",
    },
    lessonsLearned: {
      en: "For education websites, admissions clarity matters more to parents than visual flourish.",
      fr: "Pour les sites éducatifs, la clarté du processus d'admission compte plus pour les parents que les effets visuels.",
    },
  },
  {
    slug: "himalay-rental-tours",
    name: "Himalay Rental Tours",
    category: "Corporate Website",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Tourism and vehicle-rental platform offering car rentals, excursions, airport transfers and lagoon experiences with direct booking enquiries.",
      fr: "Plateforme touristique proposant locations de voitures, excursions, transferts aéroport et sorties lagon avec demandes de réservation directes.",
    },
    highlights: {
      en: ["Multiple tourism services", "WhatsApp booking integration"],
      fr: ["Services touristiques multiples", "Réservation via WhatsApp"],
    },
    tech: ["Next.js", "React", "TypeScript", "SEO", "Responsive Design"],
    image: "/images/projects/himalay-rental-tours.png",
    websiteUrl: "https://himalayrentaltours.com",
    demoUrl: "https://himalayrentaltours.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Himalay Rental Tours needed one platform to present car rentals, excursions, airport transfers and lagoon experiences without visitors bouncing between separate booking channels.",
      fr: "Himalay Rental Tours avait besoin d'une seule plateforme pour présenter locations de voitures, excursions, transferts aéroport et sorties lagon, sans que les visiteurs jonglent entre plusieurs canaux de réservation.",
    },
    solution: {
      en: "A tourism and vehicle-rental platform was built covering all service lines in one place, with direct booking enquiries routed through WhatsApp.",
      fr: "Une plateforme touristique et de location de véhicules a été construite regroupant toutes les offres, avec des demandes de réservation directes via WhatsApp.",
    },
    approach: {
      en: [
        "Grouped car rental, excursions and transfers under one consistent booking flow",
        "Built service pages tailored to what each traveller type needs to decide fast",
        "Integrated WhatsApp as the primary booking channel",
      ],
      fr: [
        "Regroupement de la location de voitures, des excursions et des transferts sous un parcours de réservation cohérent",
        "Création de pages de services adaptées à une décision rapide selon le type de voyageur",
        "Intégration de WhatsApp comme canal de réservation principal",
      ],
    },
    features: {
      en: ["Car rental listings", "Excursions & transfers", "Lagoon experiences", "WhatsApp booking", "Responsive design"],
      fr: ["Location de voitures", "Excursions & transferts", "Sorties lagon", "Réservation WhatsApp", "Design responsive"],
    },
    challenges: {
      en: "With several distinct service lines on one site, navigation had to stay simple enough that visitors could still find and book quickly.",
      fr: "Avec plusieurs lignes de services distinctes sur un même site, la navigation devait rester assez simple pour que les visiteurs trouvent et réservent rapidement.",
    },
    architecture: {
      en: "Built with Next.js, React and TypeScript, statically generated for fast performance across all service pages.",
      fr: "Construit avec Next.js, React et TypeScript, en génération statique pour une performance rapide sur toutes les pages de services.",
    },
    outcome: {
      en: "The platform is live and generating booking enquiries across car rentals, excursions and transfers.",
      fr: "La plateforme est en ligne et génère des demandes de réservation pour les locations, excursions et transferts.",
    },
    futureImprovements: {
      en: "Planned work includes real-time vehicle availability and online payment for bookings.",
      fr: "Les travaux prévus incluent la disponibilité des véhicules en temps réel et le paiement en ligne des réservations.",
    },
    lessonsLearned: {
      en: "Combining multiple tourism services on one site works best when each still has a clear, distinct entry point.",
      fr: "Regrouper plusieurs services touristiques sur un même site fonctionne mieux lorsque chacun garde un point d'entrée clair et distinct.",
    },
  },
  {
    slug: "ks-contracting",
    name: "KS Accounting",
    category: "Enterprise SaaS",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Enterprise accounting platform built for KS Contracting Ltd, covering invoicing, VAT, payments, credit notes, dashboards and financial reporting.",
      fr: "Plateforme comptable créée pour KS Contracting Ltd, couvrant facturation, TVA, paiements, notes de crédit, tableaux de bord et rapports.",
    },
    highlights: {
      en: ["Contracting-focused workflows", "Secure financial reporting"],
      fr: ["Workflows adaptés au contracting", "Rapports financiers sécurisés"],
    },
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RBAC"],
    image: "/images/projects/kscontracting.png",
    websiteUrl: "https://kscontracting.mu",
    demoUrl: "https://kscontracting.mu",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "KS Contracting Ltd needed enterprise accounting software covering invoicing, VAT, payments and credit notes suited to the specifics of a contracting business.",
      fr: "KS Contracting Ltd avait besoin d'un logiciel comptable d'entreprise couvrant facturation, TVA, paiements et notes de crédit, adapté aux spécificités d'une entreprise de contracting.",
    },
    solution: {
      en: "An accounting platform was built covering invoicing, VAT, payments, credit notes, dashboards and financial reporting, tailored to contracting-specific workflows.",
      fr: "Une plateforme comptable a été construite couvrant facturation, TVA, paiements, notes de crédit, tableaux de bord et rapports financiers, adaptée aux workflows du contracting.",
    },
    approach: {
      en: [
        "Studied contracting-specific invoicing and payment cycles before designing the schema",
        "Built role-based access so finance and operations see only what they need",
        "Layered financial reporting and dashboards on top of the core ledger",
      ],
      fr: [
        "Étude des cycles de facturation et de paiement propres au contracting avant la conception du schéma",
        "Mise en place d'un accès par rôle pour que finance et opérations ne voient que le nécessaire",
        "Ajout de rapports financiers et tableaux de bord au-dessus du grand livre principal",
      ],
    },
    features: {
      en: ["Invoicing & VAT", "Payments tracking", "Credit notes", "Financial dashboards", "Role-based access (RBAC)"],
      fr: ["Facturation & TVA", "Suivi des paiements", "Notes de crédit", "Tableaux de bord financiers", "Accès par rôle (RBAC)"],
    },
    challenges: {
      en: "Contracting invoicing often involves staged payments and retentions, which needed accurate handling beyond a standard invoicing model.",
      fr: "La facturation dans le contracting implique souvent des paiements échelonnés et des retenues, nécessitant une gestion précise au-delà d'un modèle de facturation standard.",
    },
    architecture: {
      en: "Built with Next.js and TypeScript on Supabase and PostgreSQL, with RBAC enforced at the API level for secure financial reporting.",
      fr: "Construit avec Next.js et TypeScript sur Supabase et PostgreSQL, avec un RBAC appliqué au niveau API pour des rapports financiers sécurisés.",
    },
    outcome: {
      en: "The platform is in production use at KS Contracting Ltd, supporting day-to-day invoicing and financial reporting.",
      fr: "La plateforme est utilisée en production chez KS Contracting Ltd pour la facturation et les rapports financiers au quotidien.",
    },
    futureImprovements: {
      en: "Planned work includes staged-payment scheduling and expanded reporting exports.",
      fr: "Les travaux prévus incluent la planification des paiements échelonnés et des exports de rapports élargis.",
    },
    lessonsLearned: {
      en: "Industry-specific invoicing logic — like staged payments — needs to be designed in from the start, not bolted onto a generic model.",
      fr: "Une logique de facturation propre à un secteur — comme les paiements échelonnés — doit être pensée dès le départ, pas ajoutée à un modèle générique.",
    },
  },
  {
    slug: "mobaz",
    name: "Mobaz.mu",
    category: "Marketplace",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Real estate marketplace connecting buyers, sellers, landlords and tenants through property listings, structured search and enquiry management.",
      fr: "Marketplace immobilière reliant acheteurs, vendeurs, propriétaires et locataires grâce aux annonces, recherches et gestion des demandes.",
    },
    highlights: {
      en: ["Advanced property discovery", "Multi-user marketplace workflows"],
      fr: ["Découverte avancée des biens", "Workflows marketplace multi-utilisateurs"],
    },
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Maps"],
    image: "/images/projects/mobaz.png",
    websiteUrl: "https://mobaz.mu",
    demoUrl: "https://mobaz.mu",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Mobaz.mu needed a marketplace connecting buyers, sellers, landlords and tenants, replacing scattered listings across informal channels with structured search and enquiry management.",
      fr: "Mobaz.mu avait besoin d'une marketplace reliant acheteurs, vendeurs, propriétaires et locataires, remplaçant des annonces dispersées sur des canaux informels par une recherche structurée et une gestion des demandes.",
    },
    solution: {
      en: "A real estate marketplace was built with property listings, structured search and enquiry management, supporting multiple user roles across the transaction.",
      fr: "Une marketplace immobilière a été construite avec annonces, recherche structurée et gestion des demandes, prenant en charge plusieurs rôles d'utilisateurs dans la transaction.",
    },
    approach: {
      en: [
        "Modelled listings, users and roles to support buyers, sellers, landlords and tenants distinctly",
        "Built structured search and filtering across property attributes and location",
        "Implemented enquiry management so listing owners can track and respond to leads",
      ],
      fr: [
        "Modélisation des annonces, utilisateurs et rôles pour distinguer acheteurs, vendeurs, propriétaires et locataires",
        "Création d'une recherche et d'un filtrage structurés par attributs et localisation",
        "Mise en place d'une gestion des demandes pour que les propriétaires d'annonces suivent et répondent aux prospects",
      ],
    },
    features: {
      en: ["Property listings", "Advanced search & filters", "Multi-user roles", "Enquiry management", "Maps integration"],
      fr: ["Annonces immobilières", "Recherche & filtres avancés", "Rôles multi-utilisateurs", "Gestion des demandes", "Intégration cartographique"],
    },
    challenges: {
      en: "Supporting four distinct user roles on one marketplace meant permissions and workflows had to stay clearly separated without duplicating the platform.",
      fr: "Prendre en charge quatre rôles distincts sur une même marketplace impliquait de bien séparer permissions et workflows sans dupliquer la plateforme.",
    },
    architecture: {
      en: "Built with Next.js, TypeScript, Supabase and PostgreSQL, with maps integration for location-based property discovery.",
      fr: "Construit avec Next.js, TypeScript, Supabase et PostgreSQL, avec intégration cartographique pour la découverte de biens par localisation.",
    },
    outcome: {
      en: "The marketplace is live, connecting property buyers, sellers, landlords and tenants across Mauritius.",
      fr: "La marketplace est en ligne, mettant en relation acheteurs, vendeurs, propriétaires et locataires à travers Maurice.",
    },
    futureImprovements: {
      en: "Planned work includes saved searches and in-app messaging between parties.",
      fr: "Les travaux prévus incluent les recherches sauvegardées et la messagerie intégrée entre les parties.",
    },
    lessonsLearned: {
      en: "Marketplace platforms need role separation designed early — retrofitting permissions later is far more disruptive.",
      fr: "Les plateformes marketplace ont besoin d'une séparation des rôles pensée tôt — ajouter des permissions plus tard est bien plus perturbateur.",
    },
  },
  {
    slug: "mobiz",
    name: "Mobiz.mu",
    category: "Corporate Website",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Corporate agency website presenting software development, websites, accounting, branding and digital marketing services with strong lead generation.",
      fr: "Site d'agence présentant développement logiciel, sites web, comptabilité, branding et marketing digital avec génération de prospects.",
    },
    highlights: {
      en: ["Conversion-focused presentation", "Complete digital service portfolio"],
      fr: ["Présentation orientée conversion", "Portfolio complet de services numériques"],
    },
    tech: ["Next.js", "React", "TypeScript", "SEO", "Lead Generation"],
    image: "/images/projects/mobiz-mu.png",
    websiteUrl: "https://mobiz.mu",
    demoUrl: "https://mobiz.mu",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Mobiz.mu needed a corporate site that could present a broad service portfolio — software, websites, accounting, branding and marketing — without diluting lead generation.",
      fr: "Mobiz.mu avait besoin d'un site corporate capable de présenter un large portefeuille de services — logiciel, sites web, comptabilité, branding et marketing — sans diluer la génération de prospects.",
    },
    solution: {
      en: "An agency website was built presenting the full digital service portfolio with a conversion-focused layout designed to keep lead generation central to every page.",
      fr: "Un site d'agence a été construit présentant l'ensemble du portefeuille de services numériques avec une mise en page orientée conversion, la génération de prospects restant centrale sur chaque page.",
    },
    approach: {
      en: [
        "Organised a broad service portfolio into clear, scannable sections",
        "Designed consistent calls-to-action across every service page",
        "Optimised the site structure for both search visibility and lead capture",
      ],
      fr: [
        "Organisation d'un large portefeuille de services en sections claires et lisibles",
        "Conception d'appels à l'action cohérents sur chaque page de service",
        "Optimisation de la structure du site pour la visibilité SEO et la capture de prospects",
      ],
    },
    features: {
      en: ["Service portfolio pages", "Lead capture forms", "SEO-optimised content", "Case highlights", "Responsive design"],
      fr: ["Pages portefeuille de services", "Formulaires de capture de prospects", "Contenu optimisé SEO", "Mise en avant de réalisations", "Design responsive"],
    },
    challenges: {
      en: "With five distinct service lines to present, the site risked feeling generic — the content had to stay specific enough to build credibility for each.",
      fr: "Avec cinq lignes de services distinctes à présenter, le site risquait de paraître générique — le contenu devait rester assez spécifique pour crédibiliser chacune.",
    },
    architecture: {
      en: "Built with Next.js, React and TypeScript, statically generated for fast performance and strong SEO across every service page.",
      fr: "Construit avec Next.js, React et TypeScript, en génération statique pour une performance rapide et un bon SEO sur chaque page de service.",
    },
    outcome: {
      en: "The site is live and generating leads across Mobiz.mu's service lines.",
      fr: "Le site est en ligne et génère des prospects sur l'ensemble des lignes de services de Mobiz.mu.",
    },
    futureImprovements: {
      en: "Planned work includes case study pages per service line and a client portal for project tracking.",
      fr: "Les travaux prévus incluent des pages d'études de cas par ligne de service et un portail client pour le suivi de projets.",
    },
    lessonsLearned: {
      en: "A wide service portfolio converts better when every page has one clear next step, not five.",
      fr: "Un large portefeuille de services convertit mieux lorsque chaque page propose une seule action claire, pas cinq.",
    },
  },
  {
    slug: "moris-ai",
    name: "MorisAI",
    category: "Enterprise SaaS",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "AI platform delivering business automation, AI employees, intelligent assistants and enterprise AI solutions for organisations in Mauritius and internationally.",
      fr: "Plateforme IA proposant automatisation métier, employés IA, assistants intelligents et solutions d'entreprise à Maurice et à l'international.",
    },
    highlights: {
      en: ["Business-focused AI workflows", "Enterprise automation solutions"],
      fr: ["Workflows IA orientés entreprise", "Solutions d'automatisation avancées"],
    },
    tech: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "AI Integrations"],
    image: "/images/projects/moris-ai.png",
    websiteUrl: "https://morisai.com",
    demoUrl: "https://morisai.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Organisations in Mauritius and internationally needed accessible entry points into business automation and AI assistants, without requiring an in-house AI team.",
      fr: "Des organisations à Maurice et à l'international avaient besoin de points d'accès simples à l'automatisation métier et aux assistants IA, sans avoir besoin d'une équipe IA en interne.",
    },
    solution: {
      en: "MorisAI was built as a platform delivering business automation, AI employees and intelligent assistants, packaging AI integrations into practical enterprise solutions.",
      fr: "MorisAI a été conçu comme une plateforme délivrant automatisation métier, employés IA et assistants intelligents, transformant les intégrations IA en solutions d'entreprise concrètes.",
    },
    approach: {
      en: [
        "Identified repetitive business processes best suited to AI automation",
        "Integrated OpenAI's API behind a consistent, business-facing interface",
        "Built the platform to scale from single assistants to broader automation workflows",
      ],
      fr: [
        "Identification des processus métier répétitifs les plus adaptés à l'automatisation IA",
        "Intégration de l'API OpenAI derrière une interface cohérente orientée métier",
        "Conception de la plateforme pour évoluer d'assistants isolés vers des workflows d'automatisation plus larges",
      ],
    },
    features: {
      en: ["AI employees", "Intelligent assistants", "Business automation workflows", "OpenAI API integration", "Enterprise-ready solutions"],
      fr: ["Employés IA", "Assistants intelligents", "Workflows d'automatisation métier", "Intégration API OpenAI", "Solutions prêtes pour l'entreprise"],
    },
    challenges: {
      en: "AI features had to be framed around concrete business outcomes rather than novelty, so adoption depended on trust as much as capability.",
      fr: "Les fonctionnalités IA devaient être présentées autour de résultats métier concrets plutôt que la nouveauté, l'adoption reposant autant sur la confiance que sur la capacité.",
    },
    architecture: {
      en: "Built with Next.js and TypeScript, integrating the OpenAI API with Supabase for data and user management behind a unified automation layer.",
      fr: "Construit avec Next.js et TypeScript, intégrant l'API OpenAI avec Supabase pour la gestion des données et des utilisateurs derrière une couche d'automatisation unifiée.",
    },
    outcome: {
      en: "MorisAI is live, giving organisations a practical starting point for AI-driven automation.",
      fr: "MorisAI est en ligne, offrant aux organisations un point de départ concret pour l'automatisation pilotée par l'IA.",
    },
    futureImprovements: {
      en: "Planned work includes expanding integrations with common business tools and usage analytics for automation workflows.",
      fr: "Les travaux prévus incluent l'extension des intégrations avec les outils métier courants et des analyses d'utilisation pour les workflows d'automatisation.",
    },
    lessonsLearned: {
      en: "AI features earn adoption fastest when they replace a specific, named task rather than promising general intelligence.",
      fr: "Les fonctionnalités IA gagnent l'adoption plus vite lorsqu'elles remplacent une tâche précise et nommée plutôt que de promettre une intelligence générale.",
    },
  },
  {
    slug: "multiimaint",
    name: "MultiiMaint",
    category: "Corporate Website",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Corporate website for maintenance and facility-management services, presenting commercial solutions, technical expertise and quotation requests.",
      fr: "Site corporate de maintenance et facility management présentant solutions commerciales, expertise technique et demandes de devis.",
    },
    highlights: {
      en: ["Professional service positioning", "Clear quotation journey"],
      fr: ["Positionnement professionnel", "Parcours de demande de devis clair"],
    },
    tech: ["Next.js", "React", "TypeScript", "SEO", "Responsive Design"],
    image: "/images/projects/multiimaint.png",
    websiteUrl: "https://multiimaint.mu",
    demoUrl: "https://multiimaint.mu",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "MultiiMaint needed a corporate website that could present facility-management and maintenance solutions credibly to commercial clients and generate quotation requests.",
      fr: "MultiiMaint avait besoin d'un site corporate capable de présenter crédiblement ses solutions de maintenance et de facility management à des clients commerciaux et de générer des demandes de devis.",
    },
    solution: {
      en: "A corporate maintenance website was built presenting commercial solutions and technical expertise, with a clear path to requesting a quotation.",
      fr: "Un site corporate de maintenance a été construit présentant les solutions commerciales et l'expertise technique, avec un parcours clair vers la demande de devis.",
    },
    approach: {
      en: [
        "Positioned technical expertise and commercial solutions side by side for credibility",
        "Built a clear, low-friction quotation request journey",
        "Optimised for search terms used by facility managers",
      ],
      fr: [
        "Mise en avant conjointe de l'expertise technique et des solutions commerciales pour la crédibilité",
        "Construction d'un parcours de demande de devis clair et sans friction",
        "Optimisation pour les termes de recherche utilisés par les gestionnaires de sites",
      ],
    },
    features: {
      en: ["Service presentation", "Quotation requests", "Technical expertise showcase", "SEO-optimised pages", "Responsive design"],
      fr: ["Présentation des services", "Demandes de devis", "Mise en avant de l'expertise technique", "Pages optimisées SEO", "Design responsive"],
    },
    challenges: {
      en: "Commercial facility-management buyers needed to see technical credibility quickly, which shaped how services were described and ordered on the page.",
      fr: "Les acheteurs commerciaux en facility management devaient percevoir rapidement la crédibilité technique, ce qui a guidé la description et l'ordre des services sur la page.",
    },
    architecture: {
      en: "Built with Next.js, React and TypeScript, statically generated for fast, SEO-friendly delivery.",
      fr: "Construit avec Next.js, React et TypeScript, en génération statique pour une livraison rapide et optimisée SEO.",
    },
    outcome: {
      en: "The site is live and generating quotation requests from commercial clients.",
      fr: "Le site est en ligne et génère des demandes de devis de la part de clients commerciaux.",
    },
    futureImprovements: {
      en: "Planned work includes a service-request tracking portal for existing clients.",
      fr: "Les travaux prévus incluent un portail de suivi des demandes de service pour les clients existants.",
    },
    lessonsLearned: {
      en: "For technical B2B services, showing expertise clearly matters more than a long feature list.",
      fr: "Pour des services techniques B2B, démontrer clairement l'expertise compte plus qu'une longue liste de fonctionnalités.",
    },
  },
  {
    slug: "my-mauritius-trip",
    name: "MyMauritiusTrip",
    category: "Marketplace",
    status: "Live",
    hasCaseStudy: true,
    overview: {
      en: "Travel marketplace connecting verified tourism providers with travellers through accommodation, activities, transport, bookings and provider dashboards.",
      fr: "Marketplace reliant prestataires touristiques vérifiés et voyageurs grâce aux hébergements, activités, transports, réservations et tableaux de bord.",
    },
    highlights: {
      en: ["Verified provider ecosystem", "End-to-end booking workflows"],
      fr: ["Écosystème de prestataires vérifiés", "Workflows de réservation complets"],
    },
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Marketplace"],
    image: "/images/projects/mymauritiustrip-com.png",
    websiteUrl: "https://mymauritiustrip.com",
    demoUrl: "https://mymauritiustrip.com",
    repoStatus: "private",
    role: { en: "Full Stack Developer", fr: "Développeur Full Stack" },
    problem: {
      en: "Travellers and tourism providers in Mauritius lacked a single trusted marketplace connecting verified accommodation, activities and transport providers with bookings in one place.",
      fr: "Voyageurs et prestataires touristiques à Maurice manquaient d'une marketplace de confiance unique reliant hébergements, activités et transports vérifiés avec des réservations centralisées.",
    },
    solution: {
      en: "MyMauritiusTrip was built as a travel marketplace connecting verified tourism providers with travellers, covering accommodation, activities, transport, bookings and provider dashboards.",
      fr: "MyMauritiusTrip a été conçu comme une marketplace touristique reliant prestataires vérifiés et voyageurs, couvrant hébergement, activités, transport, réservations et tableaux de bord prestataires.",
    },
    approach: {
      en: [
        "Designed a provider verification process to build traveller trust",
        "Modelled bookings across accommodation, activities and transport in one system",
        "Built provider dashboards so businesses can manage their own listings and bookings",
      ],
      fr: [
        "Conception d'un processus de vérification des prestataires pour renforcer la confiance des voyageurs",
        "Modélisation des réservations d'hébergement, activités et transport dans un seul système",
        "Création de tableaux de bord prestataires pour gérer leurs propres annonces et réservations",
      ],
    },
    features: {
      en: ["Verified provider listings", "Accommodation & activities", "Transport bookings", "End-to-end booking flow", "Provider dashboards"],
      fr: ["Annonces prestataires vérifiés", "Hébergement & activités", "Réservations de transport", "Parcours de réservation complet", "Tableaux de bord prestataires"],
    },
    challenges: {
      en: "Coordinating three different booking types — accommodation, activities and transport — under one consistent flow required careful data modelling.",
      fr: "Coordonner trois types de réservation différents — hébergement, activités et transport — sous un parcours cohérent a demandé une modélisation de données soignée.",
    },
    architecture: {
      en: "Built with Next.js, TypeScript, Supabase and PostgreSQL, structured around a marketplace data model with separate provider and traveller-facing views.",
      fr: "Construit avec Next.js, TypeScript, Supabase et PostgreSQL, structuré autour d'un modèle de données marketplace avec des vues distinctes pour prestataires et voyageurs.",
    },
    outcome: {
      en: "The marketplace is live, connecting verified tourism providers with travellers across Mauritius.",
      fr: "La marketplace est en ligne, mettant en relation des prestataires touristiques vérifiés et des voyageurs à travers Maurice.",
    },
    futureImprovements: {
      en: "Planned work includes provider ratings and reviews, and integrated online payments for bookings.",
      fr: "Les travaux prévus incluent les avis et notations des prestataires, ainsi que le paiement en ligne intégré pour les réservations.",
    },
    lessonsLearned: {
      en: "Trust signals, like provider verification, matter as much as booking convenience in a travel marketplace.",
      fr: "Les signaux de confiance, comme la vérification des prestataires, comptent autant que la commodité de réservation dans une marketplace touristique.",
    },
  },
];

export const projects: ProjectContent[] = projectsContent;

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return projectsContent.find((project) => project.slug === slug);
}

export function getLocalizedProject(project: ProjectContent, locale: Locale = "en") {
  return {
    slug: project.slug,
    name: project.name,
    category: project.category,
    status: project.status,
    hasCaseStudy: project.hasCaseStudy,
    overview: project.overview[locale],
    highlights: project.highlights[locale],
    tech: project.tech,
    image: project.image,
    websiteUrl: project.websiteUrl,
    demoUrl: project.demoUrl,
    repoStatus: project.repoStatus,
    repoUrl: project.repoUrl,
    role: project.role[locale],
    problem: project.problem[locale],
    solution: project.solution[locale],
    approach: project.approach[locale],
    features: project.features[locale],
    challenges: project.challenges[locale],
    architecture: project.architecture?.[locale],
    outcome: project.outcome[locale],
    futureImprovements: project.futureImprovements[locale],
    lessonsLearned: project.lessonsLearned?.[locale],
  };
}

export function getLocalizedProjects(locale: Locale = "en"): (HomeProject & { hasCaseStudy: boolean; status: ProjectStatus })[] {
  return projectsContent.map((project) => ({
    slug: project.slug,
    name: project.name,
    category: CATEGORY_LABELS[project.category][locale],
    overview: project.overview[locale],
    highlights: project.highlights[locale] ?? [],
    tech: project.tech ?? [],
    image: project.image,
    websiteUrl: project.websiteUrl,
    hasCaseStudy: project.hasCaseStudy,
    status: project.status,
  }));
}

export function getLocalizedProjectsByCategory(
  locale: Locale = "en",
): { category: ProjectCategory; items: HomeProject[] }[] {
  const localized = getLocalizedProjects(locale);

  return CATEGORY_ORDER.filter((category) =>
    projectsContent.some((project) => project.category === category),
  ).map((category) => ({
    category,
    items: localized.filter((_, index) => projectsContent[index].category === category),
  }));
}

export function getHomeProjects(locale: Locale = "en"): HomeProject[] {
  return projectsContent.map((project) => ({
    slug: project.slug,
    name: project.name,
    category: CATEGORY_LABELS[project.category][locale],
    overview: project.overview[locale],
    highlights: project.highlights?.[locale] ?? [],
    tech: project.tech ?? [],
    image: project.image,
    websiteUrl: project.websiteUrl,
  }));
}
