import React from 'react';
import './PlayerContainer.css';
import PlayerPage from '../PlayerPage/PlayerPage';
import PropTypes from 'prop-types';

export const PlayerContainer = ({ players }) => {
  const displayPlayers = players.map(player => {
    return (
      <PlayerPage 
        player={player}
      />
    )
  });

  return (
    <div className='search-player-container'>
      {displayPlayers}
    </div>
  )
}

export default PlayerContainer;

PlayerContainer.propTypes = {
  players: PropTypes.array
}
