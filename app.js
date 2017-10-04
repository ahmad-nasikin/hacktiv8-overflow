const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb://joxkert:joxkert@onlyportofolio-shard-00-00-etzzq.mongodb.net:27017,onlyportofolio-shard-00-01-etzzq.mongodb.net:27017,onlyportofolio-shard-00-02-etzzq.mongodb.net:27017/test?ssl=true&replicaSet=OnlyPortofolio-shard-0&authSource=admin')

var index = require('./routes/user')

var app = express()

app.use(cors())
app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index)

app.listen(process.env.PORT || 3000, () => {
    console.log('Connected')
})