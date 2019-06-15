module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {
      "importFrom": "src/css/color.css"
    },
    'autoprefixer': {},
    'postcss-nesting': {}
  }
}
