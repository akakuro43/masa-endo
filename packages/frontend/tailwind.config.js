
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'off-white': '#F2F2E9',
      'gray': '#a5a59f',
      'light-gray': '#DBDBD6',
      'key-color': '#1B90D2',
      'dark1': '#151515',
      'dark2': '#232425',
      'dark3': '#333435',
    },
  },
  variants: {},
  plugins: [],
}
