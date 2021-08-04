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
router.get('/new', (req, res, next) => {
  res.render('form')
});

/* Post message to index */
router.post('/new', (req, res, next) => {
  body = req.body;
  messages.unshift(
    {
      text: body.message, user: body.user, added: new Date()
    });
    res.redirect('/');
});

module.exports = router;
