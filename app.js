const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
  console.log('always runs');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('in the middleware');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

app.use('/middleware', (req, res, next) => {
//   console.log('in the middleware');
  res.send('<h1>in the middleware</h1>'); //wont go next if you have response
});

app.use('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
