module.exports = (ctx) => ({
  plugins: {
    'precss': {},
    'postcss-functions': {
      functions: {
        ...require('../build_utils/css')
      }
    },
    'autoprefixer': {}
  }
})