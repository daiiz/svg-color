const { createSvgStr, createResponseHeader } = require('../lib')

module.exports = async (req, res) => {
  const { hex } = req.query
  const color = `#${hex}`
  const svgStr = createSvgStr({ color })
  res.writeHead(200, createResponseHeader({ color }))
  res.end(svgStr)
}
