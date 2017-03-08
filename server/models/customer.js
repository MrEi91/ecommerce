'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerSchema = Schema({
  'name': String,
  'memberId': String,
  'address': String,
  'zipCode': String,
  'phone': String
})

let customer = mongoose.model('customer', customerSchema)

module.exports = customer
