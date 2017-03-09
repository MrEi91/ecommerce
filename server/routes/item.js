'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/itemController')

router.get('/', controller.readItems)
router.post('/item', controller.createItem)
router.put('/item/:id', controller.updateItem)
router.delete('/item/:id', controller.removeItem)

module.exports = router
