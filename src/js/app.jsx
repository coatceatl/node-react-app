import React from 'react';
import ReactDOM from 'react-dom';
import BodyParser from 'body-parser';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import axios from 'axios';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  signIn = () => {
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  handleEmailChange = (e) => {
    this.setState({ email:e.target.value })
  }
  handlePasswordChange = (e) => {
    this.setState({ password:e.target.value })
  }

  render() {
    return (
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'>
            Please sign in
          </h2>
          <input type='email'
            onChange={this.handleEmailChange}
            placeholder='Email adress'
            value={this.state.email}
            required />
          <input type='password'
            onChange={this.handlePasswordChange}
            placeholder='Password'
            value={this.state.password}
            required
          />
          <button className='btn btn-lg'
            onClick={this.signIn}
            type='button'>
            Sign in
          </button>
        </form>
        <div>
          <Link to='/signup'>{'Signup'}</Link>
        </div>
      </div>
    );
  }
}

class Signup extends React.Component {
  render() {
    return(
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'>
            Please sign up
          </h2>
          <input type='email'
            onChange={this.handleEmailChange}
            placeholder='Email adress'
            value={this.state.email}
            required />
          <input type='password'
            onChange={this.handleEmailChange}
            placeholder='Password'
            value={this.state.password}
            required />
          <button className='btn btn-lg'
            onClick={this.signUp}
            type='button'>
            Sign up
          </button>
        </form>
        <div>
          <Link to='/'>{Signin}</Link>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Router>
    <Switch>
      <Route component={Signin} path='/'></Route>
      <Route component={Signup} path='/signup'></Route>
    </Switch>
  </Router>,
  document.getElementById('app')
);




