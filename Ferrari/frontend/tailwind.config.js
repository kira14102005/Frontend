/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F12524",
        secondary: "#8B1314",
        darkred: "#64191E",
        lgred: "#FD6467",
        lpink: "#FDD7DD",
        yell: "#F9FA74",
        offwhite: "#ECF0F3",
        pink: "#E9BAC0"
      },
      container : {
        padding : {
          default : "1rem",
          sm : "2rem"
        }
      }
    },
  },
  plugins: [],
}