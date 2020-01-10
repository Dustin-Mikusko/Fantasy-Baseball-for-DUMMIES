import React, { Component } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsers } from '../../Actions';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
      verifyPassword: '',
      inputError: {
        userName: '',
        email: '',
        password: '',
        verifyPassword: '',
      },
      passwordLengthMessage: '',
      passwordMatchMessage: '',
      emailError: false,
      passwordError: false
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = async () => {
    await this.setState({ emailError: false });
    await this.checkInputs();
    await this.checkExistingEmails();
    await this.checkPasswordMatch();
    await this.checkPasswordLength();
    if (!this.state.passwordError && this.checkForError()) {
      const userName = this.state.userName.charAt(0).toUpperCase() + this.state.userName.substring(1);
      const user = {
        name: userName,
        email: this.state.email,
        password: this.state.password,
        favoritePlayers: []
      }
      this.submitUser(user);
    } else {
      return null;
    }
  };

  submitUser= user => {
    const users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    this.props.setUsers(users);
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

  checkForError = () => {
    let ready = true;
    Object.keys(this.state.inputError).forEach(key => {
      if (key === 'error') {
        ready = false
      }
    });
    return ready
  };

  checkExistingEmails = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    users.forEach(user => {
      if (this.state.email === user.email) {
        this.setState({ emailError: true })
      }
    })
  };

  checkPasswordLength = async () => {
    await this.setState({ passwordLengthMessage: '' });
    if (this.state.password.length < 6) {
      this.setState({ passwordLengthMessage: 'Password must be at least 6 characters'});
      this.setState({ passwordError: true });
    }
  }
  
  checkPasswordMatch = () => {
    if ((!this.state.password.length && !this.state.verifyPassword.length) || (this.state.password !== this.state.verifyPassword)) {
      this.setState({ passwordError: true});
      this.setState({ passwordMatchMessage: 'Passwords do not match' })
    } else {
      this.setState({ passwordError: false })
      this.setState({ passwordMatchMessage: '' })
    }
  }

  render() {
    return (
      <form>
        <h3>Get started with a free account</h3>
        <p>Create a free account to blow your friends away with your newfound baseball knowledge!</p>
        <p>Already have an account? <Link to='signin'>Log in here</Link></p>
        <label htmlFor='userName'>Name:</label><br />
        <input 
          className={this.state.inputError.email}
          id='userName'
          name='userName'
          type='text' 
          placeholder='Enter Your Name..'
          onChange={this.handleChange}
          value={this.state.userName}
        />
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
        {this.state.emailError && <p>Email already in use</p>}
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
        {this.state.passwordMatchMessage && <p>{this.state.passwordMatchMessage}</p>}
        {this.state.passwordLengthMessage && <p>{this.state.passwordLengthMessage}</p>}
        <label htmlFor='verify-password'>Verify Password:</label><br />
        <input 
          className={this.state.inputError.verifyPassword}
          id='verify-password'
          name='verifyPassword'
          type="password" 
          placeholder='At least 6 characters...'
          onChange={this.handleChange}
          value={this.state.verifyPassword}
        />
        <button type='button' onClick={this.submitHandler}>Sign Up</button>
      </form>
    )
  }
};

export const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch( setUsers(users) )
})

export default connect(null, mapDispatchToProps)(SignUp);
