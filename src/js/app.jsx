import React from 'react';
import ReactDOM from 'react-dom';
import {Signin} from './signin';
import {Signup} from './signup';


class Menu extends React.Component {
  render() {
    return (
      <div>
        <Signin />
        <Signup />
      </div>
    )
  }
}

ReactDOM.render (
  <Menu />,
  document.getElementById('app')
)


/*

const component = (
  <Router history={browserHystory}>
    {routes}
  </Router>
);
*/

