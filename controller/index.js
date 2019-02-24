const express = require('express')
const app = express()
const posts = require('./posts')

//posts route
app.use(posts)

module.exports = app