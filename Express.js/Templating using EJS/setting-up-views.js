const express = require("express");
const app = express();
const path = require("path"); // this is used to set up file paths
app.set("view engine", "ejs"); // setting the views template engine
// the issue with not setting the path is when we run our file from other folders it will look for /views in that folder and fail to render
app.set("views", path.join(__dirname, "/views"));
// this is done if we want to run our file from any folder and still render from views folder
app.get("/", (req, res) => {
  res.render("home"); // no need to pass the path or file type, ejs will do it automatically
  // instead of sending a response we send a ejs file which will be rendered to HTML
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
