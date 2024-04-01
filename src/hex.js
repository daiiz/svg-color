const { parseOptions, createSvgStr, createResponseHeader } = require("../lib");

module.exports = async (req, res) => {
  const { hex } = req.query;
  const options = parseOptions(req.query.options);
  const color = `#${hex}`;
  const svgStr = createSvgStr({ ...options, color });
  res.writeHead(200, createResponseHeader({ ...options, color }));
  res.end(svgStr);
};
