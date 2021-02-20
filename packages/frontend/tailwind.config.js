const height = require('./src/modules/styles/height')
const width = require('./src/modules/styles/width')
const margin = require('./src/modules/styles/margin')
const padding = require('./src/modules/styles/padding')
const inset = require('./src/modules/styles/inset')
const fontSize = require('./src/modules/styles/fontSize')
const colors = require('./src/modules/styles/colors')
const fontFamily = require('./src/modules/styles/fontFamily')

module.exports = {
  purge: {
    content: [
      './src/components/**/*.tsx',
      './src/pages/**/*.tsx',
      './src/sass/*.sass',
    ],
    options: {
      safelist: ["html", "body"],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    fontFamily,
    fontSize,
    margin,
    padding,
    width,
    height,
    inset,
    extend: {}
  },
  variants: {},
  plugins: [],
}
