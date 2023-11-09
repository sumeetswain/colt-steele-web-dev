const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");
app.use("/", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);
// the first parameter is the prefix for the given route and the 2nd parameter is the route we are going to use for it
// in shelters we didnt provide a prefix so we will use the routes given in the shelter.js file
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
