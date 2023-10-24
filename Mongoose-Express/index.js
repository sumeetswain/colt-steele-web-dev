const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log("Mongo Error", err);
  });

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/dog", (req, res) => {
  res.send("Request Recieved");
});
app.listen(3000, () => {
  console.log("Listening On Port 3000");
});
