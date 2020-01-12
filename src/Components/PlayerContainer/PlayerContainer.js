import React from 'react';
import './PlayerContainer';
import PlayerPage from '../PlayerPage/PlayerPage';

export const PlayerContainer = ({ players }) => {
  const displayPlayers = players.map(player => {
    return (
      <PlayerPage 
        player={player}
      />
    )
  });

  return (
    <div>
      {displayPlayers}
    </div>
  )
}

export default PlayerContainer;
