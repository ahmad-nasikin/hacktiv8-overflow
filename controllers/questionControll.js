const models = require('../models/Question')
const Answer = require('../models/Answer')

var create = (req, res) => {
    console.log('id username', req.headers.auth)
    models.create({
        userId: req.headers.auth._id,
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
    .populate('answer')
    .populate('userId', 'username')
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
    models.findById({
        _id: req.params.id
    })
    .then(result => {
      console.log('headers token', req.headers.auth._id)
      console.log('result id', result.userId)
      if (req.headers.auth._id != result.userId) {
        res.send('tidak bisa delete')
      } else {
        models.remove({
            _id: req.params.id
        })
        .then(result => {
            console.log('ini result delete', result)
            Answer.findOne({
                questionId: req.params.id
            })
            .then(resultDel => {
                console.log(resultDel)
                Answer.remove({
                    questionId: req.params.id
                })
                .then(resultall => {
                    res.send(resultall)
                })
                .catch(err => {
                    res.send(err)
                })
            })
            .catch(err => {
                res.send(err)
            })
        })
        .catch(err => {
            res.send(err)
        })
      }
    })
    .catch(err => {
      res.send(err)
    })
}

deleteAnswer = (req, res) => {
    models.findById({
        _id: req.params.id
    })
    .then(result => {
        Answer.findByIdAndRemove({
            _id: req.params.id
        })
        .then(resultDel => {
            res.send('Succes Remove Answer')
        })
        .catch(err => {
            res.send(err)
        })
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports = {create, allQuestions, updateQuestion, deleteQuestion, deleteAnswer}
