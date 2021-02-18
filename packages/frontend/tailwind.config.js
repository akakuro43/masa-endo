const height = require('./src/modules/styles/height')
const width = require('./src/modules/styles/width')
const fontSize = require('./src/modules/styles/fontSize')
const colors = require('./src/modules/styles/colors')
const fontFamily = require('./src/modules/styles/fontFamily')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    fontFamily,
    fontSize,
    extend: {
      height,
      width,
    }
  },
  variants: {},
  plugins: [],
}
