'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

var flash    = require('connect-flash');
var logger      = require('morgan');
var expressSession = require('express-session');


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api', api)

app.use(logger('dev'));

module.exports = app