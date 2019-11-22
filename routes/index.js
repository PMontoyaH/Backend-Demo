'use strict'

const express = require('express')
const itemCtrl = require('../controllers/item')
const api = express.Router()

api.get('/items', itemCtrl.getItems)
api.get('/item/:itemId', itemCtrl.getItem)
api.post('/item', itemCtrl.saveItem)
api.put('/item/:itemId', itemCtrl.updateItem)
api.delete('/item/:itemId', itemCtrl.deleteItem)

module.exports = api