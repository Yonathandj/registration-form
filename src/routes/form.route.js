const path = require('path');
const auth = require('http-auth');
const express = require('express');
const authConnect = require('http-auth-connect');

const validateUser = require('./../validators/form.validator'); 
const { getSiteHandler, postFormHandler, getRegistrationsHandler } = require('../controllers/form.controller');

const formRoute = express.Router();
const basic = auth.basic({
  file: path.join(__dirname, './../../users.htpasswd')
});

formRoute.route('/')
  .get(getSiteHandler)
  .post(validateUser, postFormHandler);

formRoute.get('/registrations', authConnect(basic), getRegistrationsHandler);

module.exports = formRoute;