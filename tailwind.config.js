/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        "poppin-500": 500,
        "semi-bold": 600,
        "poppin-700": 700,       
        bold: 800,
      }
    },
  },
  plugins: [],
}

