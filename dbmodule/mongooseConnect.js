const express = require("express")
const mongoose = require('mongoose')



const url = process.env.MONGODB_URL

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log('connection sucessfull lk')
}).catch((err) => {
    console.log(err);
})


module.exports = mongoose.connect;