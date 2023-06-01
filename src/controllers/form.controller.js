function getSiteHandler(req, res) {
  res.render('form');
}

function postFormHandler(req, res) {
  res.render('form');
}

module.exports = { getSiteHandler, postFormHandler };