import type { Config } from "tailwindcss";

const config: Config = {
  // The site is designed as a light theme; dark: variants are opt-in via a
  // `.dark` class (never set), so OS dark mode can't render white-on-white.
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1128",
          ink: "#0B1220",
          deep: "#1E40AF",
          blue: "#2563EB",
          cyan: "#06B6D4",
          purple: "#7C3AED",
          magenta: "#DB2777",
        },
        surface: "#F7F9FC",
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          '"Plus Jakarta Sans Variable"',
          '"Plus Jakarta Sans"',
          "Manrope",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.06), 0 8px 24px -8px rgba(16, 24, 40, 0.10)",
        lift: "0 2px 4px rgba(16, 24, 40, 0.08), 0 16px 40px -12px rgba(37, 99, 235, 0.18)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
