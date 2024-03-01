import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        neutrals: {
          900: "#060918",
          800: "#161A2C",
          700: "#23263B",
          600: "#2E364F",
          500: "#4D5775",
          400: "#6F7A9B",
          300: "#96A1C0",
          200: "#C7D0E5",
          100: "#F0F2FE",
          50: "#FFFEF9",
        },
        accent: "#6919FF",
        error: "#FF2E5B",
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
} satisfies Config;
