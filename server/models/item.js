'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = Schema({
  'itemCode': String,
  'name': String,
  'description': String,
  'price': Number,
  'stock': Number
}, {
  timestamps: true
})

let item = mongoose.model('item', itemSchema)

module.exports = item
