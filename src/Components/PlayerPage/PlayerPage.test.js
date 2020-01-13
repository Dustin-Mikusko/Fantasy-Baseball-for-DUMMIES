import React from 'react';
import PlayerPage from './PlayerPage';
import { shallow } from 'enzyme';

describe('PlayerPage', () => {
  it('should match the snapshot with correct data', () => {
    const mockPlayer =  {
      name: 'Jose Altuve',
      team: 'Houston Astros',
      position: '2B',
      inches: '6',
      feet: '5',
      weight: '165',
      bats: 'R',
      throws: 'R',
      id: '234'
    };
    const wrapper = shallow(<PlayerPage 
      player={mockPlayer}
    />);
      
    expect(wrapper).toMatchSnapshot();
  });
})
