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
    } else if (["star", "★"].includes(tok)) {
      options.shape = "star";
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
      // GitHub Copilot: 視覚的にバランスの良い正三角形を書く。上下の余白が均等になるように配置する。
      const side = width * 0.8;
      const height = (Math.sqrt(3) / 2) * side;
      const topMargin = (width - side) / 2;
      const bottomMargin = (width - side) / 2;
      const trianglePoints = [
        `${topMargin},${height + bottomMargin}`,
        `${topMargin + side / 2},${bottomMargin}`,
        `${topMargin + side},${height + bottomMargin}`,
      ];
      return `<polygon points="${trianglePoints.join(
        " "
      )}" fill="${color}"></polygon>`;
    } else if (shape === "star") {
      // GitHub Copilot: 視覚的にバランスの良い星型を書く
      return `<polygon points="${width / 2},${height * 0.05} ${width * 0.65},${
        height * 0.35
      } ${width * 0.95},${height * 0.35} ${width * 0.7},${height * 0.6} ${
        width * 0.8
      },${height * 0.9} ${width / 2},${height * 0.75} ${width * 0.2},${
        height * 0.9
      } ${width * 0.3},${height * 0.6} ${width * 0.05},${height * 0.35} ${
        width * 0.35
      },${height * 0.35}" fill="${color}"></polygon>`;
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
