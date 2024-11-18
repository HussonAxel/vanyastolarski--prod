/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffefd3",
      green: "#4a6f63",
      lightgreen: "#4a6f63",
      black: "#2F2F33",
    },

    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Cinzel: ["Cinzel", "sans-serif"],
        Cormorant: ["Cormorant"],
        Libre: ["Libre Baskerville"],
        WorkSans: ["Work Sans"],
      },
      maxWidth: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
