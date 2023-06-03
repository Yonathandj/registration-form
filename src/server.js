const path = require('path');
const express = require('express');

const formRoute = require('./routes/form.route');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/',formRoute);

module.exports = app;