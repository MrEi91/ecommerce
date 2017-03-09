'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/customerController')

router.get('/', controller.readCustomers)
router.post('/customer', controller.createCustomer)
router.put('/customer/:id', controller.updateCustomer)
router.delete('/customer/:id', controller.removeCustomer)

module.exports = router
