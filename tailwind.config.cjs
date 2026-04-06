/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#a8a4bc",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: {
          DEFAULT: "#e0634a",
          muted: "#b84a38",
          glow: "rgba(224, 99, 74, 0.35)",
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.04)",
          raised: "rgba(255, 255, 255, 0.06)",
        },
        edge: {
          subtle: "rgba(255, 255, 255, 0.1)",
          strong: "rgba(255, 255, 255, 0.18)",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
