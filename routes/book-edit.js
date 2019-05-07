const express = require('express')
const router = express.Router()

const { Client } = require('pg')

router.get('/:id', function (req, res) {
  const client = new Client()
  client.connect()
    .then(() => {
      const sql = 'SELECT * FROM BOOKS WHERE book_id= $1;'
      const param = [req.params.id]
      return client.query(sql, param)
    })
    .then((result) => {
      console.log(result.rows[0])
      res.render('edit', { book: result.rows[0] })
    })
})

router.post('/:id', function (req, res) {
  const client = new Client()
  client.connect()
    .then(() => {
      const sql = 'UPDATE BOOKS SET book_name = $1, author= $2, genre= $3 WHERE book_id = $4;'
      const param = [req.body.title, req.body.author, req.body.genre, req.params.id]
      return client.query(sql, param)
    })
    .then(() => {
      res.redirect('../list')
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/delete/:id', function (req, res) {
  const client = new Client()
  client.connect()
    .then(() => {
      const sql = 'DELETE FROM BOOKS WHERE book_id = $1;'
      const param = [req.params.id]
      return client.query(sql, param)
    })
    .then(() => {
      res.redirect('../../list')
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
