'use strict'
const express = require('express')
const router = express.Router()
const cart = require('../models/cart')

let createCart = (req, res, next) => {
  cart.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let readCart = (req, res, next) => {
  cart.find({}).then((data) => {
    !data ? res.send('Data isEmpty') : res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateCart = (req, res, next) => {
  cart.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not defind')
    } else {
      data.update(req.body).then((result) => {
        res.send(result)
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

let removeCart = (req, res, next) => {
  cart.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not defind')
    } else {
      data.remove(req.params.id).then((result) => {
        res.send('Data has been deleted')
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

module.exports = {
  readCart,
  createCart,
  updateCart,
  removeCart
}
