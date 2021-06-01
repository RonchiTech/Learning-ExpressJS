const express = require('express');

const router = express.Router();

router.get('/middleware', (req, res, next) => {
  //   console.log('in the middleware');
  res.send('<h1>in the middleware</h1>'); //wont go next if you have response
});

router.get('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>');
});

module.exports = router;
