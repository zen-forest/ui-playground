import type { Config } from "tailwindcss";
import colors from './src/design-system/colors';
import typography from './src/design-system/typography';
import spacing from './src/design-system/spacing';
import borderRadius from './src/design-system/borderRadius';

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
      spacing: {
        sm: spacing.sm,
        md: spacing.md,
        lg: spacing.lg,
        xl: spacing.xl,
        '2xl': spacing['2xl'],
        '3xl': spacing['3xl'],
        '4xl': spacing['4xl'],
        '5xl': spacing['5xl'],
      },
      borderRadius: {
        none: borderRadius.none,
        sm: borderRadius.sm,
        md: borderRadius.md,
        lg: borderRadius.lg,
        xl: borderRadius.xl,
        '2xl': borderRadius['2xl'],
        '3xl': borderRadius['3xl'],
        full: borderRadius.full,
      },
      fontSize: {
        large: typography.large,
        title: typography.title,
        title2: typography.title2,
        title3: typography.title3,
        titleMedium: typography.titleMedium,
        headline: typography.headline,
        body: typography.body,
        bodyMedium: typography.bodyMedium,
        button: typography.button,
        numbers: typography.numbers,
        subhead: typography.subhead,
        subheadMedium: typography.subheadMedium,
        caption: typography.caption,
      },
    },
  },
  plugins: [],
};

export default config;
