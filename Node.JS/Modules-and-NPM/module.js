const math = require("./math");
console.log(math.pi);
console.log(math.square(21));

// we exported allColors from colors folder
const colors = require("./colors");
// ^^ it is getting stored in colors
// so now colors has allColors and we print colors
console.log(colors);
