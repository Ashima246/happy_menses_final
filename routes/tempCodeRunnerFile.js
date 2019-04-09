
    name :"product"+i,
    quantity: i+2,
    price: i*10

  })
}

route.get(
    '/',
    async (req, res) => {
        let products = await Products.findAll()
        res.send(products)
    }
)
module.exports = route