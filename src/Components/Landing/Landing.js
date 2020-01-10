import React, { Component } from 'react';
import './Landing.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsers } from '../../Actions';

export class Landing extends Component  {
  constructor() {
    super();
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users"));
    this.props.setUsers(users)
  }

  render() {
    return (
      <main>
        <section className='landing-left'>
          <img src={logo} className='logo' alt='mlb-logo'/>
          <h1>Baseball for <span className='dummies'>DUMMIES</span></h1>
        </section>
        <section className='landing-right'>
          <h2>New to baseball?</h2>
          <p>Step up to the plate today to get a crash course on baseball stats! With our cutting edge technology, we bring you a simple black and white formula to tell you which players will be a HOME RUN in your draft, and those that are sure outs..</p>
          <Link to='/signin'>Sign In</Link>
          <Link to='/signup'>Sign Up</Link>
        </section>
      </main>
    )
  };
}

export const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch( setUsers(users) )
})

export default connect(null, mapDispatchToProps)(Landing);
