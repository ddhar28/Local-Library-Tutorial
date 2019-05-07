const express = require('express')
const router = express.Router()

// const addBtn = document.getElementsByName('addBook')
// addBtn.addEventListener('click', () => app.redirect('/add'))

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Online Library System' })
})

module.exports = router
