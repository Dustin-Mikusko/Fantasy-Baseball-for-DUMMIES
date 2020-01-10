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
        <input 
        className={this.state.inputError.email}
        id='email' 
        name='email'
        type='text' 
        placeholder='Email...'
        />
        <input 
        className={this.state.inputError.password}
        id='password'
        name='password'
        type="password" 
        placeholder='Password...'
        />
        <button type='button'>Sign In</button>
      </form>
    )
  }
}

export default SignIn;
