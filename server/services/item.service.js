var Item = require('../models/item.model');

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

function getTags(name) {
    var client = new HttpClient();

    client.get('http://api.datamuse.com/words?sp=' + name, function(response) {
        return response;
    });
}

function createItem(name, user, dateSubmitted) {
    var item = new Item({
        name: name,
        user: user,
        dateSubmitted: dateSubmitted,
        countYAY: 0,
        countNAY: 0,
        tags: name
    });
    return item;
}

function getItem(name, callback) {
    Item.findOne({'name': name})
    .exec()
    .then(docs => {
        callback(docs);
    })
    .catch(err => {
        callback({error: err});
    });
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
