/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eths-orange': '#FF6B35',
        'eths-navy': '#003B5C',
        'eths-blue': '#0066A1',
      },
    },
  },
  plugins: [],
}
