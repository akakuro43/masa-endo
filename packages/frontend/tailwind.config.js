const height = require('./src/modules/styles/height')
const width = require('./src/modules/styles/width')
const fontSize = require('./src/modules/styles/fontSize')
const colors = require('./src/modules/styles/colors')
const fontFamily = require('./src/modules/styles/fontFamily')

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  // purge: {
  //   enabled: true,
  //   preserveHtmlElements: false,
  //   layers: ["components", "utilities"],
  //   content: ['**/*.{js,ts,jsx,tsx,sass}'],
  //   options: {
  //     safelist: ["dark"],
  //   },
  // },
    
  // purge: ['./pages/**/*.tsx'],
  purge: {
    // Specify the paths to all of the template files in your project
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
    extend: {
      height,
      width,
    }
  },
  variants: {},
  plugins: [],
}
