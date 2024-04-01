const { createSvgStr, createResponseHeader, parseOptions } = require("../lib");

module.exports = async (req, res) => {
  const { r, g, b, a } = req.query;
  let colorStr = `${parseInt(r)},${parseInt(g)},${parseInt(b)}`;
  let color = `rgb(${colorStr})`;

  if (a !== undefined) {
    colorStr = `${colorStr},${Math.min(1, parseFloat(a))}`;
    color = `rgba(${colorStr})`;
  }

  const options = parseOptions(req.query.options);
  const svgStr = createSvgStr({ ...options, color });
  res.writeHead(200, createResponseHeader({ color }));
  res.end(svgStr);
};
