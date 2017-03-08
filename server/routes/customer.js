'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/customerController')

router.get('/', controller.readCustomers)
router.post('/create', controller.createCustomer)
router.put('/update/:id', controller.updateCustomer)
router.delete('/delete/:id', controller.removeCustomer)

module.exports = router
