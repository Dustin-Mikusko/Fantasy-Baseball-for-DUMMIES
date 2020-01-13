import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export const Dashboard = () => {
  return (
    <>
      <section className='dashboard'>
        <Header />
        <h1 className='dashboard-welcome'>Welcome to your dashboard!</h1>
        <h4 className='dashboard-info'>From here you can search for players by name, see the top 25 players by each stat, or view the players that you have favorited!</h4>
        <Link to='search' className='dashboard-link'>SEARCH PLAYERS</Link>
        <Link to='top-players' className='dashboard-link'>VIEW TOP 25</Link>
        <Link to='favorites' className='dashboard-link'>VIEW YOUR PLAYERS</Link>
      </section>
    </>
  )
}

export default Dashboard;
