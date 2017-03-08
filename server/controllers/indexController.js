'use strict'
const express = require('express')
const router = express.Router()
const SEED_ITEMS = require('../seeders/itemSeeders')
const SEED_CUSTOMER = require('../seeders/customerSeeders')
const item = require('../models/item')
const customer = require('../models/customer')

module.exports = {
  seedItems: (req, res, next) => {
    item.insertMany(SEED_ITEMS).then((data) => {
      res.send(data)
    }).catch((err) => {
      if (err) throw err
    })
  },
  seedCustomers: (req, res, next) => {
    customer.insertMany(SEED_CUSTOMER).then((data) => {
      res.send(data)
    }).catch((err) => {
      if (err) throw err
    })
  },
  getItems: (req, res, next) => {
    res.send('E-Commerce')
  }
}
