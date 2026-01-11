/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#0f0f0f",
        "brand-green": "#75ac49",
        "brand-gold": "#ca9c29",
      },
    },
  },
  plugins: [],
};
