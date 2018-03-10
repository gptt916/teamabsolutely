var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');

router.get('/', function(req, res) {
    res.send("<h1> TEST TEST TEST </h1>");
});

router.get('/create', userCtrl.createUser);

router.get('/getAll', userCtrl.getAllUsers);

module.exports = router;