var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var routes = require('./routes/index');
var app = express();

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var flash = require('connect-flash');
var session = require('express-session');

var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_HOST);
app.use('/', routes);

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
    console.log("Server started");
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});
