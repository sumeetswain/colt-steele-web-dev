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
  { id: 1, username: "Tom", comment: "LOL" },
  { id: 2, username: "Harry", comment: "Trash" },
  { id: 3, username: "Doomslayer58", comment: "Epic" },
  { id: 4, username: "barbieloverxoxo", comment: "Cutee" },
];
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments }); // to display all the comments(array)
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new"); // form to create a new comment
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body; //destructuring from req.body
  comments.push({ username, comment }); //pushing into the comments array
  // res.send("working");
  res.redirect("/comments"); // redirecting to the main page of comments after adding new comment
});
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
  res.render("comments/show", { comment });
});
app.get("/puppies", (req, res) => {
  res.send("GET /puppies response");
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
