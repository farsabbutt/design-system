/** @type {import('tailwindcss').Config} */
const designTokens = require('design-tokens')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...designTokens.colors
      }
    },
  },
  plugins: [],
}

