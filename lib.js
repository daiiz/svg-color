const parseOptions = (optionsStr = "") => {
  const toks = optionsStr
    .split(".")
    .map((tok) => tok.trim())
    .filter((tok) => !!tok);
  const options = {
    shape: "rect", // 余白なしの正方形（Legacy）
  };

  for (const tok of toks) {
    if (["square", "■"].includes(tok)) {
      options.shape = "square";
    } else if (["circle", "●"].includes(tok)) {
      options.shape = "circle";
    } else if (["up_pointing_triangle", "triangle", "▲"].includes(tok)) {
      options.shape = "up_pointing_triangle";
    } else if (["down_pointing_triangle", "▼"].includes(tok)) {
      options.shape = "down_pointing_triangle";
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
    if (shape === "square") {
      // GitHub Copilot: 視覚的にバランスの良い正方形を書く。上下左右に余白なし。
      return `<rect x="0" y="0" width="${width}" height="${height}" fill="${color}"></rect>`;
    } else if (shape === "circle") {
      // GitHub Copilot: 視覚的にバランスの良い円形を書く。上下左右に余白なし。
      const radius = width / 2;
      const cx = width / 2;
      const cy = height / 2;
      return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${color}"></circle>`;
    } else if (shape === "up_pointing_triangle") {
      // GitHub Copilot: 視覚的にバランスの良い三角形を書く。上下左右に余白なし。
      const sideLength = width;
      const triangleElementStr = `<polygon points="0,${sideLength} ${
        sideLength / 2
      },0 ${sideLength},${sideLength}" fill="${color}"></polygon>`;
      return triangleElementStr;
    } else if (shape === "down_pointing_triangle") {
      // GitHub Copilot: 視覚的にバランスの良い逆三角形を書く。上下左右に余白なし。
      const sideLength = width;
      const triangleElementStr = `<polygon points="0,0 ${
        sideLength / 2
      },${sideLength} ${sideLength},0" fill="${color}"></polygon>`;
      return triangleElementStr;
    } else if (shape === "star") {
      // GitHub Copilot: 視覚的にバランスの良い星型を書く。上下左右に余白なし。width と height を用いて位置を指定する。
      const starElementStr = `<polygon points="${width / 2},0 ${width * 0.7},${
        height * 0.35
      } ${width},${height * 0.4} ${width * 0.8},${height * 0.7} ${
        width * 0.85
      },${height} ${width / 2},${height * 0.85} ${width * 0.15},${height} ${
        width * 0.2
      },${height * 0.7} 0,${height * 0.4} ${width * 0.3},${
        height * 0.35
      }" fill="${color}"></polygon>`;
      return starElementStr;
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
