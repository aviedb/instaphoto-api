const conn = require('../models/connection')
const posts = require('./posts')

module.exports = () => {
  conn.models.Post.bulkCreate(posts)
}