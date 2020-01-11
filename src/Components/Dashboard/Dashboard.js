import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Header from '../Header';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Link >SEARCH PLAYERS</Link>
      <Link >VIEW TOP 25</Link>
      <Link to='favorites'>VIEW YOUR PLAYERS</Link>
    </>
  )
}

export default Dashboard;
