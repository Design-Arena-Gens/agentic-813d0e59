import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f5faff",
          100: "#e0f0ff",
          200: "#b9ddff",
          300: "#82c1ff",
          400: "#4aa4ff",
          500: "#1d86ff",
          600: "#0e69db",
          700: "#0b55b0",
          800: "#0c468e",
          900: "#0f3b74",
          950: "#091f40"
        }
      },
      boxShadow: {
        glow: "0 10px 40px rgba(29, 134, 255, 0.2)"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(74, 164, 255, 0.55), transparent 60%), radial-gradient(circle at bottom right, rgba(13, 25, 67, 0.8), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
