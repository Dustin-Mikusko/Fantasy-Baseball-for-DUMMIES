import React, { Component } from 'react';
import './SearchPlayerForm.css';
import { fetchSingleName, fetchFullName } from '../../apiCalls';
import PlayerPage from '../PlayerPage/PlayerPage';
import Header from '../Header/Header';

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

  cleanData = data => {
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
          const player = {
          id: data.search_player_all.queryResults.row.player_id,
          name: data.search_player_all.queryResults.row.name_display_first_last,
          team: data.search_player_all.queryResults.row.team_full,
          position: data.search_player_all.queryResults.row.position,
          inches: data.search_player_all.queryResults.row.height_inches,
          feet: data.search_player_all.queryResults.row.height_feet,
          weight: data.search_player_all.queryResults.row.weight,
          bats: data.search_player_all.queryResults.row.bats,
          throws: data.search_player_all.queryResults.row.throws
        }
        this.setState({ searchedPlayer: player })
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
      </>
    )
  }
}
