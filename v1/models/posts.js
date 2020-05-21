//set up the Schema
const mongoose = require("mongoose");
const PostsSchema = new mongoose.Schema({
  name: String,
  isbn: String,
  authors: [String],
  country: String,
  number_of_pages: Number,
  publisher: String,
  release_date: Date,
});

//compile into module
module.exports = mongoose.model("Posts", PostsSchema);
