const express = require('express')
const { Products } = require('../db')

const route = express.Router()
// for(let i=1; i<15; i++)
// {
//   Products.create({
//     name :"product"+i,
//     quantity : i+2,
//     price: i*10

//   })
// }

route.get(
    '/',
    async (req, res) => {
        let products = await Products.findAll()
        res.send(products)
    }
)
module.exports = route