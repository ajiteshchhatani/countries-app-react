/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "body-light": "#FAFAFA",
        "card-border-light": "#F6F6F6",
        "body-dark": "#202D36",
        "card-body-dark": "#2B3743",
        "search-input-dark": "#2B3743",
        "region-dropdown-dark": "#2B3743"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}