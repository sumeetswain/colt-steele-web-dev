let dog = {
  age: 10,
  name: "Brick",
  owner: "Bartholomew Jr The 3rd",
};

let dogJSON = JSON.stringify(dog);
console.log(dogJSON);
// * JSON.stringify converts a JS object into valid JSON format string

let newDog = JSON.parse(dogJSON);
console.log(newDog);
// * JSON.parse converts a JSON string into a JS object
