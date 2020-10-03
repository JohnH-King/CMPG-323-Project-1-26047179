const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const CVSchema = new mongoose.Schema(
  { name: String },
  { email: String },
  { comments: String }, { _id: true, autoIndex: true });

module.exports = mongoose.model('CVItems', CVSchema);
