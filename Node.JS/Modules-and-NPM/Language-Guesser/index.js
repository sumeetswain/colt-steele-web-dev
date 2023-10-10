const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
// importing the packages
const input = process.argv[2]; // taking the argument from the command after filename and storing it in input
const langCode = franc(input);
if (langCode === "und") {
  console.log("Couldnt find the language, try again with more sample text".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is :${language.name}`.green);
}

// ! if the string passed to franc is too short it gives the following error
// ! Cannot read properties of undefined (reading 'name')
// * langs isnt always accurate and is mostly guesswork
