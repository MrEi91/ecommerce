'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = Schema({
  'memberId': String,
  'total': Number,
  'transactionDate': Date,
  'itemList': [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }]
})

let cart = mongoose.model('cart', cartSchema)

module.exports = cart
