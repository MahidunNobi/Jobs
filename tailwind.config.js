/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grn" : '#14a800',
        "grn2": "#13544e",
        "onGrn2": "#91e6b3",
        "blue": "#1f57c3"
      }
    },
  },
  plugins: [require("daisyui")],
};
