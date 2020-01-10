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
        <p>Sign in to your account</p>
        <label htmlFor='email'>Email:</label>
        <input 
        className={this.state.inputError.email}
        id='email' 
        name='email'
        type='text' 
        placeholder='Email...'
        onChange={this.handleChange}
        value={this.state.email}
        />
        <label htmlFor='password'>Email:</label>
        <input 
        className={this.state.inputError.password}
        id='password'
        name='password'
        type="password" 
        placeholder='Password...'
        onChange={this.handleChange}
        value={this.state.password}
        />
        <button type='button' onClick={this.checkInputs}>Sign In</button>
      </form>
    )
  }
}

export default SignIn;
