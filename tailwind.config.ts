import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          primary: "#2D7DD2", // Blue
          accent: "#EEB902", // Yellow
          dark: "#474647", // Dark Gray
          light: "#ffffff", // White
        },
    },
  },
  plugins: [],
} satisfies Config;
