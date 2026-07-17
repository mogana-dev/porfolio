import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep dark-blue base (calm, static — not a "dark navy tech" cliché)
        ink: "#06101F",
        panel: "#0A1628",
        panel2: "rgba(16, 32, 56, 0.72)",
        line: "rgba(148, 163, 184, 0.18)",
        // Text
        mist: "#FFFFFF",
        dim: "#CBD5E1",
        muted: "#94A3B8",
        // European-inspired accents, used sparingly and deliberately
        eublue: "#003399",
        violet: "#2563EB",
        cyan: "#2563EB",
        purple: "#7C3AED",
        saffron: "#FFCC00",
        orange: "#F59E0B",
        amber: "#FFCC00",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        glow: "0 0 32px -12px rgba(37,99,235,0.45)",
        "glow-cyan": "0 0 32px -12px rgba(255,204,0,0.35)",
        "glow-orange": "0 0 32px -12px rgba(245,158,11,0.4)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(6,16,31,0) 0%, #06101F 90%)",
        "cta-gradient": "linear-gradient(90deg, #003399 0%, #2563EB 50%, #7C3AED 100%)",
        "cta-gradient-highlight": "linear-gradient(90deg, #FFCC00 0%, #F59E0B 100%)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
