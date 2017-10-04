const models = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET

var register = (req, res) => {
    let password = req.body.password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            models.create({
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            .then(result => {
                res.send({
                    msg: 'Succes create user',
                    result
                })
            })
            .catch(err => {
                res.send({err: err.msg})
            })
        })
    })
}

var login = (req, res) => {
    models.findOne({
        username: req.body.username
    })
    .then(result => {
        if (result == null) {
            res.send('Username Tidak Ada')
        } else {
            let password = req.body.password
            if (bcrypt.compareSync(password, result.password)) {
                console.log('password', password)
                console.log('result password', result.password)
                let token = jwt.sign({
                    _id: result._id,
                    username: result.username,
                    email: result.email
                }, process.env.SECRET)
                res.send({msg: 'Success Login', token: token})
            } else {
                res.send('Password Salah')
            }
        }
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports = {register, login}