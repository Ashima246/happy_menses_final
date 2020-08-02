const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'hm',
    username: 'root',
    password: ''
  })
  const Products = db.define('products', {
    name: {
      type: Sequelize.STRING,
      allowNull: false

    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    }

  })

    
const Women_details = db.define('women_details', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
        },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // phone_no:{
    //     type:Sequelize.STRING,
    //     allowNull:false
    // }
  })

  const Cart_Items = db.define('cart_items',{
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
  }

  })
  Women_details.hasMany(Cart_Items)
  Cart_Items.belongsTo(Women_details)
  Products.hasMany(Cart_Items)
  Cart_Items.belongsTo(Products)

  const Invoice = db.define('invoice',{

  })
  
  Women_details.hasMany(Invoice)
  Invoice.belongsTo(Women_details)
  Products.hasMany(Invoice)
  Invoice.belongsTo(Products)
  

  // for(let i=0; i < 15; i++) {
  //   Products.create({
  //     name: `product ${i+1}`,
  //     quantity: 20,
  //     price: 2000
  //   })
  // }
  
  

  module.exports = {
      db,
   Women_details,
   Invoice,
   Products,
   Cart_Items
  }
