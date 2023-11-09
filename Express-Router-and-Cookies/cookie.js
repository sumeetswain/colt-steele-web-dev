const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser("secrettext"));
//secrettext is used in signed cookies

app.get("/greet", (req, res) => {
  // here we use that cookie to print the name
  const { name = Guest } = req.cookies;
  console.log(req.cookies);
  res.send(`Hello There ${name} !`);
});
app.get("/setname", (req, res) => {
  //here we set the name to bulbasaur in the cookies
  res.cookie("name", "Bulbasaur");
  res.send("Cookie Time!!!");
});
app.get("/signedcookie", (req, res) => {
  // here we make a signed cookie which is used to make sure the cookie isnt tampered ie changed
  res.cookie("fruit", "mango", { signed: true });
  res.send("Signed the cookie");
});
app.get("/verifycookies", (req, res) => {
  //   res.send(req.cookies);
  res.send(req.signedCookies);
  console.log(req.cookies);
  //when the signed cookies have been changed/tampered, it will show false in the value section of that cookie
});
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
