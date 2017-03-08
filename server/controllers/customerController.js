'use strict'
const express = require('express')
const router = express.Router()
const customer = require('../models/customer')

let createCustomer = (req, res, next) => {
  customer.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let readCustomers = (req, res, next) => {
  customer.find({}).then((data) => {
    !data ? res.send('Customer is not defind') : res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateCustomer = (req, res, next) => {
  customer.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Customer is not defind')
    } else {
      data.update(req.body).then((result) => {
        res.send(result)
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

let removeCustomer = (req, res, next) => {
  customer.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Customer is not defind')
    } else {
      data.remove(req.params.id).then((result) => {
        res.send('Customer has been deleted')
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

module.exports = {
  readCustomers,
  createCustomer,
  updateCustomer,
  removeCustomer
}
