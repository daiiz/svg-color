const { createSvgStr, createResponseHeader } = require('./lib')

module.exports = async (req, res) => {
  const { r, g, b } = req.query
  const color = `rgb(${r},${g},${b})`
  const svgStr = createSvgStr({ color })
  res.writeHead(200, createResponseHeader({ color }))
  res.end(svgStr)
}
