'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = Schema({
  'memberId': String,
  'total': Number,
  'transactionDate': {
    type: Date,
    default: Date.now
  },
  'itemList': [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'item'
    },
    qty: Number
  }]
}, {
  timestamps: true
})

let cart = mongoose.model('cart', cartSchema)

module.exports = cart

// {
//   memberId: '4444',
//   itemList: [{
//     item,
//     qty
//   }]
// }
//
// cart.total
// cart.itemList.forEach(function(val) {
//   val.item.itemCode
//   val.item.price
//   val.qty
// })
