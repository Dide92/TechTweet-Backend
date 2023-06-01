const router = require("express").Router()
const Tweet = require("../models/Tweet");

//GET

router.get('/', async (req, res) => {
    try{
        const getTweet = await Tweet.find({});
        res.status(200).json(getTweet)
    }catch(err) {
        res.status(500).json(err)
    }
})


//CREATE

router.post('/new', async (req, res) => {
    try {
      const createdTweet = await Tweet.create(req.body);
      console.log(createdTweet);
      res.status(200).json(createdTweet);
    } catch (error) {
      console.log(error, "THIS IS THE ERROR");
      res.status(500).json(error);
    }
  });
  
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

  //DELETE

  router.delete("/:id", async (req, res) => {
    try {
      const deleteTweet = await Tweet.findById(req.params.id);
      try {
        const deletedTweet = await Tweet.findByIdAndDelete({_id: req.params.id}, req.body, {new: true});
        res.status(200).json(deletedTweet);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }

  });
  
  
module.exports = router