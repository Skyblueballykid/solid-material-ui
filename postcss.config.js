module.exports = {
  plugins: [
    require('precss'),
    require('postcss-functions')({
      functions: {
        ...require('./build_utils/css')
      }
    }),
    require('autoprefixer')
  ]
}
