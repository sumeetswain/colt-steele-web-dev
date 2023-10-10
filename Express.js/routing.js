const express = require("express");
const app = express();

// * Routing is generating responses for specific requests/paths in our server
app.get("/", (req, res) => {
  res.send("Welcome Home!(This is the Home Page)");
  // this will run when user goes to localhost:8080/ i.e the Home Page
});

app.get("/cats", (req, res) => {
  console.log("cat request");
  res.send("Here is your cat!");
  // this will run when user goes to localhost:8080/cats
});

app.post("/cats", (req, res) => {
  res.send("This is a post request to /cats");
});
app.get("/dogs", (req, res) => {
  console.log("dog request");
  res.send("Here is your dog!");
  // this will run when user goes to localhost:8080/dogs
});
app.get("*", (req, res) => {
  res.send("Unknown Path");
  // this is a response for all the paths we have not set for e.g localhost:8080/dasasd
  // ! this path must be set at the end, if it is set at the start all the requests will be responded with "Unknown Path"
});
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
