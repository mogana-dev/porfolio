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
        // Primary brand accent — used consistently for headings, links, CTAs and glows
        brand: "#FF6B35",
        orange: "#F59E0B",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        glow: "0 0 32px -12px rgba(255,107,53,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(6,16,31,0) 0%, #06101F 90%)",
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
