const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

///////////////////////mongo db////////////////////////////////
require('../dbmodule/mongooseConnect')

const uploadApi = require('../dbmodule/uploadapi')


router.get('/api', (req, res) => {

    uploadApi.find((err, result) => {
        if (err) return console.error(err);

        // console.log(data + 'yes');
        else if (result) {

            res.status(200).json(result)
        }
    })

})

module.exports = router