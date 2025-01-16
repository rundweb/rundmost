/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-primary": "#282930",
        "black-secondary": "#142F32",
        "yellow-light": "#E3FFCC",
        "gray-primary": "#777C90",
        "white-bg": "#F5F7F9",
        "green-primary":"#19A580"
      },
    },
  },
  plugins: [],
};
