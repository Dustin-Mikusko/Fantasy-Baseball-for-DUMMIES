import React from 'react';
import TopPlayersContainer from './TopPlayersContainer';
import { shallow } from 'enzyme';

describe('TopPlayersContainer', () => {
  it('should match snapshot with correct data', () => {
    const mockPlayers = [
      {
        stat: 'hr',
        team: 'Houston Astros',
        name: 'Jose Altuve',
        rank: '1'
      }
    ];
    const wrapper = shallow(<TopPlayersContainer 
      stat='hr'
      players={mockPlayers}
    />);
    
    expect(wrapper).toMatchSnapshot();
  })
})
