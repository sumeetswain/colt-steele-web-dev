const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid"); // package to create unique ids
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
//we have to tell express to parse the data being sent to it and here we are telling it to parse the form data
// by default the data is in text form
app.use(express.json()); // now we are parsing json data
app.use(methodOverride("_method")); // to send patch and delete requests from forms
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  // creating unique ids for all the comments
  { id: uuid(), username: "Tom", comment: "LOL" },
  { id: uuid(), username: "Harry", comment: "Trash" },
  { id: uuid(), username: "Doomslayer58", comment: "Epic" },
  { id: uuid(), username: "barbieloverxoxo", comment: "Cutee" },
];
// Home page
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments }); // to display all the comments(array)
});
// Creating new comments
app.get("/comments/new", (req, res) => {
  res.render("comments/new"); // form to create a new comment
});
//post request from the form
app.post("/comments", (req, res) => {
  const { username, comment } = req.body; //destructuring from req.body
  comments.push({ username, comment, id: uuid() }); //pushing into the comments array
  // res.send("working");
  res.redirect("/comments"); // redirecting to the main page of comments after adding new comment
});
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params; // getting the id from the req
  const newCommentText = req.body.comment; //getting the comment
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText; // redeclaring the comment text
  res.redirect("/comments"); //redirecting to home page
});
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
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
