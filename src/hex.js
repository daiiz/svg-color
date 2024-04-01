const { createSvgStr, createResponseHeader } = require("../lib");

function parseOptions(optionsStr = "") {
  const toks = optionsStr
    .split(".")
    .map((tok) => tok.trim())
    .filter((tok) => !!tok);
  const options = Object.create(null);
  for (const tok of toks) {
    if (["circle"].includes(tok)) {
      options.shape = tok;
    }
  }
  return options;
}

module.exports = async (req, res) => {
  const { hex } = req.query;
  const options = parseOptions(req.query.options);
  console.log(`hex: ${hex}`, options);
  const color = `#${hex}`;
  const svgStr = createSvgStr({ color });
  res.writeHead(200, createResponseHeader({ color }));
  res.end(svgStr);
};
