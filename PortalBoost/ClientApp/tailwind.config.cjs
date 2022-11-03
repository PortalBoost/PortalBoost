/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "n-offwhite": "#EEEEEE",
        "n-platinum": "#E4E4E4",
        "n-blue": "#D9E6F0",
        "n-gray": "#CFD5DA",
        "n-turquoise": "#63CBCA",
        "n-sky": "#86DFFF",
        "n-purple": "#5A1F9F",
        "n-dark": "#222222",
      }
    },
    fontFamily: {
      "sans": ["BwGradual", ...defaultTheme.fontFamily.sans],
      "serif": ["Rokkitt", ...defaultTheme.fontFamily.serif]
    }
  },
  plugins: [],
}
