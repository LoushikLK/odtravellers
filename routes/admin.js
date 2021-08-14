const express = require('express')
const app = express();
const router = express.Router();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser)
const bcrypt = require('bcrypt')
const saltRounds = 10;
const cookieParser = require("cookie-parser");

app.use(cookieParser());

require('../dbmodule/mongooseConnect')
const adminlog = require('../dbmodule/adminlog')

//////////////////////////////////auth middle ware/////////////////////////
const login = require('../middleware/login');




router.post('/login', login, (req, res) => {
    console.log(req.body)
    // res.send({ msg: "data sand sucesses" })
})


module.exports = router