'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/cartController')

router.get('/', controller.readCart)
router.post('/create', controller.createCart)
router.put('/update/:id', controller.updateCart)
router.delete('/delete/:id', controller.removeCart)

module.exports = router
