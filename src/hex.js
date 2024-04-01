const { createSvgStr, createResponseHeader } = require("../lib");

function parseOptions(optionsStr = "") {
  const toks = optionsStr
    .split(".")
    .map((tok) => tok.trim())
    .filter((tok) => !!tok);
  const options = {
    shape: "rect",
  };

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
  const color = `#${hex}`;
  const svgStr = createSvgStr({ ...options, color });
  res.writeHead(200, createResponseHeader({ color }));
  res.end(svgStr);
};
