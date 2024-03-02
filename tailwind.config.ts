import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const svgToDataUri = require("mini-svg-data-uri");

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: ["./src/**/*.tsx"],
  darkMode: ["class", ".dark-theme"],
  theme: {
    extend: {
      colors: {
        primary: "#6919FF",
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
        success: "#00F090",
        warning: "#FFDC30",
        error: "#FF2E5B",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
    require("tailwindcss-radix")(),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
      );
    },
  ],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
