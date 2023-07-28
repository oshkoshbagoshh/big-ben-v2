// models/Category.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the CategorySchema
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Category model based on the CategorySchema
const Category = mongoose.model('category', CategorySchema);

module.exports = Category;
