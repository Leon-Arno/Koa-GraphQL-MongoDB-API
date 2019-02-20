const mongoose = require('mongoose');

const initializeDB = () => {
  mongoose.connect(
    'mongodb://admin:admin1234@ds117730.mlab.com:17730/sandbox',
    {
      useNewUrlParser: true
    }
  );

  mongoose.connection.once('open', () => {
    console.log('Connection to database established.');
  });
};

module.exports = initializeDB;
