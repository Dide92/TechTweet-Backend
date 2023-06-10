const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')

// Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(201).json("User has been created: " + user);
  } catch (err) {
    if (err.code === 11000) {
    res.status(400).json("Username already exists");
    } else {
      res.status(500).json(err);
    }
  }
});

//LOGIN

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json("User does not exist. Please register.");
      }
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        return res.status(400).json("Wrong password!");
      }
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
