const express = require('express')
const router = express.Router()
const answer = require('../controllers/answerControll')
const auth = require('../helper/auth')

router.post('/:q_id', auth.authUser, auth.authByid, answer.replay)

module.exports = router