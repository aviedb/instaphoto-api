const express = require('express')
const app = express()
const conn = require('../models')

//GET /posts
app.get('/posts', async (req, res) => {
  try {
     let posts = await conn.models.Post.findAll()
     res.status(200).json({
       is_ok: true,
       posts
     })
  } catch (error) {
    res.status(500).json({
      is_ok: false,
      error
    })
  }
})

//POST /posts
app.post('/posts', async (req, res) => {
  try {
    await conn.models.Post.create(req.body)
    res.status(201).json({
      is_ok: true,
    })
 } catch (error) {
   res.status(500).json({
     is_ok: false,
     error
   })
 }
})

//PATCH /posts
app.patch('/posts/:id', async (req, res) => {
  try {
    let posts = await conn.models.Post.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json({
      is_ok: true,
      posts
    })
 } catch (error) {
   res.status(500).json({
     is_ok: false,
     error
   })
 }
})

//DELETE /posts
app.delete('/posts/:id', async (req, res) => {
  try {
    await conn.models.Post.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).json({
      is_ok: true,
    })
 } catch (error) {
   res.status(500).json({
     is_ok: false,
     error
   })
 }
})

module.exports = app