import React, { Component } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      verifyPassword: '',
      inputError: {
        email: '',
        password: '',
        verifyPassword: '',
      },
      errorMessage: '',

    }
  }

  render() {
    return (
      <form>
        <h3>Get started with a free account</h3>
        <p>Create a free account to blow your friends away with your newfound baseball knowledge!</p>
        <p>Already have an account? <Link to='signin'>Log in here</Link></p>
        <label htmlFor='email'>Email:</label><br />
        <input 
          className={this.state.inputError.email}
          id='email'
          name='email'
          type='text' 
          placeholder='Email...'
        />
        <label htmlFor='password'>Password:</label><br />
        <input 
          className={this.state.inputError.password}
          id='password'
          name='password'
          type="password" 
          placeholder='At least 6 characters...'
        />
        <label htmlFor='verify-password'>Verify Password:</label><br />
        <input 
          className={this.state.inputError.verifyPassword}
          id='verify-password'
          name='verify-password'
          type="password" 
          placeholder='At least 6 characters...'
        />
        <button type='button'>Sign Up</button>
      </form>
    )
  }
}

export default SignUp;
