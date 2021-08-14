const express = require('express')
const app = express()
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const path = require("path");
app.use(express.json());
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(bodyParser.json())
app.use(cookieParser());
require('../dbmodule/mongooseConnect')
const adminlog = require('../dbmodule/adminlog');
const router = require('../routes/admin');
const SECRET_KEY = process.env.SECRET_KEY


const login = async (req, res, next) => {

    try {
        console.log(req.body.password)

        const authdata = await adminlog.findOne({
            username: req.body.username
        })
        if (authdata) {
            console.log(authdata)
            const mathed = await bcrypt.compare(req.body.password, authdata.password)

            const token = await jwt.sign({ _id: authdata._id }, SECRET_KEY, { expiresIn: '1000000' })
            console.log(token)




            if (!mathed) {
                console.log("password is wrong")
                res.status(400).json({
                    msg: "Wrong Input Credential"

                })
            }
            else {
                adminlog.findByIdAndUpdate({ _id: authdata._id }, { "token": token }, (error, result) => {
                    if (error) {
                        console.log(error)
                        res.status(400).send(error)
                    }
                    else {
                        // res.cookie("token", result)
                        console.log("updating token")
                        res.json(JSON.stringify({
                            msg: "token created",
                            token: token
                        }))
                    }
                })
                next()
            }
        }
        else {
            res.status(401).json({ msg: 'You Are Not Authorised' })

        }
        console.log('auth working')
    }

    catch (error) {
        res.status(400).json({ msg: 'Somthing wrong with the Server' })
    }

}


module.exports = login