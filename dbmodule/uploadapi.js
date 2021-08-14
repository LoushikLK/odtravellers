const express = require('express')
const mongoose = require('mongoose')

const uploadschema = new mongoose.Schema({
    imageurl: String,
    imagedate: String,
    placename: String,
    statename: String
})

const uploadApi = mongoose.model('uploadapi', uploadschema)

module.exports = uploadApi