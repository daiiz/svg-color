const convert = require('color-convert')
const { createSvgStr, createResponseHeader } = require('../lib')

module.exports = async (req, res) => {
  const { c, m, y, k } = req.query
  const [r, g, b] = convert.cmyk.rgb(parseInt(c), parseInt(m), parseInt(y), parseInt(k))
  const color = `rgb(${r}, ${g}, ${b})`
  const svgStr = createSvgStr({ color })
  res.writeHead(200, createResponseHeader({ color }))
  res.end(svgStr)
}
