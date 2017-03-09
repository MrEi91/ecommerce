'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/cartController')

router.get('/', controller.readCart)
router.post('/cart', controller.createCart)
router.put('/cart/:id', controller.updateCart)
router.delete('/cart/:id', controller.removeCart)

module.exports = router
