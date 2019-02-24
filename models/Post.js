const conn = require('./connection')
const Sequelize = require('sequelize')

module.exports = conn.define(
  'Post',
  {
    caption: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image_url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }
)