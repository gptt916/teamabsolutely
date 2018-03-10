var mongoose = require('mongoose');
var User = require('../models/user.model');
var userService = require('../services/user.service');

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

module.exports = {
    createUser,
    getAllUsers
};