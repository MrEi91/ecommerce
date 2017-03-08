const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce', (err) => {
  err ? console.log('belum connect') : console.log('connected')
})
mongoose.Promise = global.Promise

const app = express()

let index = require('./routes/index')
// let twatt_recent = require('./routes/twatt-recent')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)
// app.use('/api/twatt', twatt_recent)

app.listen(3000)

module.exports = app
