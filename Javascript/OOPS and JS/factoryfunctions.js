function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r},${g},${b})`;
}

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    // the values of r,g and b are extracted from the object color by using keyword 'this'
    // the same thing can be done by return `rgb(${this.r},${this.g},${this.b})` where this keyword will take the values from the color object
    return `rgb(${r},${g},${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}
// (123,114,22)
const newColor = makeColor(123, 114, 22);
newColor.rgb();
newColor.hex();
