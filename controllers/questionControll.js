const models = require('../models/Question')

var create = (req, res) => {
    models.create({
        title: req.body.title,
        content: req.body.content,
        answer: [],
        voteUp: [],
        voteDown: []
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

var addAnswer = (req,res) => {
    models.where({
      _id: req.params.id
    })
    .update({
      $push:{
        answer: {
          author: req.body.author,
          content: req.body.content,
          upvotes: [],
          downvotes: []
        }
      }
    })
    .then(result => {
      res.send(result)
    })
    .catch(err=> {
      res.send(err)
    })
  }

module.exports = {create, allQuestions, updateQuestion, deleteQuestion}