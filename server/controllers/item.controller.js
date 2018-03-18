var mongoose = require('mongoose');
var Item = require('../models/item.model');
var itemService = require('../services/item.service');

function pushItemToDatabase(req, res, item) {
    Item.create(item, function(err, data) {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(data);
    });
}

function createItem(req, res) {
    item = itemService.createItem();
    pushItemToDatabase(req, res, item, true);
}

function getItem(req, res) {
    item = itemsService.getItem(req.params.imageId, function(item) {
        if (item.error) {
            return res.status(500).send(item.error);
        }
        return res.status(200).send(item);
    });
}

function getAllItems(req, res) {
    items = itemsService.getAllItems(function(items) {
        if (items.error) {
            return res.status(500).send(items.error);
        }
        return res.status(200).send(items);
    });
}

module.exports = {
    createItem,
    getAllItems,
    getItem
};
