const { createSvgStr, createResponseHeader } = require('./lib')

module.exports = async (req, res) => {
  const { h, s, l, a } = req.query
  let colorStr = `${h}, ${s}%, ${l}%`
  let color = `hsl(${colorStr})`

  if (a !== undefined) {
    colorStr = `${colorStr},${Math.min(1, parseFloat(a))}`
    color = `hsla(${colorStr})`
  }

  const svgStr = createSvgStr({ color })
  res.writeHead(200, createResponseHeader({ color }))
  res.end(svgStr)
}
