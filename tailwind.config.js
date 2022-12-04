/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#393932",
      },
    },
    fontFamily: {
      sans: ["Roboto", "regular"],
      fira: ["Fira Code", "regular"],
      display: ["Alfa Slab One", "regular"],
    },
  },
  plugins: [],
};
