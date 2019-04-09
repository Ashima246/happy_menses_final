const express = require('express')
        const { Cart_Items, Products } = require('../db')
        
        const route = express.Router()
        
        route.get(
            '/', 
            async (req, res) => {
                let userId = req.query.userId
                let cartItems = await Cart_Items.findAll({
                    where: {
                        womenDetailId: userId
                    },
                    include: [Products]
                })
                res.send(cartItems)
            }
            )
            //async-await
            //promise->then/catch then(_returned thing/value from previous_)
            
            route.post(
                '/',
                async (req, res) => {
                    let userId = req.body.userId,
                    productId = req.body.productId
                    //quantity check 1. add quantity column->2.check  if present update quant else create row
                    return Cart_Items.count({ 
                        where: {
                            productId: productId,
                            womenDetailId: userId
                        }
                    })
                    .then(async (count)=>{
                        if(count > 0) {
                            await Cart_Items.update({ quantity: sequelize.literal('quantity + 1')}, { where: { productId:productId, womenDetailId: userId } } )
                        } 
                        else{   
                            await Cart_Items.create({
                                womenDetailId: userId,
                                productId: productId
                                
                            })
                        }
                        let cartItems = await Cart_Items.findAll({
                            where: {
                                womenDetailId: userId
                            },
                            include: [Products]
                        })
                        res.send(cartItems)
                    })
                })
                
                module.exports = route