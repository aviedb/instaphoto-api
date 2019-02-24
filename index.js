const express = require('express')
const PORT = 3000
const app = express()
const bodyParser = require('body-parser')
require('./models')
const router = require('./controller')

bodyParser.urlencoded({
  extended: true
})

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use(router)

app.listen(PORT, () => 
  console.log('server is listening on port', PORT)
)