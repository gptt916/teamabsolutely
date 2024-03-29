var express = require('express');
var passport = require('passport');
const passportConf = require('../config/passport');
const router = express.Router();
const passportJWT = passport.authenticate('jwt', { session: false });

var userCtrl = require('../controllers/user.controller');
var itemCtrl = require('../controllers/item.controller');


router.post('/auth/facebook', passport.authenticate('facebookToken', { session: false }), userCtrl.facebookOAuth);

router.get('/user/getAllUserVotes', passportJWT, userCtrl.getAllUseerVotes);

router.post('/items/create', passportJWT, itemCtrl.createItem);

router.get('/items/getAll', itemCtrl.getAllItems);

router.post('/items/rateItem', passportJWT, itemCtrl.rateItem);

router.get('/items/getTrending/', itemCtrl.getTrending);

router.get('/items/search/:search/', itemCtrl.searchItems);

module.exports = router;
