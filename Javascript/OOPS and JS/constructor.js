class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
    // here by using this.r we are setting the value of color.r to the value we send while creating the new color
  }
  // the following functions are added to the prototype of the color meaning we dont have to set them for every color
  baseRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
    // this function takes the rgb from the declared color and then returns a string with the rgb values
  }
  //  when a function is named constructor inside a class it will run automatically wihtout being called
  //  so in this scenario the constructor will run whenever we make a new color
  rgb() {
    return `rgb(${this.baseRGB()})`;
    //  here this refers to firstColor and extracts the value of r,g and b from the object
  }
  rgba(a = 1.0) {
    return `rgba(${this.baseRGB()},${a})`;
    // we have to execute baseRGB because it is a function
    // when we access this property we have to send the value of alpha(a) because it is not being set while creating a new color
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    // ? why cant we just send r, g and b into hex as parameters and then execute the above line??
  }

  // * More Classes Practice
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h},${s}%,${l}%)`;
  }
  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue},${s}%,${l}%)`;
  }
  fullySaturated() {
    const { h, l } = this;
    return `hsl(${h},100%,${l}%)`;
  }
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const purple = new Color(123, 45, 167, "purple");
const white = new Color(255, 255, 255, "white");
