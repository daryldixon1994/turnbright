/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "intro-pattern": "url('./assets/images/intro.png')",
      },
    },
    fontFamily: {
      poppins: ['"Poppins"', "sans-serif"],
    },
  },
  plugins: [],
};
