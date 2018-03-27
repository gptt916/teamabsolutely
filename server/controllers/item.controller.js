var mongoose = require('mongoose');
var Item = require('../models/item.model');
var itemService = require('../services/item.service');
var request = require("request");

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '73528e5b-5ef8-4d10-b67b-88d5c0d54911',
  'password': 'ecXJgzPYsx1d',
  'version': '2018-03-16'
});

var watson_parameters = {
    'text': "place_holder",
    'features': {
        'entities': {
            'emotion': true,
            'sentiment': true,
            'limit': 2
        },
        "categories": {}
    },
    "language": "en"
}

function pushItemToDatabase(req, res, item) {
    var cleanedName = item.name.replace(/\s+/g, '+').toLowerCase().trim();

    request("http://api.datamuse.com/words?ml=" + cleanedName + "&max=8", function(error, response, body) {
        if (error) {
            return res.status(500).send(error);
        }
        var result = body.slice(1, -1);
        var array = JSON.parse("[" + result + "]");
        var ret = array.map(function(i) { return i.word }).join(",");

        var itemTagged = item;
        itemTagged.tags = ret;

        Item.create(itemTagged, function(err, data) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(data);
        });
    });
}

function createItem(req, res) {
    item = itemService.createItem(req.user, req.body);
    var parameters = watson_parameters;
    parameters.text = item.name.toLowerCase().trim();

    natural_language_understanding.analyze(parameters, function(err, response) {
        if (err) {
            console.log('error:', err);
        } else {
            if (response.categories.length > 0 || response.entities.length > 0 ) {
                pushItemToDatabase(req, res, item);
            } else {
                // Trevor PLS
                return res.status(500).send("Item is not valid");
            }
        }
    });
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
