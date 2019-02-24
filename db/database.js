const mongoose = require('mongoose');

const initializeDB = () => {
  mongoose.connect(
    'mongodb://user1:user12@ds259897.mlab.com:59897/tech-graphqlapi',
    {
      useNewUrlParser: true
    }
  );

  mongoose.connection.once('open', async () => {
    console.log('Connection to database established.');
    const Tech = require('../models/tech');
    console.log(await Tech.find());
  });
};

module.exports = initializeDB;
