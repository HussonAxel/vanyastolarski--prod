/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#DCD4D1",
      green: "#364540",
      black: "#2F2F33",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        // marckScript: ["Marck Script"],
        // playwrite: ["Playwrite MX", "sans-serif"],
        myfont: ["MyFont", "sans-serif"],
      },
      maxWidth: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
