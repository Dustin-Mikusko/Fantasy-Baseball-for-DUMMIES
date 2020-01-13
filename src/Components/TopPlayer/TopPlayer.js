import React from 'react';
import './TopPlayer.css'
import PropTypes from 'prop-types';

export const TopPlayer = ({ stat, statName, team, name, rank }) => {
  const statNameUpper = statName.toUpperCase();
  return (
    <div className='top-player-card'>
      <h3 className='top-player-name'>#{rank} {name}</h3>
      <p><span className='tag'>Team: </span>{team}</p>
      <p><span className='tag stat'>{statNameUpper}: </span>{stat}</p>
    </div>
  )
}

export default TopPlayer;

TopPlayer.propTypes = {
  stat: PropTypes.string,
  statName: PropTypes.string,
  team: PropTypes.string,
  name: PropTypes.string,
  rank: PropTypes.number
}
