var Item = require('../models/item.model');

function createItem() {
    var item = new Item({
        username: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
        email: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)
    });
    return item;
}

function getAllItems(callback) {
    Item.find()
    .exec()
    .then(docs => {
        callback(docs);
    })
    .catch(err => {
        callback({error: err});
    });
}

module.exports = {
    createItem,
    getAllItems
};
