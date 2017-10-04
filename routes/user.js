const express = require('express')
const router = express.Router()
const user = require('../controllers/userControll')

router.post('/register', user.register)
router.post('/login', user.login)

module.exports = router
