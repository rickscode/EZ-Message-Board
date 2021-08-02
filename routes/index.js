var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Daisy",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Jody",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* Get form page */
router.get('/form', (req, res, next) => {
  res.render('form')
});

module.exports = router;
