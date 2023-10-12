const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // Creates a new array with the same elements

const originalObject = { a: 1, b: 2 };
const copyObject = { ...originalObject }; // Creates a new object with the same properties and values

originalObject.a = 2;
console.log(originalObject);
console.log(copyObject);
