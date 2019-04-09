const express = require('express')
const { db,Products } = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('welcome')
})

app.get('/happymenses', (req, res) => {
    res.render('happymenses')
})

app.use('/signup', require('./routes/signup'))
app.use('/login', require('./routes/login'))
app.use('/products', require('./routes/products'))
app.use('/addtocart', require('./routes/addtocart'))



db.sync({ alter: true })
  .then(() => {
    app.listen(9876, () => {
      console.log('Server started on http://localhost:9876')
    })
  })
  .catch(console.error)