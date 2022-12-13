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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionProperty: {
        "width": "width"
      },
      animation: {
        "fade-in": "fadein 200ms linear",
        "fade-out": "fadeout 200ms linear"
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeout: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
    },
    fontFamily: {
      "sans": ["BwGradual", ...defaultTheme.fontFamily.sans],
      "serif": ["Rokkitt", ...defaultTheme.fontFamily.serif],
      "mono": [...defaultTheme.fontFamily.mono],
      "arial": ["Arimo", ...defaultTheme.fontFamily.sans]
    },
    screens: {
      "xxs": "290px", ...defaultTheme.screens,
      "xs": "475px", ...defaultTheme.screens,
    },
  },
  plugins: [],
}
