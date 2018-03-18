let mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type:String,
        required: true,
        unique: false
    },
    dateSubmitted: {
        type:Date,
        required: true,
        unique: false
    },
    countYAY: {
        type:Number,
        required: true,
        unique: false
    },
    countNAY: {
        type:Number,
        required: true,
        unique: false
    },
    tags: {
        type:String,
        required : false,
        unique: false
    },
    src: {
        type: String,
        required: true,
        unique: false
    }
});


module.exports = mongoose.model('Item', itemSchema);
