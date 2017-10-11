const express = require('express')
const router = express.Router()
const question = require('../controllers/questionControll')
const auth = require('../helper/auth')

router.get('/',  question.allQuestions)
router.get('/:id',  question.getOneQuestion)
router.post('/', auth.authUser, auth.authByid, question.create)
router.put('/:id', auth.authUser, auth.authByid, question.updateQuestion)
router.delete('/:id', auth.authUser, auth.authByid, question.deleteQuestion)
// router.delete('/:q_id/:id', auth.authUser, auth.authByid, question.deleteAnswer)
module.exports = router
