const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce', (err) => {
  err ? console.log('is not connected') : console.log('connected')
})
mongoose.Promise = global.Promise

const cors = require('cors')
const app = express()

let index = require('./routes/index')
let item = require('./routes/item')
let customer = require('./routes/customer')
let cart = require('./routes/cart')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)
app.use('/api/items', item)
app.use('/api/customers', customer)
app.use('/api/carts', cart)

app.listen(3000)

module.exports = app
