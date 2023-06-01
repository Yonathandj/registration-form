const express = require('express');
const path = require('path');
const formRoute = require('./routes/form.route');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/',formRoute);

const server = app.listen(3000, () => {
  console.log(`Server is listening to ${server.address().port}`);
});