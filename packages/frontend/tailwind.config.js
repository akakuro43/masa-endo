const theme = require('./tailwind-theme/index')

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
  darkMode: false,
  theme,
  variants: {},
  plugins: [],
}
