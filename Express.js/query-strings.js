const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  //   console.log(req.query);
  //   res.send("Hello");
  const { q } = req.query;
  if (!q) {
    res.send("Nothing Found If Nothing Searched");
  }
  res.send(`Displaying Search Results :${q}`);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
