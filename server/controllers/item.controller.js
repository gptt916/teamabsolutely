var mongoose = require('mongoose');
var Item = require('../models/item.model');
var itemService = require('../services/user.service');

function pushItemToDatabase(req, res, item) {
    Item.create(user, function(err, data) {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(data);
    });
}

function createItem(req, res) {
    user = userService.createItem();
    pushItemToDatabase(req, res, user, true);
}

function getAllItems(req, res) {
    items = itemsService.getAllItems(function(users) {
        if (items.error) {
            return res.status(500).send(items.error);
        }
        return res.status(200).send(items);
    });
}

module.exports = {
    createItem,
    getAllItems
};
