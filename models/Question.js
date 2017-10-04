const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var questionSchema = new Schema({
    userId = [{
        type: ObjectId,
        ref: 'User'
    }],
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    answer: [{
        type: ObjectId,
        ref: 'answer'
    }],
    voteUp: [{
        type: ObjectId,
        ref: 'User'
    }],
    voteDown: [{
        type: ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})


var Question = mongoose.model('Question', questionSchema)

module.exports = Question