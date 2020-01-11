import React from 'react';
import './PlayerPage.css';
import { Link } from 'react-router-dom';

export const PlayerPage = ({ player }) => {
  return (
    <>
      <h1>{player.name}</h1>
      <p>Team: {player.team}</p>
      <p>Position: {player.position}</p>
      <p>Height: {player.feet}' {player.inches}"</p>
      <p>Weight: {player.weight}lbs.</p>
      <p>Bats/Throws: {player.bats}/{player.throws}</p>
      <Link to={`player/${player.id}`}>VIEW STATS</Link>
    </>
  )
};

export default PlayerPage;

