import React, { Component } from 'react';
import './SearchPlayerForm.css';
import { fetchSingleName, fetchFullName } from '../../apiCalls';

export default class SearchPlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      inputError: '',
      errorMessage: '',
    }
  }

  handleChange = e => {
    this.setState({ name: e.target.value})
  }

  findPlayers = () => {
    const name = this.state.name;
    if (name.includes(' ')) {
      fetchFullName(name)
        .then(data => console.log(data))
        .catch(err => this.setState({ errorMessage: err }))
    } else {
      fetchSingleName(name)
        .then(data => console.log(data))
        .catch(err => this.setState({ errorMessage: err }))
    }
  }

  render() {
    return (
      <form>
        <input type='text' onChange={this.handleChange}></input>
        <button type="button" onClick={this.findPlayers}>submit</button>
      </form>
    )
  }
}
