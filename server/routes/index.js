var express = require('express');
var passport = require('passport');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');
var itemCtrl = require('../controllers/item.controller');

router.get('/', function(req, res) {
    res.send("<h1> TEST TEST TEST </h1>");
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

router.get('/user/create', userCtrl.createUser);

router.get('/user/getAll', userCtrl.getAllUsers);

router.get('/items/create', itemCtrl.createUser);

router.get('/items/getAll', itemCtrl.getAllUsers);

module.exports = router;
