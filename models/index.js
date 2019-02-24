const conn = require('./connection')
require('./Post')

const giveSeeds = require('../seeders')

//SYNC
let force = true
conn
  .sync({force})
  .then(async () => {
    console.log('database synchronized')
    if (force) {
      await giveSeeds()
    }
  })
  .catch(err => {
    console.log('ERROR ESTABLISHING CONNECTION', err)
  })

module.exports = conn