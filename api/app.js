var express = require('express');
var mongoose = require('mongoose');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var user = require('./routes/user');
app.use("/user", user);

var book = require('./routes/book');
app.use("/book", book);

var type = require('./routes/type');
app.use("/type", type);

var serial = require('./routes/serial');
app.use("/serial", serial);

app.listen('3300')
