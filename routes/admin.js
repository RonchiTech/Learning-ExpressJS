const path = require('path')
const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  console.log('in the middleware');
  res.sendFile(path.join(process.cwd(), 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

module.exports = router;
