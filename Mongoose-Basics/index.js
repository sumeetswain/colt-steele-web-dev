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

// * Updating using mongoose(In Shell)

// To update one
// Movie.updateOne({title:'Golmaal'},{year:2006}).then(m=>console.log(m))
// here we using title to look for the object we want to update and then we update the year to 2006 and log the message

// To update many
// Movie.updateMany({title:{$in:['Amadeus','Stand By Me']}},{score:10}).then(m=>{console.log(m)})

// To find one and update
// Movie.findOneAndUpdate({title:'The Iron Giant'},{score:7.0}).then(m=> console.log(m))
// this will return the old version of the object we are updating

// To find one and update(Returns new value)
// Movie.findOneAndUpdate({title:'The Iron Giant'},{score:7.8},{new:true}).then(m=> console.log(m))

// * Deleting using mongoose(In Shell)
// to delete the first value that matches
// Movie.deleteOne({title:'Amelie'}).then(msg => console.log(msg))

// to delete multiple values
//  Movie.deleteMany({year: {$gte:1999}}).then(m =>{console.log(m)})

// to find one and delete
//  Movie.findOneAndDelete({title:'Alien'}).then(m=> console.log(m))
// this will return the value that was deleted
