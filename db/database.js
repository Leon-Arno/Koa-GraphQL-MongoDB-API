const mongoose = require('mongoose');

const initializeDB = () => {
  mongoose.connect(
    'mongodb://user1:user12@ds125263.mlab.com:25263/graphql-api',
    {
      useNewUrlParser: true
    }
  );

  mongoose.connection.once('open', async () => {
    console.log('Connection to database established.');
    const Gadget = require('../models/gadget');
    console.log(await Gadget.find());
  });
};

module.exports = initializeDB;
