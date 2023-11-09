const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("Sorry, You're not an admin");
});

router.get("/secret", (req, res) => {
  res.send("This is a secret");
});
module.exports = router;
