import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Deep Black
        surface: "#111111",
        primary: "#D4AF37", // Premium Gold
        primarySoft: "rgba(212, 175, 55, 0.2)",
        textMain: "#FFFFFF", // Pure White
        textMuted: "#A0A0A0",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      }
    },
  },
  plugins: [],
};

export default config;
