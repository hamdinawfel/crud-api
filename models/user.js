const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userName :{ type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Posts' }],
  date: { type : Date, default: Date.now }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
