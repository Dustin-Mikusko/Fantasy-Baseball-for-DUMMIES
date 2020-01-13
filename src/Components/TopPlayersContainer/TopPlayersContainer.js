import React from 'react';
import './TopPlayersContainer.css';
import TopPlayer from '../TopPlayer/TopPlayer';
import PropTypes from 'prop-types';

export const TopPlayersContainer = ({ players, stat }) => {
  const displayPlayers = players.map((player, index) => {
    return (
      <TopPlayer 
        rank={index + 1}
        stat={player[stat]}
        statName={stat}
        team={player.team_name}
        name={player.name_display_first_last}
        id={player.player_id}
      />
    )
  });

  return (
   <section className='top-player-container'>
    {displayPlayers}
   </section>
  )
}

export default TopPlayersContainer;

TopPlayersContainer.propTypes = {
  players: PropTypes.array,
  stat: PropTypes.string
}
