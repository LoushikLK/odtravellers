const express = require("express")
const app = express()
const mongoose = require('mongoose')
const router = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const path = require('path');
app.use(express.urlencoded({ extended: true }))


const homeApi = require('../dbmodule/homeApi')


/////////////////////////////////////mongodb database//////////////////////////////////////////
require('../dbmodule/mongooseConnect')



router.get('/', (req, res) => {

    homeApi.find(function (err, data) {

        if (err) return console.error(err);

        // console.log(data + 'yes');

        res.status(200).json(data)
    });
})

module.exports = router