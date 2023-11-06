const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");
const Farm = require("./models/farm");
const categories = ["fruit", "vegetable", "dairy"];

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStandTake2")
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log("Mongo Connection Error");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// FARM ROUTES
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms });
});
app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});
app.get("/farms/:id", async (req, res) => {
  const farm = await Farm.findById(req.params.id).populate("products");
  res.render("farms/show", { farm });
});
app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.redirect("/farms");
});
app.get("/farms/:id/products/new", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render("products/new", { categories, farm });
});
app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, category, price } = req.body;
  const product = new Product({ name, price, category });
  farm.products.push(product);
  await farm.save();
  product.farm = farm;
  await product.save();
  res.redirect(`/farms/${id}`);
});
app.delete("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findByIdAndDelete(id);
  res.redirect("/farms");
});

//Product routes
// * Index Page
app.get("/products", async (req, res, next) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("./products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("./products/index", { products, category: "All" });
  }
});
//* Details Page
app.get("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("farm", "name");
  if (!product) {
    throw new AppError("Product Not Found", 404);
    // if there is no product with the id in URL then we will send the message and status code to the next error handler
  }
  res.render("products/show", { product });
});

//* Update Page
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

//*Edit form Submission
app.put("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  // req.body has all the info that was changed using the form so we can use req.body to update the product
  // console.log(req.body);
  res.redirect(`/products/${product._id}`);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});
