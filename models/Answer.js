const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var answerSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    questionId: {
        type: ObjectId,
        ref: 'Question'
    },
    content: {
        type: String,
        required: true
    },
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

var Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer