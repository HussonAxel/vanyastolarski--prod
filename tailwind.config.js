/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fbf0da",
      green: "#4a6f63",
      black: "#2F2F33",
    },

    extend: {
      fontFamily: {
        WorkSans: ["Work Sans"],
        Large: ["Large", "sans-serif"],
        LargeItalic: ["Large-Italic", "sans-serif"],
      },
      maxWidth: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
