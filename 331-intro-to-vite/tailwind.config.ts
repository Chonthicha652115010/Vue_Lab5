import type { Config } from 'tailwindcss'
// tailwide's let you build complex design direct in your html

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sp' : '0 3px 12px 0 rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
} satisfies Config

