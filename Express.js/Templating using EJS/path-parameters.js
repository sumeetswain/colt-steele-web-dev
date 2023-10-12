const express = require("express");
const app = express();

app.get("/r/:subreddit", (req, res) => {
  // we can set a variable in our requests
  // so this will respond to all the requests on /r/anything-here
  const { subreddit } = req.params;
  res.send(`Welcome to r/${subreddit}`);
  //   console.log("This is a Subreddit");
});
app.get("/r/:subreddit/:user", (req, res) => {
  const { subreddit, user } = req.params;
  res.send(`Viewing Posts by ${user} on r/${subreddit}`);
  //   console.log("This is a Subreddit");
});
app.get("*", (req, res) => {
  res.send("Unknown Path");
});
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
