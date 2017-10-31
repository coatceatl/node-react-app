const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/node_react_app', {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
    user_name: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
});


module.exports = mongoose.model('User', UserSchema);




