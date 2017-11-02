import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import {Signin} from './signin';
import {Signup} from './signup';

class Home extends React.Component {
  render() {
    return <h2>Home Page</h2>;
  }
}

render (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Hello from React</Link></li>
        <li><Link to='/signin'>Sign in</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
      </ul>

      <hr />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
)


