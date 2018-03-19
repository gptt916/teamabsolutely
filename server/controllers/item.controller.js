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
    item = itemService.createItem(req.body);
    pushItemToDatabase(req, res, item);
}

function searchItems(req, res) {
    items = itemService.searchItems(req.params.search, function(items) {
        if (items.error) {
            return res.status(500).send(items.error);
        }
        return res.status(200).send(items);
    });
}

function getItem(req, res) {
    item = itemService.getItem(req.params.name, function(item) {
        if (item.error) {
            return res.status(500).send(item.error);
        }
        return res.status(200).send(item);
    });
}

function getTrending(req, res) {
    items = itemService.getTrending(function(items) {
        if (items.error) {
            return res.status(500).send(items.error);
        }
        return res.status(200).send(items);
    });
}

function getAllItems(req, res) {
    items = itemService.getAllItems(function(items) {
        if (items.error) {
            return res.status(500).send(items.error);
        }
        return res.status(200).send(items);
    });
}

function rateItem(req, res) {
    itemService.rateItem(req.user, req.body, function(item) {
        if (item.error) {
            return res.status(500).send(item.error);
        }
        res.status(200).send(item);
    });
}

module.exports = {
    createItem,
    getAllItems,
    getItem,
    searchItems,
    getTrending,
    rateItem
};
