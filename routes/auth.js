const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(201).json("User has been created: " + user);
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      res.status(400).json("Username already exists");
    } else {
      // Other error
      res.status(500).json(err);
    }
  }
});

module.exports = router;
