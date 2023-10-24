const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // now if we dont provide name while inserting in the collection then it will throw an error
    maxlength: 20,
    // if name of product is more than 20 characters then it will throw error
  },
  price: {
    type: Number,
    required: true,
    // if we send a string of number it will try to convert it into a number
    // but wont be able to convert a alphabet string to number
    min: [0, "Price Must be greater than 0"], // we can add validator messages here
    // if minimum price set is less than 0 it will throw error
  },
  onSale: {
    type: Boolean,
    default: false,
    // if value is not set while creating collection then default value will be set to false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    offline: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
    // this makes sure that the size would be  either S M or L and anything else will be returned as an error
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "T-shirt",
  price: 2000,
  color: "red", // sending info that is not mentioned in the model will be ignored while saving in the collection
  size: "L",
});
bike
  .save()
  .then((data) => {
    console.log("Saved");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

// Product.findOneAndUpdate(
//   { name: "Mountain Bike" },
//   { price: 60000 },
//   { new: true, runValidators: true }
// new will return the new value in console
// if runValidators is set to true so that user wont be able to insert invalid values
// both new and runValidators must be in the same object as it is the options object which comes 3rd
// )
//   .then((data) => {
//     console.log("Updated");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error");
//     console.log(err);
//   });
