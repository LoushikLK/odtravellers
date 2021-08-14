const express = require("express")
const mongoose = require('mongoose')



const url = "mongodb+srv://loushik:Wy8x51bWe6gVymXB@cluster0.pz3vj.mongodb.net/reactTravel?retryWrites=true&w=majority" || process.env.MONGODB_URL

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log('connection sucessfull lk')
}).catch((err) => {
    console.log(err);
})


module.exports = mongoose.connect;