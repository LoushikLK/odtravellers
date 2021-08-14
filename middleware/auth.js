const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

require('../dbmodule/mongooseConnect')
const adminlog = require('../dbmodule/adminlog')
const SECRET_KEY = process.env.SECRET_KEY

//////work needed
const auth = (req, res, next) => {
    console.log(req.body)

    jwt.verify(req.body.authToken, SECRET_KEY, (err, verify) => {
        if (err) {
            res.status(401).json({ msg: 'user is not authorised' })
        }
        else if (verify) {
            // res.status(200).json({ msg: 'user verifyed' })
            console.log('verified')
            next()
        }
        else {
            res.status(400).json({ msg: 'somthing went wrong login again' })
        }
    })

}
module.exports = auth