import React from 'react';
import './TopPlayer.css'

export const TopPlayer = ({ stat, statName, team, name, id }) => {
  const statNameUpper = statName.toUpperCase();
  return (
    <>
      <h3>Name: {name}</h3>
      <p>Team: {team}</p>
      <p>{statNameUpper}: {stat}</p>
    </>
  )
}

export default TopPlayer;
