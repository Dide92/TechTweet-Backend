const router = require("express").Router()
const Tweet = require("../models/Tweet");

//CREATE

router.post("/new", async (req, res) => {
    const newTweet = await new Tweet(req.body);
    try{
        res.status(200).json(newTweet)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE

router.put("/:id", async (req, res) => {
    try {
      const tweet = await Tweet.findById(req.params.id);
      try {
        const updatedTweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedTweet);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }

  });
  
module.exports = router