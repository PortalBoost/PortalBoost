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
        "n-turquoise": {
          light: "#85D6D5",
          DEFAULT: "#63CBCA",
          dark: "#38A8A6"
        },
        "n-sky": {
          light: "#ADE9FF",
          DEFAULT: "#86DFFF",
          dark: "#47CEFF"
        },
        "n-purple": {
          light: "#7F33D7",
          DEFAULT: "#5A1F9F",
          dark: "#441877"
        },
        "n-dark": "#222222",
      },
    },
    fontFamily: {
      "sans": ["BwGradual", ...defaultTheme.fontFamily.sans],
      "serif": ["Rokkitt", ...defaultTheme.fontFamily.serif],
      "mono": [...defaultTheme.fontFamily.mono],
      "arial": ["Arimo", ...defaultTheme.fontFamily.sans]
    },
    screens: {
      "xs": "475px", ...defaultTheme.screens,
    }
  },
  plugins: [],
}
