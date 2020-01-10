import React, { Component } from 'react';
import './SignIn.css';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      inputError: {
        email: '',
        password: '',
      },
      errorMessage: ''
    }
  }

  render() {
    return (
      <form>
        <p>Sign in to your account</p>
        <input type='text' placeholder='Email...'></input>
        <input type="password" placeholder='Password...'></input>
        <button type='button'>Sign In</button>
      </form>
    )
  }
}

export default SignIn;
