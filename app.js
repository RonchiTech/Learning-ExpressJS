const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes); 

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(process.cwd(), 'views', '404.html'));
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
