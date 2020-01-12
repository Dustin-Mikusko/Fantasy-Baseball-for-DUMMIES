import React from 'react';
import './TopPlayersContainer.css';
import TopPlayer from '../TopPlayer/TopPlayer'

export const TopPlayersContainer = ({ players, stat }) => {
  const displayPlayers = players.map(player => {
    return (
      <TopPlayer 
        stat={player[stat]}
        statName={stat}
        team={player.team_name}
        name={player.name_display_first_last}
        id={player.player_id}
      />
    )
  });

  return (
    <>
      {displayPlayers}
    </>
  )
}

export default TopPlayersContainer;
