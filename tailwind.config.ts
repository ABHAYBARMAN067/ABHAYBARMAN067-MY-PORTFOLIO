import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#e6e3de',
        'light-surface': '#efede8',
        'light-elevated': '#f5f3ef',
        'light-text': '#3d3a36',
        'light-muted': '#6e6962',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'blink': {
          '0%, 49%, 100%': { opacity: '1' },
          '50%, 99%': { opacity: '0' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
