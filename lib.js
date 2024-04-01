const parseOptions = (optionsStr = "") => {
  const toks = optionsStr
    .split(".")
    .map((tok) => tok.trim())
    .filter((tok) => !!tok);
  const options = {
    shape: "rect",
  };

  for (const tok of toks) {
    if (["circle", "●"].includes(tok)) {
      options.shape = "circle";
    } else if (["up_pointing_triangle", "triangle", "▲"].includes(tok)) {
      options.shape = "up_pointing_triangle";
    }
  }
  return options;
};

const createSvgStr = ({ color, shape }) => {
  const width = 20;
  const height = 20;

  const figureElementStr = (function () {
    if (shape === "circle") {
      const cx = width / 2;
      const cy = height / 2;
      return `<circle cx="${cx}" cy="${cy}" r="${cx}" fill="${color}"></circle>`;
    } else if (shape === "up_pointing_triangle") {
      return `<polygon points="0,${height} ${width},${height} ${
        width / 2
      },0" fill="${color}"></polygon>`;
    }
    return `<rect x="0" y="0" width="${width}" height="${height}" fill="${color}"></rect>`;
  })();

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">`,
    figureElementStr,
    "</svg>",
  ].join("");
};

const createResponseHeader = ({ color }) => {
  return {
    "Content-Type": 'image/svg+xml; charset="utf-8";',
    "X-COLOR": color,
  };
};

module.exports = {
  parseOptions,
  createSvgStr,
  createResponseHeader,
};
