// mongodb
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
// new user table
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
    set(val) {
      const salt = bcrypt.genSaltSync(SALT_ROUNDS);
      return bcrypt.hashSync(val, salt);
    },
  },
  createTime: {
    type: Date,
    default: Date.now,
  },
  updateTime: {
    type: Date,
    default: Date.now,
  },
});

// build up users' data model
const User = mongoose.model("User", UserSchema, "User");
module.exports = { User };
