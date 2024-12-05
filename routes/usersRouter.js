const express = require("express");
const router = express.Router();
const { registerUser }  = require("../controllers/auth-controller")

router.get("/", (req, res) => {
  res.send("hey");
});

router.post("/register", registerUser);

module.exports = router;
