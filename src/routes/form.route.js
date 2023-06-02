const express = require('express');
const formRoute = express.Router();

const { getSiteHandler, postFormHandler } = require('../controllers/form.controller');
const validateUser = require('./../validators/form.validator'); 

formRoute.route('/')
  .get(getSiteHandler)
  .post(validateUser, postFormHandler);

module.exports = formRoute;