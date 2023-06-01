const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")


const PORT = process.env.PORT || 7000
const tweetRoute = require("./routes/tweets")
const authRoute = require("./routes/auth")

dotenv.config()
app.use(express.json())
app.use(cors());

mongoose.set('strictQuery', true);
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
.then(console.log("Connected to MongoDB"))
.catch((err)=> console.log(err));


app.use("/api/tweets", tweetRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, ()=> {
    console.log('app is running on port: ', PORT)
});