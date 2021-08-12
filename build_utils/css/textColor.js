const { fromString, fromRgb } = require('css-color-converter')

const BLACK_LUMINANCE = 0.05
const WHITE_LUMINANCE = 1.05

/**
 * Calculate the luminance of an RGB value
 *
 * @param {Array<number>} rgba
 * @return {number} luminance
 */
function calculateLuminance (rgb) {
  return [0.2126, 0.7152, 0.0722].map((multiplier, index) => {
    let component = rgb[index] / 255
    if (component <= 0.03928) {
      component /= 12.92
    } else {
      component += 0.055
      component /= 1.055
      component = Math.pow(component, 2.4)
    }
    return component * multiplier
  }).reduce((prev, value) => prev + value)
}

/**
 * Calculate contrast ration from luminance array
 *
 * @param {Array<number>} luminances
 * @return {number} contrast ratio
 */
function getContrastRatio (luminances) {
  luminances = luminances.map(luminance => luminance + 0.05)
  if (luminances[0] > luminances[1]) {
    return luminances[0] / luminances[1]
  }
  return luminances[1] / luminances[0]
}

/**
 * Calculate the text color from the provided color value
 *
 * @param {string} value
 * @return {string} rgb string
 */
module.exports = function textColor (value) {
  /** @type {Array<number>} */
  const rgba = fromString(value).toRgbaArray()
  const luminance = calculateLuminance(rgba.slice(0, 3))
  const color = new Array(3).fill(getContrastRatio([luminance, WHITE_LUMINANCE]) > getContrastRatio([luminance, BLACK_LUMINANCE]) ? 255 : 0)
  return fromRgb(color).toRgbString()
}
