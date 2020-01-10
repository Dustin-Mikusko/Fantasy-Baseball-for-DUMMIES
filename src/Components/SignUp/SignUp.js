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
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkInputs = () => {
    const inputErrorState = {...this.state.inputError};
    Object.keys(inputErrorState).forEach(key => {
      if (!this.state[key]) {
        inputErrorState[key] = 'error';
        this.setState({ inputError: inputErrorState})
      } else {
        inputErrorState[key] = '';
        this.setState({ inputError: inputErrorState })
      }
    });
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
          onChange={this.handleChange}
          value={this.state.email}
        />
        <label htmlFor='password'>Password:</label><br />
        <input 
          className={this.state.inputError.password}
          id='password'
          name='password'
          type="password" 
          placeholder='At least 6 characters...'
          onChange={this.handleChange}
          value={this.state.password}
        />
        <label htmlFor='verify-password'>Verify Password:</label><br />
        <input 
          className={this.state.inputError.verifyPassword}
          id='verify-password'
          name='verify-password'
          type="password" 
          placeholder='At least 6 characters...'
          onChange={this.handleChange}
          value={this.state.verifyPassword}
        />
        <button type='button' onClick={this.checkInputs}>Sign Up</button>
      </form>
    )
  }
}

export default SignUp;
