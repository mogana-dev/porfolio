/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [],
    qualities: [75, 82, 88],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // Turbopack's persistent on-disk dev cache (SST-based) hits Windows file-locking
    // limits under concurrent writes/compaction ("Unable to write SST file",
    // "Another write batch or compaction is already active", os error 1450).
    // The in-memory cache Turbopack falls back to is stable; disable the
    // experimental disk-persisted cache for the dev server to avoid it.
    turbopackFileSystemCacheForDev: false,

    // By default Next.js spawns (CPU count - 1) build workers, regardless of
    // available memory. On memory-constrained machines this causes worker
    // crashes and "Insufficient system resources" (os error 1450) during
    // static generation. Scale worker count to actual free memory instead
    // (floor of 4 workers), which is Next's supported mechanism for this.
    memoryBasedWorkersCount: true,
  },

  async headers() {
    const isDev = process.env.NODE_ENV === "development";

    const csp = [
      "default-src 'self'",
      // Framer Motion and Tailwind both rely on inline style attributes;
      // Next.js's hydration bootstrap and the JSON-LD blocks are inline scripts.
      // 'unsafe-eval' is dev-only: React's dev-mode debugging (stack trace
      // reconstruction) calls eval(); React never uses eval() in production,
      // so it's deliberately left out of the production policy.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
