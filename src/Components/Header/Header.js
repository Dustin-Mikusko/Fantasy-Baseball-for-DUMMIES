import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h3>Hello, {props.currentUser}!</h3>
      <img src={logo} alt='mlb-logo' />
      <Link to='/'>Sign Out</Link>
      <Link to='/favorites'>View Your Players({props.favoritePlayers.length})</Link>
    </header>
  )
}
