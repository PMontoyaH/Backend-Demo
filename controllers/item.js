'use strict'

const Item = require ('../models/Item')

function getItem(req, res) {
  let itemId = req.params.itemId

  Item.findById(itemId, (err, item) => {
    if (err) return res.status(500).send({ message: `Something went wrong: ${err}`})
    if(!item) return res.status(404).send({ message: `Item does not exist!`})

    res.status(200).send({ item })
  })
}

function getItems(req, res) {
  Item.find({}, (err, items) => {
    if(err) return res.status(500).send({ message: `Something went wrong: ${err}` })
    if(!items) return res.status(404).send({ message: `There is not items`})

    res.status(200).send({ items })
  })
}

function saveItem(req, res) {
  let item = new Item()

  item.name = req.body.name
  item.description = req.body.description

  item.save((err, itemStored) => {
    if (err) return res.status(500).send({ message: `Something went wrong: ${err}` })

    res.status(200).send({ item: itemStored })

  })
}

function updateItem(req, res) {
  let itemId = req.params.itemId
  let updateData = req.body


  Item.findByIdAndUpdate(itemId, updateData, {new:true}, (err, itemUpdated) => {
    if (err) return res.status(500).send({ message: `Something went wrong: ${err}` })

    res.status(200).send({ item: itemUpdated })
  })
}

function deleteItem(req, res) {
  let itemId = req.params.itemId

  Item.findById(itemId, (err, item) => {
    if(err) res.status(500).send({ message: `Something went wrong: ${err}`})

    item.remove(err => {
      if(err) res.status(500).send({ message: `Something went wrong: ${err}`})
      res.status(200).send({ message: `Item deleted successfully!`})
    })

  })
}

module.exports = {
  getItem, 
  getItems, 
  saveItem, 
  updateItem, 
  deleteItem
}