'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)

app.get('/', (req, res) => {
  res.status(200).send({msg: 'Hello coder! welcome to this example API'})
})

app.use(function(req, res, next) {
  return res.status(404).send({ msg: `Route ${req.url} not found` });
});

module.exports = app