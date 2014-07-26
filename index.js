'use strict'
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./libs/config'),
    email = require('./libs/email')
    
app.use(bodyParser.json())
app.post('/subscribe', email.subscribe)


app.listen(process.env.PORT || config.port)
