import mongoose from 'mongoose';
const Schems = mongoose.Schema;

import passportLocalMongoose from ('passport-local-mongoose');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

mongoose.model('user', UserSchema);
