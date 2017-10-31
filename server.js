const express    = require('express');
const Path       = require('path');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const user       = require('./models/user');

mongoose.connect(
  'mongodb://localhost/node_react_app',
  { useMongoClient: true }
);
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname));


app.post('/signin', (req, res) => {
  const user_name=req.body.email;
  const password=req.body.password;
  if(user_name=='admin' && password=='admin') {
    res.send('success');
  }
  else {
    res.send('failure');
  }
});

app.post('/signup', (req, res) => {
  const email=req.body.email;
  const password=req.body.password;
  if(email && password) {
    user.signup(email, password);
  }
  else {
    res.send('failure');
  }
});

app.listen(3000, ()=> {
  console.log('Server started');
});
