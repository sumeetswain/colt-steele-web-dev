class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
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
}

const purple = new Color(123, 45, 167, "purple");
const white = new Color(255, 255, 255, "white");
