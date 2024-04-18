const express = require('express');
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");

const Data = require("./user");
const config = require("./config");

const app = express();
const PORT = 8080;

// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(express.static("public"));

// Connect to MongoDB
// config.js
mongoose.connect(config.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(PORT,()=>{
    console.log("App is running on port "+PORT)
})