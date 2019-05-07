const express = require('express')
const router = express.Router()

const { Client } = require('pg')

router.get('/', function (req, res) {
  res.render('add', {})
})

router.post('/', function (req, res) {
  const client = new Client()
  client.connect()
    .then(() => {
      // console.log(req.body.title)
      const sql = 'INSERT INTO BOOKS(book_name, author, genre) VALUES($1, $2, $3);'
      const param = [req.body.title, req.body.author, req.body.genre]
      return client.query(sql, param)
    })
    .then(() => {
      res.redirect('list')
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
