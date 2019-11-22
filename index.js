'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if(err) throw err
  console.log(`Data base connection established!`)
  
  app.listen(config.port, () => {
    console.log(`API REST running on http://localhost:${config.port}`)
  })
})
