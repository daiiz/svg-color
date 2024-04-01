const createSvgStr = ({ color, shape }) => {
  console.log("color", color, "shape", shape);
  const width = 20;
  const height = 20;
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <rect x="0" y="0" width="${width}" height="${height}" fill="${color}"></rect>
    </svg>`;
};

const createResponseHeader = ({ color }) => {
  return {
    "Content-Type": 'image/svg+xml; charset="utf-8";',
    "X-COLOR": color,
  };
};

module.exports = {
  createSvgStr,
  createResponseHeader,
};
