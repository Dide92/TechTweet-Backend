const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const db = mongoose.connection
dotenv.config()

const app = express()
const PORT = process.env.PORT || 7000

app.get('/', (req, res) => {
    res.send("hello")
});

app.listen(PORT, ()=> {
    console.log('app is running on port: ', PORT)
});