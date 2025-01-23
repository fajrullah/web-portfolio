import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          light: '#E5DEFF', // Light shade of primary color (soft purple)
          DEFAULT: '#6E59A5', // Primary color (deep purple)
          dark: '#5A4791', // Dark shade of primary color (deep purple)
        },
        secondary: {
          light: '#F3F0FF', // Light shade of secondary color (softer purple)
          DEFAULT: '#E5DEFF', // Secondary color (soft purple)
          dark: '#D1C9FF', // Dark shade of secondary color (soft purple)
        },
        neutral: {
          light: '#F5F5F5', // Light shade of neutral color (light gray)
          DEFAULT: '#E5E5E5', // Neutral color (gray)
          dark: '#A3A3A3', // Dark shade of neutral color (dark gray)
        },
        accent: {
          light: '#D8B4FE', // Light shade of accent color (bright purple)
          DEFAULT: '#8B5CF6', // Accent color (bright purple)
          dark: '#7C3AED', // Dark shade of accent color (bright purple)
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-down": "fadeDown 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
