const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieDB")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

// * Inserting in MongoDB
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: String,
  rating: String,
});
//making a model/template to create a collection in mongo

const Movie = mongoose.model("Movie", movieSchema); // saving it to a variable creates a class
// first pass the name of the model and 2nd the template we are following
// mongoose creates a collection using the 1st name, so our collection name would be movies

// const golmaal = new Movie({
//   title: "Golmaal",
//   year: 2005,
//   score: 8.7,
//   rating: "E",
// });
// golmaal.save();

// Movie.insertMany([
//   { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
//   { title: "Alien", year: 1979, score: 8.1, rating: "R" },
//   { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//   { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
//   { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
// ]).then((data) => {
//   console.log("working");
//   console.log(data);
// });

// * Updating using mongoose
