const express = require('express')
const PORT = 3000
const app = express()
const bodyParser = require('body-parser')

bodyParser.urlencoded({
  extended: true
})

app.use(bodyParser.json())

// GET /
// hello world
app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})
let users = [{
  id: 1,
  name: 'BCC',
  email: 'abc@abc.com'
}]
// GET /users
app.get('/users', (req, res) => {
  res.json(users)
})

// POST /users
app.post('/users', (req, res) => {
  users.push({
    ...req.body,
    id: users.length + 1,
  })
  res.status(201).send('OK')
})

// DELETE /users
// /users/1
app.delete('/users/:id', (req, res) => {
  for (let i in users) {
    if (users[i].id == req.params.id) {
      users.splice(i, 1)
      break
    }
  }

  res.status(200).send('OK')
})

app.listen(PORT, () => 
  console.log('server is listening on port', PORT)
) 

// yarn add nodemon