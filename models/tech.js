const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechSchema = new Schema({
  name: String,
  release_date: Date,
  by_company: String,
  license: String
});

module.exports = mongoose.model('Technology', TechSchema);
