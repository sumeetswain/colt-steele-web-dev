const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Dogs");
});

router.post("/", (req, res) => {
  res.send("Creating One Dog");
});
router.get("/:id", (req, res) => {
  res.send("Viewing One Dog");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing One Dog");
});

module.exports = router;
