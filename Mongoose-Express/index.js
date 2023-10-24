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
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("./products/index", { products });
});
app.get("/products/new", (req, res) => {
  res.render("products/new");
});
// new should be before /:id because it can lead to express thinking new is an id and try to get the id from mongo which does not exist leading to crashing the server

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect("/products");
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  // console.log(product);
  res.render("products/show", { product });
});

app.listen(3000, () => {
  console.log("Listening On Port 3000");
});
