'use strict'
const express = require('express')
const router = express.Router()
const item = require('../models/item')

let createItem = (req, res, next) => {
  item.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let readItems = (req, res, next) => {
  item.find({}).then((data) => {
    !data ? res.send('Items isEmpty') : res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateItem = (req, res, next) => {
  item.findById(req.params.id).then((data) => {
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

let removeItem = (req, res, next) => {
  item.findById(req.params.id).then((data) => {
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
  readItems,
  createItem,
  updateItem,
  removeItem
}
