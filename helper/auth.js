const jwt = require('jsonwebtoken')
let secret = process.env.SECRET

var authUser = (req, res, next) => {

    jwt.verify(req.headers.token, secret, (err, decoded) => {
        if (!err) {
            next()
        } else {
            res.send('You must login first')
        }
    })
}

var authByid = (req, res, next) => {
  if (req.headers.hasOwnProperty('token')) {
    var user = jwt.verify(req.headers.token, secret)
    req.headers.auth = user
    next()
  } else {
    res.send('Anda Tidak Punya Akses')
  }
}

module.exports = {
    authUser,
    authByid
}