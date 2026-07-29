import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        ink: "#10231E",
        forest: {
          DEFAULT: "#1B4332",
          light: "#2D6A4F",
          dark: "#0D2B1F",
        },
        river: {
          DEFAULT: "#0B4F6C",
          light: "#146C8E",
          dark: "#073344",
        },
        sand: {
          DEFAULT: "#F2EFE9",
          dark: "#E8E2D6",
        },
        current: {
          DEFAULT: "#E8873B",
          light: "#F3A564",
          dark: "#C96A24",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(16, 35, 30, 0.25)",
        card: "0 10px 30px -10px rgba(11, 79, 108, 0.18)",
        glow: "0 0 0 1px rgba(232, 135, 59, 0.15), 0 20px 40px -15px rgba(232, 135, 59, 0.35)",
      },
      backgroundImage: {
        "river-gradient": "linear-gradient(160deg, #073344 0%, #0B4F6C 45%, #1B4332 100%)",
        "grain": "url('/images/grain.png')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "draw-river": "draw 3s ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        draw: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
