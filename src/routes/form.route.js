const express = require('express');
const formRoute = express.Router();

const { getSiteHandler, postFormHandler } = require('../controllers/form.controller');
 

formRoute.get('/', getSiteHandler);
formRoute.post('/', postFormHandler);

module.exports = formRoute;