import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { signOut } from '../../Actions';


export const Header = ({ currentUser, signOut }) => {
  return (
    <header>
      <h3 className='welcome'>Hello, {currentUser.name}!</h3>
      <img src={logo} alt='mlb-logo' />
      <div className='links'>
        <Link to='/' className='header-link sign-out' onClick={signOut}>Sign Out</Link>
        <Link to='/favorites' id='favorites' className='header-link'>View Your Players({currentUser.favoritePlayers.length})</Link>
      </div>
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
