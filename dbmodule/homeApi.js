const mongoose = require('mongoose')

const homeApiSchema = new mongoose.Schema({
    about: String,
    date: Number,
    imgsrc: String,
    link: String,
    place: String,
})


const homeApi = mongoose.model("homeApi", homeApiSchema)

module.exports = homeApi


