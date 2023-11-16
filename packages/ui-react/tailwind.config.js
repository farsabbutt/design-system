/** @type {import('tailwindcss').Config} */
const designTokens = require('design-tokens')
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...designTokens.colors
      }
    },
  },
  plugins: [],
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  }
}

