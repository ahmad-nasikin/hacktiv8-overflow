const express = require('express')
const router = express.Router()
const question = require('../controllers/questionControll')

router.post('/', question.create)
router.get('/', question.allQuestions)
router.put('/:id', question.updateQuestion)
router.delete('/:id', question.deleteQuestion)

module.exports = router