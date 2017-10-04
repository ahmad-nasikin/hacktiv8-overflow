const models = require('../models/Question')

var create = (req, res) => {
    models.create({
        title: req.body.title,
        content: req.body.content
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
}

var allQuestions = (req, res) => {
    models.find({})
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
}

var updateQuestion = (req, res) => {
    // models.findById({
    //     _id: req.params.id
    // })
    models.update({
        _id: req.params.id
    }, {
        title: req.body.title,
        content: req.body.content
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
}

var deleteQuestion = (req, res) => {
    // models.findById({
    //     _id: req.params.id
    // })
    models.remove({
        _id: req.params.id
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports = {create, allQuestions, updateQuestion, deleteQuestion}