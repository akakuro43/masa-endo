// module.exports = {
//   plugins: {
//     tailwindcss: { config: './tailwind.config.js' },
//     autoprefixer: {},
//   }
// }
const plugins ={
  tailwindcss: {},
  autoprefixer: {}
};

if(process.env.NODE_ENV === 'production') {
  plugins.cssnano = {};
}

module.exports = {
  plugins: plugins
};
