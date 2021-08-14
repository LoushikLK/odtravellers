const mongoose = require('mongoose')

const adminAuthSchema = new mongoose.Schema({
    username: String,
    password: String,
    token: String,
})


const adminlog = mongoose.model("adminAuth", adminAuthSchema)

module.exports = adminlog