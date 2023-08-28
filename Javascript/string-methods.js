let msg = "this is a message";
let newMsg = msg.toUpperCase();
console.log(newMsg);

let msg2 = "              this is also a message                     ";
let newMsg2 = msg2.trim();
console.log(newMsg2);
//* trim removes the whitespace from start and end of a string

let realEmail = "         ReAleMaIl@email.com";
// * we can chain methods together meaning more than one method can be applied at a time
let actualEmail = realEmail.trim().toLowerCase();
console.log(actualEmail);
