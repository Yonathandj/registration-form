function getSiteHandler(req, res) {
  res.send('get testing');
}

function postFormHandler(req, res) {
  req.send('post testing');
}

module.exports = { getSiteHandler, postFormHandler };