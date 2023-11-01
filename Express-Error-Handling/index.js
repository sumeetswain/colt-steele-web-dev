const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

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
      next();
    } else {
      res.send("Sorry, Try Again");
    }
  });

app.use((req, res, next) => {
  console.log(req.method.toUpperCase(), req.path);
  next();
});

app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/error", (req, res) => {
  something.func();
});
app.get("/dogs", verifyPassword, (req, res) => {
  res.send("dog page");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("Welcome");
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});

// app.use((err, req, res, next) => {
// this code will only run when an error occurs
//   console.log("Error");
//   console.log(err); // logging the error
//   next(err); // passing the error to the next error handling middleware
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong" } = err;
  // destructuring status and message from err and setting default values for both of them if value is not available in err
  res.status(status).send(message);
  //message will be taken from the error object and sent to the user
});
app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
