function getSiteHandler(req, res) {
  res.render('form', {title: 'Registration Form'});
}

function postFormHandler(req, res) {
  res.render('form', {title: 'Registration Form'});
}

module.exports = { getSiteHandler, postFormHandler };