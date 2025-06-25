/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        golden: {
          50: "#FAF4ED",
          100: "#F1E2D0",
          200: "#DEC0A3",
          300: "#C99E75",
          400: "#B37D49",
          500: "#94662A",
          600: "#785223",
          700: "#5D3F1C",
          800: "#422C15",
          900: "#28190C",
        },
        black: {
          50: "#f5f5f5",
          100: "#E5E5E5",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#171717",
          900: "#000000",
        },
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
