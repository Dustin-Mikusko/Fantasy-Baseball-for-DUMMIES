import React, { Component } from 'react';
import './SearchPlayerForm.css';
import { fetchSingleName, fetchFullName } from '../../apiCalls';
import PlayerPage from '../PlayerPage/PlayerPage';
import Header from '../Header/Header';
import PlayerContainer from '../PlayerContainer/PlayerContainer';

export default class SearchPlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      inputError: '',
      errorMessage: '',
      searchedPlayer: null,
      searchedPlayerList: []
    }
  }

  handleChange = e => {
    this.setState({ name: e.target.value})
  }

  cleanSinglePlayer = data => {
    return {
      id: data.search_player_all.queryResults.row.player_id,
      name: data.search_player_all.queryResults.row.name_display_first_last,
      team: data.search_player_all.queryResults.row.team_full,
      position: data.search_player_all.queryResults.row.position,
      inches: data.search_player_all.queryResults.row.height_inches,
      feet: data.search_player_all.queryResults.row.height_feet,
      weight: data.search_player_all.queryResults.row.weight,
      bats: data.search_player_all.queryResults.row.bats,
      throws: data.search_player_all.queryResults.row.throws
    };
  };

  cleanListOfPlayers = players => {
    return players.map(player => {
      return {
        id: player.id,
        name: player.name_display_first_last,
        team: player.team_full,
        position: player.position,
        inches: player.height_inches,
        feet: player.height_feet,
        weight: player.weight,
        bats: player.bats,
        throws: player.throws
      };
    })
  }

  findPlayers = () => {
    const name = this.state.name;
    if (name.includes(' ')) {
      fetchFullName(name)
        .then(data => {
          const player = this.cleanData(data);
          this.setState({ searchedPlayer: player })
        })
        .catch(err => this.setState({ errorMessage: err }))
    } else {
      fetchSingleName(name)
        .then(data => {
          const players = this.cleanListOfPlayers(data.search_player_all.queryResults.row)
          this.setState({ searchedPlayerList: players })
      })
        .catch(err => this.setState({ errorMessage: err }))
    }
  }

  render() {
    return (
      <>
        <Header />
        <form>
          <input type='text' onChange={this.handleChange}></input>
          <button type="button" onClick={this.findPlayers}>submit</button>
        </form>
        {this.state.searchedPlayer && <PlayerPage 
          player={this.state.searchedPlayer}
        />}
        {this.state.searchedPlayerList && <PlayerContainer 
        players={this.state.searchedPlayerList}
        />}
      </>
    )
  }
}
