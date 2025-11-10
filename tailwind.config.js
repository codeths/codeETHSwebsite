/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eths-orange': '#d15d19',
        'eths-navy': '#00338d',
        'eths-blue': '#0066A1',
      },
    },
  },
  plugins: [],
}
