/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom": {
          "100": "#EEF1FF",
          "200": "#D2DAFF",
          "300": "#AAC4FF",
          "400": "#B1B2FF",
        },
      }
    },
  },  
  plugins: [],
}