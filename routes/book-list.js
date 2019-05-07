const express = require('express')
const router = express.Router()

/* GET users listing. */
// router.get('/cool/', function (req, res, next) {
//   res.send('You\'re so cool')
// })
const { Client } = require('pg')

router.get('/', function (req, res, next) {
  const client = new Client()
  client.connect()
    .then(() => {
      return client.query('SELECT * FROM BOOKS')
    })
    .then((result) => {
      res.render('list', { rows: result.rows })
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
