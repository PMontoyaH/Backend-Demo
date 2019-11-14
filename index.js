'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Item = require('./models/Item')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/items', (req, res) => {
  Item.find({}, (err, items) => {
    if(err) return res.status(500).send({ message: `Something went wrong: ${err}` })
    if(!items) return res.status(404).send({ message: `There is not items`})

    res.status(200).send({ items })
  })
})

app.get('/api/item/:itemId', (req, res) => {
  let itemId = req.params.itemId

  Item.findById(itemId, (err, item) => {
    if (err) return res.status(500).send({ message: `Something went wrong: ${err}`})
    if(!item) return res.status(404).send({ message: `Item does not exist!`})

    res.status(200).send({ item })
  })
})

app.post('/api/item', (req, res) => {
  let item = new Item()

  item.name = req.body.name
  item.description = req.body.description

  item.save((err, itemStored) => {
    if (err) return res.status(500).send({ message: `Something went wrong: ${err}` })

    res.status(200).send({ item: itemStored })

  })

})

app.put('/api/item/:itemId', (req, res) => {
  
})

app.delete('/api/item/:itemId', (req, res) => {
  
})

mongoose.connect(`mongodb://localhost:27017/items`, (err, res) => {
  if(err) throw err
  console.log(`Data base connection established!`)
  
  app.listen(port, () => {
    console.log(`API REST running on http://localhost:${port}`)
  })
})
