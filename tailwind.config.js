/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#F4EFEB",
      green: "#535F4A",
      lightgreen: "#BDC6C2",
      black: "#2F2F33",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Cinzel: ["Cinzel", "sans-serif"],
        Cormorant: ["Cormorant"],
      },
      maxWidth: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
