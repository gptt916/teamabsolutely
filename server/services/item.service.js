var Item = require('../models/item.model');
var User = require('../models/user.model');
var request = require("request");
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '73528e5b-5ef8-4d10-b67b-88d5c0d54911',
  'password': 'ecXJgzPYsx1d',
  'version': '2018-03-16'
});

const CHILD_AGE = 12;
const TEEN_AGE = 18;
const YOUNG_ADULT_AGE = 26;
const ADULT_AGE = 40;
const MIDDLE_AGED_ADULT_AGE = 65;


function getTags(itemName) {
    var cleanedName = itemName.replace(/\s+/g, '+').toLowerCase().trim();

    request("http://api.datamuse.com/words?ml=" + cleanedName + "&max=8", function(error, response, body) {
        var datamuse = body;
        var result = datamuse.slice(1, -1);
        var array = JSON.parse("[" + result + "]");
        var ret = array.map(function(i) { return i.word }).join(",");
        console.log(ret);
    });
}

function approveItem(itemName) {
    var parameters = {
        'text': itemName,
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

    natural_language_understanding.analyze(parameters, function(err, response) {
        if (err) {
            console.log('error:', err);
        } else {
            if (response.categories.length > 0 || response.entities.length > 0 ) {
                console.log(itemName + ": Approved")
            } else {
                console.log(itemName + ": Not Valid")
            }
        }
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
    approveItem(search);
    getTags(search);
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
    .limit(10)
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

function getIncCommand(user, voteYAY) {
    let res = {};

    res['countYAY'] = voteYAY ? 1 : -1;
    res['countNAY'] = voteYAY ? -1 : 1;

    if (user.facebook.gender) {
        if (user.facebook.gender.toLowerCase() === 'male') {
            res['countGender.male.yay'] = voteYAY ? 1 : -1;
            res['countGender.male.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.gender.toLowerCase() === 'female') {
            res['countGender.female.yay']= voteYAY ? 1 : -1;
            res['countGender.female.nay'] = voteYAY ? -1 : 1;
        }
        else {
            res['countGender.other.yay'] = voteYAY ? 1 : -1;
            res['countGender.other.nay'] = voteYAY ? -1 : 1;
        }
    }

    if (user.facebook.ageRange && user.facebook.ageRange.min) {
        if (user.facebook.ageRange.min <= CHILD_AGE) {
            res['countAge.child.yay'] = voteYAY ? 1 : -1;
            res['countAge.child.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.ageRange.min <= TEEN_AGE) {
            res['countAge.teen.yay'] = voteYAY ? 1 : -1;
            res['countAge.teen.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.ageRange.min <= YOUNG_ADULT_AGE) {
            res['countAge.youngAdult.yay'] = voteYAY ? 1 : -1;
            res['countAge.youngAdult.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.ageRange.min <= ADULT_AGE) {
            res['countAge.adult.yay'] = voteYAY ? 1 : -1;
            res['countAge.adult.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.ageRange.min <= MIDDLE_AGED_ADULT_AGE) {
            res['countAge.middleAgedAdult.yay'] = voteYAY ? 1 : -1;
            res['countAge.middleAgedAdult.nay'] = voteYAY ? -1 : 1;
        }
        else {
            res['countAge.senior.yay'] = voteYAY ? 1 : -1;
            res['countAge.senior.nay'] = voteYAY ? -1 : 1;
        }
    }

    if (user.facebook.location && user.facebook.location.continent){
        if (user.facebook.location.continent === 'NA'){
            res['countContinent.NA.yay'] = voteYAY ? 1 : -1;
            res['countContinent.NA.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.location.continent === 'SA'){
            res['countContinent.SA.yay'] = voteYAY ? 1 : -1;
            res['countContinent.SA.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.location.continent === 'EU'){
            res['countContinent.EU.yay'] = voteYAY ? 1 : -1;
            res['countContinent.EU.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.location.continent === 'AF'){
            res['countContinent.AF.yay'] = voteYAY ? 1 : -1;
            res['countContinent.AF.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.location.continent === 'AS'){
            res['countContinent.AS.yay'] = voteYAY ? 1 : -1;
            res['countContinent.AS.nay'] = voteYAY ? -1 : 1;
        }
        else if (user.facebook.location.continent === 'OC'){
            res['countContinent.OC.yay'] = voteYAY ? 1 : -1;
            res['countContinent.OC.nay'] = voteYAY ? -1 : 1;
        }
    }

    return res;
}

function rateItem(user, body, callback) {
    const ids = user.votes.map(item => item.itemId.toString());

    var existingVoteIndex = ids.indexOf(body.itemId);

    let command = getIncCommand(user, body.voteYAY);

    if (existingVoteIndex === -1) {
        for (var key in command) {
            if (command[key] < 0) {
                delete command[key];
            }
        }
        user.votes.push({'itemId': body.itemId, 'voteYAY': body.voteYAY});
    }
    else {
        user.votes[existingVoteIndex].voteYAY = body.voteYAY;
    }

    Item.findOneAndUpdate({_id: body.itemId}, { $inc: command }, {new: true})
        .exec()
        .then(doc => {
            user.save();
            callback(doc);
        })
        .catch(err => {
            callback({error: err});
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
