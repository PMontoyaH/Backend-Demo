'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/items', (req, res) => {
  res.status(200).send({ items : []})
})

app.get('/api/item/:itemId', (req, res) => {
  
})

app.post('/api/item', (req, res) => {
  console.log(req.body)
  res.status(200).send({ message: `Item saved correctly!`})
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
