const Registration = require('./../models/form.model');

function getSiteHandler(req, res) {
  res.render('form', {title: 'Registration Form'});
}
async function postFormHandler(req, res) {
  try {
    const registration = new Registration(req.body);
    await registration.save();
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
  
async function getRegistrationsHandler(req, res) {
  try {
    const docs = await Registration.find();
    res.render('registrations', { title: 'Listing Registrations', registrations: docs });
  } catch (err) {
    res.send('Sorry, something went wrong');
  };
}
module.exports = { getSiteHandler, postFormHandler, getRegistrationsHandler };