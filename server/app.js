const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce', (err) => {
  err ? console.log('is not connected') : console.log('connected')
})
mongoose.Promise = global.Promise

const app = express()

let index = require('./routes/index')
let item = require('./routes/item')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)
app.use('/api/items', item)

app.listen(3000)

module.exports = app
