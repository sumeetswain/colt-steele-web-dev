const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require("./models/product");
const AppError = require("./AppError");
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
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

//* Index Page
app.get("/products", async (req, res, next) => {
  try {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("./products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("./products/index", { products, category: "All" });
    }
  } catch (e) {
    next(e);
  }
});

//* Home Page
app.get("/", (req, res) => {
  res.send("home");
});

//* Form to create new product
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});
// new should be before /:id because it can lead to express thinking new is an id and try to get the id from mongo which does not exist leading to crashing the server

//* Form submit to /products
app.post("/products", async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect("/products");
  } catch (e) {
    next(e);
  }
  // if the user attempts to add a product without the name or the price which is required in our db then it will be sent to the error handling middleware which displays the error
});

//* Details Page
app.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product Not Found", 404);
      // if there is no product with the id in URL then we will send the message and status code to the next error handler
    }
    res.render("products/show", { product });
  } catch (e) {
    next(e);
  }
});

//* Update Page
app.get("/products/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product, categories });
  } catch (e) {
    next(e);
  }
});

//*Edit form Submission
app.put("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    // req.body has all the info that was changed using the form so we can use req.body to update the product
    // console.log(req.body);
    res.redirect(`/products/${product._id}`);
  } catch (e) {
    next(e);
  }
});

//*Product Delete
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong" } = err;
  res.status(status).send(message);
  // here we will display the status code in the console log and message will be sent back to the usert on the page
});
app.listen(3000, () => {
  console.log("Listening On Port 3000");
});
