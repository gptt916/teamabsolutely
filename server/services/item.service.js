var Item = require('../models/item.model');
var User = require('../models/user.model');

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

function createItem(body) {
    var item = new Item({
        name: body.name,
        user: body.user,
        dateSubmitted: new Date(),
        countYAY: 0,
        countNAY: 0,
        tags: body.name,
        src: body.src
    });
    return item;
}

function searchItems(search, callback) {
    var regex = new RegExp(search, 'i');

    Item.find({'name': regex})
    .exec()
    .then(docs => {
        callback(docs);
    })
    .catch(err => {
        callback({error: err});
    });
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

function getTrending(callback) {
    Item.aggregate([
        {$match: {}},
        {$addFields: {
            totalVotes: {$sum: ["$countYAY", "$countNAY"]}}},
        {$sort : { totalVotes : -1} }])
    .limit(3)
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

function rateItem(user, body, callback) {
    var existingVote = user.votes.filter(item => item.itemId == body.itemId);

    var command = {};

    if (existingVote.length > 0) {
        if (existingVote[0].voteYAY === body.voteYAY) {
            callback({error: "Can only vote once"});
        }
        else {
            if (body.voteYAY) {
                command = {'countYAY': 1, 'countNAY': -1}
            }
            else {
                command = {'countYAY': -1, 'countNAY': 1}
            }

            User.update({'votes.itemId': body.itemId}, {$set: {'votes.$.voteYAY': body.voteYAY}}).exec();


            Item.findOneAndUpdate({_id: body.itemId}, { $inc: command }, {new: true})
            .exec()
            .then(doc => {
                callback(doc);
            })
            .catch(err => {
                callback({error: err});
            });
        }
    }
    else {
        if (body.voteYAY) {
            command = {countYAY: 1}
        }
        else {
            command = {countNAY: 1}
        }

        Item.findOneAndUpdate({_id: body.itemId}, { $inc: command }, {new: true})
            .exec()
            .then(doc => {
                user.votes.push({'itemId': body.itemId, 'voteYAY': body.voteYAY});
                user.save();
                callback(doc);
            })
            .catch(err => {
                callback({error: err});
            });
    }
}

module.exports = {
    createItem,
    getAllItems,
    getItem,
    searchItems,
    getTrending,
    rateItem
};
