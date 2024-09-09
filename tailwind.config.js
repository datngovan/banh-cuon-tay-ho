/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Playfair Display"', "serif"], // or any fallback
      },
    },
    colors: {
      //
      white: "#FFFFFF",
      //bg
      bg: "#FFECD1",
      //neutral color palette
      "neutral-5": "#F7F8F8",
      "neutral-10": "#EFEFEF",
      "neutral-20": "#E4E4E4",
      "neutral-30": "#D7D7D7",
      "neutral-40": "#B6B6B6",
      "neutral-50": "#949494",
      "neutral-60": "#777777",
      "neutral-70": "#676767",
      "neutral-80": "#464646",
      "neutral-90": "#303030",
      // primary color palette
      "primary-5": "#EAF6EC",
      "primary-10": "#C6F6CE",
      "primary-20": "#90EEAA",
      "primary-30": "#53CE82",
      "primary-40": "#289D60",
      "primary-50": "#015D36",
      "primary-60": "#004F36",
      "primary-70": "#004234",
      "primary-80": "#00352F",
      "primary-90": "#002C2B",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
