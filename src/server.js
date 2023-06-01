const express = require('express');
const app = express();

const formRoute = require('./routes/form.route');

app.use('/',formRoute);


const server = app.listen(3000, () => {
  console.log(`Server is listening to ${server.address().port}`);
});