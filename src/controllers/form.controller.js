const Registration = require('./../models/form.model');

function getSiteHandler(req, res) {
  res.render('form', {title: 'Registration Form'});
}
async function postFormHandler(req, res) {
  try {
    const registration = new Registration(req.body);
    registration.save();
    res.status(201).render('form', {
      title: 'Registration Form',
      data: req.body,
    });
  } catch (err) {
    res.status(500).render('form', {
      title: 'Registration Form',
    });
  }
}
  

module.exports = { getSiteHandler, postFormHandler };