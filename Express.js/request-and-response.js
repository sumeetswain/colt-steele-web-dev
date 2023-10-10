const express = require("express");
const app = express();
// console.dir(app);
app.use((req, res) => {
  console.log("New Request");
  //   res.send("This is a response to your request");
  // send() is basically the response we send to the user for the request
  // *   res.send({ color: "red" });  we can also send an object
  res.send("<h1> This is a response</h1>");
});
// everytime we get a new request on our server, the app.use function is called
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
// we started a new server on port 8080 and it is listening for requests
// port is basically an address on a computer we are using to process requests

//TODO we have to restart the server everytime we make a change in the code
