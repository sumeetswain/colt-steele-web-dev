const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json"); //you have to put./ first to indicate that the file is in the same directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  //we are taking the name of subreddit from the request and then looking for the data in the json file
  if (data) {
    res.render("subreddit", { ...data }); // using spread operator(...data) we are sending a new object with the same values as data but we can access them saying title instead of data.title and author instead of data.author
  } else {
    res.render("notfound", { subreddit });
  }
});
app.get("*", (req, res) => {
  res.send("I dont know that path");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
