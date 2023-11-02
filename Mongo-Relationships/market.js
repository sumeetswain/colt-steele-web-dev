const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose
  .connect("mongodb://127.0.0.1:27017/marketDB")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const productSchema = new Schema({
  name: String,
  price: String,
  season: {
    type: String,
    enum: ["Winter", "Summer", "Monsoon"],
    // enum means the season should have value as elements from this array only
  },
});

const marketSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

// Product.insertMany([
//   {
//     name: "Papaya",
//     price: 40,
//     season: "Winter",
//   },
//   {
//     name: "Mango",
//     price: 80,
//     season: "Summer",
//   },
//   {
//     name: "WaterMelon",
//     price: 60,
//     season: "Monsoon",
//   },
// ]);
const Product = mongoose.model("Product", productSchema);
const Market = mongoose.model("Market", marketSchema);

const makeMarket = async () => {
  const market = new Market({ name: "Apna Bhandar", city: "Thane" });
  const mango = await Product.findOne({ name: "Mango" });
  market.products.push(mango);
  console.log(market);
  market.save();
};
// makeMarket();
const addProduct = async () => {
  const market = await Market.findOne({ name: "Apna Bhandar" });
  const papaya = await Product.findOne({ name: "Papaya" });
  market.products.push(papaya);
  market.save();
};
// addProduct();
Market.findOne({ name: "Apna Bhandar" })
  .populate("products")
  .then((farm) => console.log(farm));
// * .populate will take the object id in the market collection and replace it with the products that the id is refering
