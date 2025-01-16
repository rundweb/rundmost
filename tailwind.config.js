/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-primary": "#282930",
        "black-secondary": "#153F45",
        "yellow-light": "#E2FFC8",
        "gray-primary": "#777C90",
        "white-bg": "#F5F7F9",
        "green-primary":"#19A580",
        "service":"#143E44"
      },
      backgroundImage: {
        'home': "url('/src/assets/images/hombg.jpg')",
      }
    },
  },
  plugins: [],
};
