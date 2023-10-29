const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

// app.use((req, res, next) => {
//   console.log("First Middleware");
//   return next(); // next is a argument we send in the callback function and it is used to go to the next matching middleware i.e the next app.use
// });
// app.use((req, res, next) => {
//   console.log("Second Middleware");
//   return next();
// });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("views"));
app.use((req, res, next) => {
  console.log(req.query);
  next();
});
const verifyPassword =
  ("/secret",
  (req, res, next) => {
    const { password } = req.query;
    if (password === "open") {
      // res.send("Welcome"); // this works too
      next();
      // now when the password is open we got to the response of the page as the middleware is finished
    } else {
      res.render("password");
      //if password is wrong we send this response
    }
  });
//now this function can be used in multiple routes to verify password and if it is valid then we can send a response
app.use((req, res, next) => {
  console.log(req.method.toUpperCase(), req.path);
  next();
});
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/dogs", verifyPassword, (req, res) => {
  res.send("dog page");
});
app.get("/secret", verifyPassword, (req, res) => {
  res.render("enter");
});
app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
  // if nothing else matches with the requests this function will run and send back a 404 error with NOT FOUND as text
});
app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
