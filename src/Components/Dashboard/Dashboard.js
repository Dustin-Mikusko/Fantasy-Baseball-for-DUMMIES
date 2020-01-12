import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <h4>Welcome to your dashboard! From here you can search for players by name, see the top 25 players by each stat, or view the players that you have favorited!</h4>
      <Link to='search'>SEARCH PLAYERS</Link>
      <Link >VIEW TOP 25</Link>
      <Link to='favorites'>VIEW YOUR PLAYERS</Link>
    </>
  )
}

export default Dashboard;
