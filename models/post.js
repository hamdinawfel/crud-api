const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: false },
  creator_id : { type : String },
  date     : { type : Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);
