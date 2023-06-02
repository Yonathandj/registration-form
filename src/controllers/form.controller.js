const formModel = require('./../models/form.model');

function getSiteHandler(req, res) {
  res.render('form', {title: 'Registration Form'});
}
function postFormHandler(req, res) {
  const { name, email } = req.body;
  const newData = {
    name,
    email,
  };
  formModel.push(newData);
  res.status(201).render('form', {
    title: 'Registration Form',
    data: req.body,
  });
}

module.exports = { getSiteHandler, postFormHandler };