const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  // we can do the math in the ejs file itself but it is preferred to do it in here
  res.render("random", { randomNumber }); // sending a variable to ejs file
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
