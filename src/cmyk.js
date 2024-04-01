const convert = require("color-convert");
const { createSvgStr, createResponseHeader, parseOptions } = require("../lib");

module.exports = async (req, res) => {
  const { c, m, y, k } = req.query;
  const [r, g, b] = convert.cmyk.rgb(
    parseInt(c),
    parseInt(m),
    parseInt(y),
    parseInt(k)
  );
  const color = `rgb(${r}, ${g}, ${b})`;
  const options = parseOptions(req.query.options);
  const svgStr = createSvgStr({ ...options, color });
  res.writeHead(200, createResponseHeader({ ...options, color }));
  res.end(svgStr);
};
