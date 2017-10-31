import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {Signin} from './signin';
import {Signup} from './signup';

export default (
  <Route path='/signin' component={Signin} />,
  <Route path='/signup' component={Signup} />
)





