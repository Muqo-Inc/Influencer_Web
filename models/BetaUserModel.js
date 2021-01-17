const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetaUserSchema = new Schema({
  name: { type: String, trim: true },
  username: { type: String, trim: true },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

//supporting functions

module.exports = mongoose.model("BetaUserModel", BetaUserSchema);
