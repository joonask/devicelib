'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  rfid: String,
  gravatar_hash: String,
  active: Boolean
});

module.exports = mongoose.model('User', UserSchema);