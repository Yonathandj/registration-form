require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./server');

const server = app.listen(3000, () => {
  console.log(`Server is listening to ${server.address().port}`);
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log(`Mongoose connection is open on ${process.env.DATABASE}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}
connectDB();