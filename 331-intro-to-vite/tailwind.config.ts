import type { Config } from 'tailwindcss'
// tailwide's let you build complex design direct in your html

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

