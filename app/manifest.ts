import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mogana.dev — Full Stack Product Engineer",
    short_name: "Mogana.dev",
    description:
      "Full stack product engineering brand building enterprise SaaS, AI-powered applications, marketplaces, e-commerce systems and business automation tools from idea to production.",
    start_url: "/",
    display: "standalone",
    background_color: "#061224",
    theme_color: "#061224",
    icons: [
      { src: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/icons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { src: "/icons/favicon-180x180.png", sizes: "180x180", type: "image/png" },
      { src: "/icons/favicon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
