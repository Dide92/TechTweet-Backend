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

module.exports = router