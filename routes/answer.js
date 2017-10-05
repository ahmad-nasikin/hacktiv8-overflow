const express = require('express')
const router = express.Router()
const answer = require('../controllers/answerControll')

router.post('/:q_id', answer.replay)

module.exports = router