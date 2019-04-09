const express = require('express')
const { Women_details } = require('../db')

const route = express.Router()

route.post(
    '/',
    (req, res) => {
        let credentials = req.body
        Women_details.count({ where: { email: credentials.email } })
        .then((count) => {
            if(count > 0) {
                return res.send({success: false})
            } else {
                    Women_details.create({
                        
                        email: credentials.email,
                        password: credentials.password,
                        name: credentials.username
                        //phone_no: credentials.phone_no
                    })
                    res.send({success: true})
            }        
        })
    })
    
module.exports = route