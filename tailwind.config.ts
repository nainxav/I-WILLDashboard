import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px var(--pixel-shadow)",
        "pixel-sm": "2px 2px 0px 0px var(--pixel-shadow)",
        "pixel-lg": "6px 6px 0px 0px var(--pixel-shadow)",
      },
    },
  },
  plugins: [],
};
export default config;
