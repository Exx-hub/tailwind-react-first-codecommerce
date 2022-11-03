/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customcolor: {
          light: "#fef4e4",
          DEFAULT: "#ffefd5",
          dark: "#fee5bc",
        },
      },
    },
  },
  plugins: [],
};
