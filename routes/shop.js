const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/middleware', (req, res, next) => {
  //   console.log('in the middleware');
  res.send('<h1>in the middleware</h1>'); //wont go next if you have response
});

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.sendFile(path.join(process.cwd(), 'views', 'shop.html'));
});

module.exports = router;
