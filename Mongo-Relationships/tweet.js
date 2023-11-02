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

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});
const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweet = async () => {
  //   const user = new User({ username: "hello", age: 17 });
  const user = await User.findOne({ username: "hello" });
  const tweet2 = new Tweet({
    text: "Hello World 2 !",
    likes: 71,
  });

  tweet2.user = user;
  tweet2.save();
};

const findTweet = async () => {
  const t = await Tweet.find({}).populate("user", "username");
  // second parameter in populate can be used to print specific fields in the user object
  console.log(t);
};
findTweet();
