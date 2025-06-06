/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A7EBE",
        secondary: "#6B7280",
        offWhite: "#E8EBF0",
        titleBlack: "#4B5563"
      }
      ,
      container: {
        padding: {
          default: "1rem",
          sm: "2rem"
        }

      }
    },
  },
  plugins: [],
}