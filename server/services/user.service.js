var User = require('../models/user.model');

function createUser() {
    var user = new User({
        username: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
        email: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)
    });
    return user;
}

function getAllUsers(callback) {
    User.find()
    .exec()
    .then(docs => {
        callback(docs);
    })
    .catch(err => {
        callback({error: err});
    });
}

module.exports = {
    createUser,
    getAllUsers
};