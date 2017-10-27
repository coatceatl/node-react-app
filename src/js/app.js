import React from 'react';
import ReactDOM from 'react-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  signIn() {
    use.post('/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleEmailChange(e) {
    this.setState({ email:e.target.value })
  }
  handlePasswordChange(e) {
    this.setState({ password:e.target.value })
  }
  signIn() {
    alert('Email adress is ' + this.state.email + ' Password is ' + this.state.password);
  }

  render() {
    return (
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'>Please sign in</h2>
          <input type='email' onChange={this.handleEmailChange} placeholder='Email adress' required />
          <input type='password' onChange={this.handlePasswordChange} placeholder='Password' required />
          <button className='btn btn-lg' onClick={this.signIn} type='button'>Sign in</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(
  <Signin />,
  document.getElementById('app')
);




