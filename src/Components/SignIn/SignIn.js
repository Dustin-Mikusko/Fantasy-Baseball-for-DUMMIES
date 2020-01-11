import React, { Component } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../Actions';
import { Redirect } from 'react-router-dom';

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
      emailError: '',
      passwordError: '',
    }
  };
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  submitHandler = async () => {
    await this.checkInputs();
    await this.findEmail();
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
  };

  findEmail = () => {
    const users = this.props.users;
    if (!this.state.email) {
      this.setState({ emailMessage: 'Email required'});
      return null;
    } else {
      this.setState({ emailMessage: '' });
    }
    if (users.find(user => this.state.email === user.email)) {
      const user = users.find(user => this.state.email === user.email);
      this.validatePassword(user);

    } else {
      this.setState({ emailMessage: 'Email not found'});
      return false;
    }
  };

  validatePassword = async (user) => {
    if (user.password === this.state.password) {
      await this.setState({ passwordError: '' });
      this.props.setCurrentUser(user);
    } else {
      this.setState({ passwordError: 'Password incorrect' })
    }
  }

  render() {
    if (this.props.currentUser) {
      return <Redirect to='/dashboard' />
    }
    return (
      <form>
        <p>Sign in to your account</p>
        <p>Don't have an account? <Link to='/signup'>Sign up here</Link></p>
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
        {this.state.emailMessage && <p>{this.state.emailMessage}</p>}
        <label htmlFor='password'>Password:</label>
        <input 
        className={this.state.inputError.password}
        id='password'
        name='password'
        type="password" 
        placeholder='Password...'
        onChange={this.handleChange}
        value={this.state.password}
        />
        {this.state.passwordError && <p>{this.state.passwordError}</p>}
        <button type='button' onClick={this.submitHandler}>Sign In</button>
      </form>
    )
  }
};

export const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser(user) )
});

export const mapStateToProps = state => ({
  users: state.userDatabase,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
