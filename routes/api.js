const express = require('express');
const router = express.Router()
const app = express()

require('../dbmodule/mongooseConnect')
const uploadApi = require('../dbmodule/uploadapi');
const auth = require('../middleware/auth')


router.post('/upload', auth, (req, res) => {
    console.log('req resived')
    console.log(req.body)

    const uploaddata = new uploadApi({
        imageurl: req.body.imageurl,
        imagedate: req.body.imagedate,
        placename: req.body.placename.toUpperCase(),
        statename: req.body.statename.toUpperCase()
    })
    uploaddata.save().then(() => {
        res.status(200).json({ msg: 'Data Upload To Database Successfully Try Another' });
    }).catch((err) => {
        res.status(400).json({ msg: err })
    })
})
module.exports = router