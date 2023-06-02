const express = require('express');
const formRoute = express.Router();

const { getSiteHandler, postFormHandler, getRegistrationsHandler } = require('../controllers/form.controller');
const validateUser = require('./../validators/form.validator'); 

formRoute.route('/')
  .get(getSiteHandler)
  .post(validateUser, postFormHandler);

formRoute.get('/registrations', getRegistrationsHandler);

module.exports = formRoute;