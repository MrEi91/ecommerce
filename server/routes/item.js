'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/itemController')

router.get('/', controller.readItems)
router.post('/insert', controller.createItem)
router.put('/update/:id', controller.updateItem)
router.delete('/delete/:id', controller.removeItem)

module.exports = router
