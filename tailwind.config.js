const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        oswald: ["var(--font-oswald)"],
      },
      colors: { "theblack": "#3E4032", "textgray":"#939393", "theblue":"#0367A5" },
    },
  },
  plugins: [],
};
