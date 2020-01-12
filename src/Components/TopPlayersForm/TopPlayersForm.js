import React, { Component } from 'react';
import './TopPlayersForm.css';
import Header from '../Header/Header';
import { fetchTop25 } from '../../apiCalls';
import TopPlayersContainer from '../TopPlayersContainer/TopPlayersContainer'

export class TopPlayersForm extends Component {
  constructor() {
    super();
    this.state = {
      stat: '',
      season: '',
      error: false,
      players: []
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  getTopPlayers = () => {
    fetchTop25(this.state.season, this.state.stat)
      .then(data => {
        console.log(data.leader_hitting_repeater.leader_hitting_mux.queryResults.row);
        this.setState({ players: data.leader_hitting_repeater.leader_hitting_mux.queryResults.row })
      })
      .catch(err => this.setState({ error: true }))
  }

  render() {
    return (
    <>
      <Header />
      <form>
        <select name='stat' onChange={this.handleChange}>
          <option>--Select Stat--</option>
          <option value='bb'>BB</option>
          <option value='rbi'>RBI</option>
          <option value='sb'>SB</option>
          <option value='hr'>HR</option>
          <option value='obp'>OBP</option>
          <option value='r'>R</option>
          <option value='ab'>AB</option>
          <option value='avg'>AVG</option>
          <option value='slg'>SLG</option>
          <option value='ops'>OPS</option>
          <option value='so'>SO</option>
        </select>
        <select name='season' onChange={this.handleChange}>
          <option>--Select Season--</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
        </select>
        <button type='button' onClick={this.getTopPlayers}>GO</button>
      </form>
      {this.state.error && <p>Oops! Something went wrong..</p>}
      <TopPlayersContainer 
        players={this.state.players}
        stat={this.state.stat} 
      />
    </>
    )
  }
}

export default TopPlayersForm;
