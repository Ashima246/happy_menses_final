const express = require('express')
const { Women_details } = require('../db')

const route = express.Router()

route.post(
    '/',
    (req, res) => {
        var email = req.body.email,
            password = req.body.password;
            return Women_details.findOne({where: {email: email , password: password}})
            .then((row)=>{
                if(row == null){
                    
                    res.send({success: false})
                }
                else{
                    return res.send({name: row.name, id: row.id, success: true})
                }
            })
    })
    module.exports = route