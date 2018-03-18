var express = require('express');
var passport = require('passport');
const passportConf = require('../config/passport');
const router = require('express-promise-router')();
const passportJWT = passport.authenticate('jwt', { session: false });

var userCtrl = require('../controllers/user.controller');
var itemCtrl = require('../controllers/item.controller');

router.route('/auth/facebook')
    .post(passport.authenticate('facebookToken', { session: false }), userCtrl.facebookOAuth);

router.route('/secret')
  .get(passportJWT, userCtrl.secret);

  
module.exports = router;
