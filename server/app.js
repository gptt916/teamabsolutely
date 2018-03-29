var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var routes = require('./routes/index');
var app = express();
var cors = require('cors');


var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_HOST);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
    next();
  });
  
app.use(bodyParser.json());

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url);
    next();
});

app.use('/api', routes);

app.use('/', express.static('static'));

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
    console.log("Server started on port " + app.get('port'));
});

