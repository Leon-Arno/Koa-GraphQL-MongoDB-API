const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechSchema = new Schema({
  name: String,
  release_date: Date,
  by_company: String,
  open_source: String
});

module.exports = mongoose.model('Tech', TechSchema);
