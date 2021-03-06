const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  mail: { type: String, required: true, match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] },
  created: { type: Date, required: true },
  updated: { type: Date },
  status: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String },
  price: { type: Number },
  phone: { type: String },
  location: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Post', postSchema);