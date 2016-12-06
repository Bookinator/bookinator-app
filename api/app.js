var express = require('express')
var mongoose = require('mongoose')
var config = require('./config')

var app = express()

mongoose.connect('mongodb://'+ config.host + '/' + config.db, (err) => {
  if (err) { throw err }
})

var user = require('./routes/user')
app.use("/user", user)

var book = require('./routes/book')
app.use("/book", book)

var type = require('./routes/type')
app.use("/type", type)

var serial = require('./routes/serial')
app.use("/serial", serial)

app.listen('3300')
