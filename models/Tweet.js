const mongoose = require("mongoose")

const TweetSchema = new mongoose.Schema(
{
    title: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
    },
    image: {
        type: String,
        required:true,
    },
    description: {
        type:String,
        required:true
    },
    linkedin: {
        type:String,
        required:true,
    },
    github: {
        type: String,
        required:true,
    }
},
{ timestamps: true }
);

module.exports = mongoose.model("Tweet", TweetSchema);