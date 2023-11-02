const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDB")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
const makeUser = async () => {
  const u = new User({
    first: "Harry",
    last: "Potter",
  });
  u.addresses.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await u.save();
  console.log(res);
};
// makeUser();

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "Blah",
    city: "Blah",
    state: "Blah",
    country: "Blah",
  });
  const res = await user.save();
  console.log(user);
  mongoose.connection.close(); // to close the connection after the address has been inserted
};
addAddress("65437eefa8d43d9c3fe82e4e");
