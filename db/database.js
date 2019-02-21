const mongoose = require('mongoose');

const initializeDB = () => {
  mongoose.connect(
    'mongodb://user1:user12@ds147125.mlab.com:47125/koa-graphql',
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
