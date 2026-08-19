/**
 * Canonical production origin — the single source of truth for every absolute
 * URL the site emits (metadataBase, canonicals, hreflang, Open Graph, JSON-LD,
 * sitemap and robots).
 *
 * Production serves from the www host; the apex issues a 308 redirect to it, so
 * canonical URLs must point at www to avoid pointing search engines at a
 * redirect.
 */
export const SITE_URL = "https://www.mogana.dev";
