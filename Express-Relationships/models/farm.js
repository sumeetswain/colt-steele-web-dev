const mongoose = require("mongoose");
const { Schema } = mongoose;
const Product = require("./product");

const farmSchema = new Schema({
  name: {
    type: String,
    required: [true, "Farm name is required !"],
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required !"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

farmSchema.post("findOneAndDelete", async function (farm) {
  if (farm.products.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.products } });
    console.log(res);
  }
  console.log("Post middlware");
  console.log(farm);
});
const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm;
