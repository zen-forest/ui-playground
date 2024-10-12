import type { Config } from "tailwindcss";
import colors from './src/design-system/colors';

const config: Config = {
  darkMode: 'class',  // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Using CSS variable for dynamic theming
        foreground: "var(--foreground)",  // Same for foreground
        light: {
          background: colors.light.background,
          foreground: colors.light.foreground,
        },
        dark: {
          background: colors.dark.background,
          foreground: colors.dark.foreground,
        },
        custom: {
          background: colors.custom.background,
          foreground: colors.custom.foreground,
        },
      },
    },
  },
  plugins: [],
};

export default config;