import React from 'react';
import TopPlayer from './TopPlayer';
import { shallow } from 'enzyme';

describe('TopPlayer', () => {
  it('should match the snapshot with the correct data', () => {
    const mockPlayer = {
      stat: 'hr',
      team: 'Houston Astros',
      name: 'Jose Altuve',
      rank: '1'
    };
    const wrapper = shallow(<TopPlayer 
      statName='rbi'
      player={mockPlayer}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})
