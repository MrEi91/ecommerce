'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/indexController')

router.get('/seed-item', controller.seedItems)
router.get('/seed-customer', controller.seedCustomers)

module.exports = router
