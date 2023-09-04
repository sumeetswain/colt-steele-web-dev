let maxNumber = prompt("Enter the max number");
const randomNumber = Math.floor(Math.random() * maxNumber);

let guessNumber = prompt("Guess the random number!");
while (guessNumber !== randomNumber) {
  if (guessNumber === randomNumber) break;
  if (guessNumber > randomNumber) guessNumber = prompt("too high");
  else if (guessNumber < randomNumber) guessNumber = prompt("too low");
}
console.log("congrats");
