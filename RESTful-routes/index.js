const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
//we have to tell express to parse the data being sent to it and here we are telling it to parse the form data
// by default the data is in text form
app.use(express.json()); // now we are parsing json data
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "Tom",
    comment: "LOL",
  },
  {
    username: "Harry",
    comment: "Trash",
  },
  {
    username: "Doomslayer58",
    comment: "Epic",
  },
  {
    username: "barbieloverxoxo",
    comment: "Cutee",
  },
];
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/puppies", (req, res) => {
  res.send("GET /puppies response");
});
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.send("working");
});
app.post("/puppies", (req, res) => {
  const { breed, number } = req.body; // destructuring the request body after parsing
  res.send(`Here are your ${number} ${breed} puppies`);
  //   console.log(req.body);
  //   res.send("POST /puppies response");
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
