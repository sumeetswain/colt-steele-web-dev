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
// creating a new product
const s = new Product({
  name: "Sunflower Seeds",
  price: 30,
  category: "vegetable",
});
//saving the product in the db
s.save()
  .then((s) => {
    console.log(s);
  })
  .catch((err) => {
    console.log("error", err);
  });

//creating an array to insert in the db using insertMany
const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];
// inserting using insertMany
Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error", err);
  });
