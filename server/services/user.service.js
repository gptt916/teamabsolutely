var User = require('../models/user.model');

function createUser(id, token, email, name, username) {
    var user = new User({
        id: id,
        token: token,
        email: email,
        name: name,
        username: username
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
