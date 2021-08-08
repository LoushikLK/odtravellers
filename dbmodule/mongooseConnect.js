const express = require("express")
const mongoose = require('mongoose')


const url = "mongodb://localhost:27017/reactTravelapp" || process.env.MONGODB_URL

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connection sucessfull lk')
}).catch((err) => {
    console.log(err);
})


module.exports = mongoose.connect;