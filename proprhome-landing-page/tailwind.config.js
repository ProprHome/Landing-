/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "xlight-blue": "#D9D9D9",
        "transparent-white": "rgba(255, 255, 255, 0.7)",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      backgroundImage: {
        bloomberg: "url('/bloomberg.png')",
        marketwatch: "url('/marketwatch.png')",
        yahoo: "url('/yahoo.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
