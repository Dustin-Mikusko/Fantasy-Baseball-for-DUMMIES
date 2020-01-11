import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { signOut } from '../../Actions';


export const Header = ({ currentUser, signOut }) => {
  return (
    <header>
      <h3>Hello, {currentUser.name}!</h3>
      <img src={logo} alt='mlb-logo' />
      <Link to='/'onClick={signOut}>Sign Out</Link>
      <Link to='/favorites'>View Your Players({currentUser.favoritePlayers.length})</Link>
    </header>
  )
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps =  dispatch => ({
  signOut: () => dispatch( signOut() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
