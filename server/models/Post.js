const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  date: String,
  image: String,
});

module.exports = mongoose.model("Post", postSchema);
