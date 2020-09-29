const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const CVSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  name: String,
  price: Number});

module.exports = mongoose.model('CVItems', CVSchema);
