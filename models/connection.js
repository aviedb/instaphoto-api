const Sequelize = require('sequelize')

module.exports = new Sequelize(
  'instaphoto', //database name
  'root', //username
  'root', //password
  {
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false,
    logging: false
  }
)