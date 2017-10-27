const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.post('/login', (req, res) => {
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
  const user_name=req.body.email;
  const password=req.body.password;
  if(user_name && password) {
    user.signup(user_name, password);
  }
  else {
    res.send('failure');
  }
});


app.listen(3000, ()=> {
  console.log('Server started');
});
