import React, { Component } from 'react';
import './SearchPlayerForm.css';
import { fetchSingleName, fetchFullName } from '../../apiCalls';
import PlayerPage from '../PlayerPage/PlayerPage';
import Header from '../Header/Header';
import PlayerContainer from '../PlayerContainer/PlayerContainer';

export class SearchPlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      inputError: '',
      errorMessage: '',
      searchedPlayer: null,
      searchedPlayerList: null,
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
        id: player.player_id,
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
          if (data.search_player_all.queryResults.totalSize === '0') {
            this.setState({ errorMessage: "Oops! Player not found or is no longer active.."})
          } else {
            this.setState({ searchedPlayerList: [] })
            this.setState({ errorMessage: '' });
            const player = this.cleanSinglePlayer(data);
            this.setState({ searchedPlayer: player })
          }
        })
        .catch(err => this.setState({ errorMessage: err }))
    } else {
      fetchSingleName(name)
        .then(data => {
          if (data.search_player_all.queryResults.totalSize === '0') {
            this.setState({ errorMessage: "Oops! Player not found or is no longer active.."})
          } else {
            this.setState({ errorMessage: '' });
            this.setState({ searchedPlayer: null })
            const players = this.cleanListOfPlayers(data.search_player_all.queryResults.row)
            this.setState({ searchedPlayerList: players })
          } 
        })
        .catch(err => this.setState({ errorMessage: err }))
    }
  }

  render() {
    return (
      <>
        <Header />
        <form className='search-player-form'>
          <input type='text' className='player-search-input' onChange={this.handleChange} placeholder='e.g jose altuve'></input>
          <button type="button" className='player-search-btn'onClick={this.findPlayers}>SEARCH</button>
        </form>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        {this.state.searchedPlayer && <div className='single-player'><PlayerPage 
          player={this.state.searchedPlayer}
        /></div>}
        {this.state.searchedPlayerList && <PlayerContainer 
        players={this.state.searchedPlayerList}
        />}
      </>
    )
  }
};

export default SearchPlayerForm;
