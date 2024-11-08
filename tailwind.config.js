/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#631E05",
        secondary: "#180701",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern-gradient": "linear-gradient(rgba(99, 30, 5, 0.5), rgba(99, 30, 5, 0.5)), url('/src/assets/tech/herobg.png')",
      },
    },
  },
  plugins: [],
};
