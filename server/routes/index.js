'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/indexController')

router.get('/item', controller.seedItems)
router.get('/customer', controller.seedCustomers)

module.exports = router
