var mongoose = require('mongoose');
var User = require('../models/user.model');
var userService = require('../services/user.service');
const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/auth');

signToken = user => {
    return JWT.sign({
      iss: 'YayOrNay',
      sub: user._id,
      iat: new Date().getTime(), // current time
      exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, JWT_SECRET);
  }

function pushUserToDatabase(req, res, user, createNew = false) {
    if (createNew) {
        User.create(user, function(err, data) {
            if (err) {
                return res.status(500).send(err);
            }

            return res.status(200).send(data);
        });
    }
    else {
        User.findOneAndUpdate({_id: user._id}, user, {new: true}, function(err, data) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(data);
        });
    }
}

function createUser(req, res) {
    user = userService.createUser();

    pushUserToDatabase(req, res, user, true);
}

function getAllUsers(req, res) {
    users = userService.getAllUsers(function(users) {
        if (users.error) {
            return res.status(500).send(users.error);
        }
        return res.status(200).send(users);
    });
}

function secret(req, res) {
    res.status(200).json({key: "super duper secret" });
}

function facebookOAuth(req, res, next) {
    // Generate token
    const token = signToken(req.user);
    res.status(200).json({ token: token });
  }

module.exports = {
    createUser,
    getAllUsers,
    facebookOAuth,
    secret
};