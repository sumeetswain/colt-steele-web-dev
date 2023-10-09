// when we are exporting an entire directory/folder we name a file as index.js all import all the functions and variables into that file
const cyan = require("./cyan");
const purple = require("./purple");
const beige = require("./beige");
const allColors = [cyan, purple, beige];
// console.log(allColors);
// and now we export allColors
module.exports = allColors;
