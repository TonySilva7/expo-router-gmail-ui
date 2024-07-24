/* eslint-disable @typescript-eslint/no-var-requires */
const { colors } = require('./src/styles/colors')
const { fontFamily } = require('./src/styles/font-family')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily,
      colors,
    },
  },
  plugins: [],
}
