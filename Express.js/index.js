const express = require("express");
const app = express();
// console.dir(app);
app.use(() => {
  console.log("New Request");
});
// everytime we get a new request on our server, the app.use function is called
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
// we started a new server on port 3000 and it is listening for requests
// port is basically an address on a computer we are using to process requests
