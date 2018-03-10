var express = require('express');
var routes = require('./routes/index');
var app = express();
var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_HOST);
app.use('/', routes);

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
    console.log("Server started");
})