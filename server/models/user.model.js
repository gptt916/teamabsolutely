let mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

let userSchema = mongoose.Schema({
    local: {
      name: String,
      email: String,
      password: String,
    },
    facebook: {
      id: String,
      token: String,
      email: String,
      name: String,
      username: String,
      gender: String,
      location: {
        city: String,
        country: String,
        state: String,
        continent: String
      },
      ageRange: {
        min: Number,
        max: Number
      }
    },
    votes: [
      {
        itemId: mongoose.Schema.Types.ObjectId,
        voteYAY: Boolean
      }
    ]
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
