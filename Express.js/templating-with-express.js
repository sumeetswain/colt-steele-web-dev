const express = require("express");
const app = express();

app.set("view engine", "ejs"); // setting the views template engine

app.get("/", (req, res) => {
  res.render("home"); // no need to pass the path or file type, ejs will do it automatically
  // instead of sending a response we send a ejs file which will be rendered to HTML
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
