const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  provider: String,
  profileId: String,
  name: String,
  likes: [{ type: String }]
});

const User = mongoose.model('users', userSchema);

exports.userSchema = userSchema;
exports.User = User;
