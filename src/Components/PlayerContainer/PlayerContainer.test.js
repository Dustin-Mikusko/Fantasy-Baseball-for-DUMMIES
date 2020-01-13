import React from 'react';
import { PlayerContainer } from './PlayerContainer';
import { shallow } from 'enzyme';

describe('PlayerContainer', () => {
  it('should match the snapshot with correct data', () => {
    const mockPlayers = [
      {
        name: 'Jose Altuve',
        team: 'Houston Astros',
        position: '2B',
        inches: '6',
        feet: '5',
        weight: '165',
        bats: 'R',
        throws: 'R',
        id: '234'
      }
    ];
    const wrapper = shallow(<PlayerContainer 
      players={mockPlayers}
    />);

    expect(wrapper).toMatchSnapshot();
  }
  )
})
