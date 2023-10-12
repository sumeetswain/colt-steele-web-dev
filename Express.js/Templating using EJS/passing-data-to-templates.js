const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// using JS in ejs file and conditionals(if else)
app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  // we can do the math in the ejs file itself but it is preferred to do it in here
  res.render("random", { randomNumber }); // sending a variable to ejs file
});
// sending variables to ejs
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit }); // always send the variable in curly braces
});
// using for loops in ejs
app.get("/heroes", (req, res) => {
  const heroes = ["Mercy", "Lucio", "Reaper", "Cassidy", "Winston"];
  res.render("heroes", { heroes });
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
