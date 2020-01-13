import React from 'react';
import './PlayerPage.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PlayerPage = ({ player }) => {
  return (
    <section className='player-card'>
      <h1 className='player-name'>{player.name}</h1>
      <p><span className='tag'>Team:</span> {player.team}</p>
      <p><span className='tag'>Position:</span> {player.position}</p>
      <p><span className='tag'>Height:</span> {player.feet}' {player.inches}"</p>
      <p><span className='tag'>Weight:</span> {player.weight}lbs.</p>
      <p><span className='tag bats'>Bats/Throws:</span> {player.bats}/{player.throws}</p>
      <Link to={`player/${player.id}`} className='view-stats-btn'>VIEW STATS</Link>
    </section>
  )
};

export default PlayerPage;

PlayerPage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  team: PropTypes.string,
  postition: PropTypes.string,
  feet: PropTypes.string,
  inches: PropTypes.string,
  bats: PropTypes.string,
  throws: PropTypes.string
}

