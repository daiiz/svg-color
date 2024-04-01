const figureElementStr = (function () {
  if (shape === "square") {
    // GitHub Copilot: 視覚的にバランスの良い正方形を書く。上下左右にわずかに余白を設ける。
    const margin = width * 0.1;
    return `<rect x="${margin}" y="${margin}" width="${
      width - margin * 2
    }" height="${height - margin * 2}" fill="${color}"></rect>`;
  } else if (shape === "circle") {
    // GitHub Copilot: 視覚的にバランスの良い円形を書く。上下左右にわずかに余白を設ける。
    const radius = width / 2;
    const cx = width / 2;
    const cy = height / 2;
    const margin = width * 0.1;
    return `<circle cx="${cx}" cy="${cy}" r="${
      radius - margin
    }" fill="${color}"></circle>`;
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
  } else if (shape === "down_pointing_triangle") {
    // GitHub Copilot: 視覚的にバランスの良い逆正三角形を書く。上下の余白が均等になるように配置する。
    const side = width * 0.8;
    const height = (Math.sqrt(3) / 2) * side;
    const topMargin = (width - side) / 2;
    const bottomMargin = (width - side) / 2;
    const trianglePoints = [
      `${topMargin},${bottomMargin}`,
      `${topMargin + side / 2},${height + bottomMargin}`,
      `${topMargin + side},${bottomMargin}`,
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
