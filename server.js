const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 7000
const authRoute = require("./routes/auth")

dotenv.config()
app.use(express.json())



mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
.then(console.log("Connected to MongoDB"))
.catch((err)=> console.log(err));


app.use("/api/auth", authRoute);


app.listen(PORT, ()=> {
    console.log('app is running on port: ', PORT)
});