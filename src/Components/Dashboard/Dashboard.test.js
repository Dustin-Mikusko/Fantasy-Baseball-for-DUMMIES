import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';


describe('Dashboard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper).toMatchSnapshot();
  })
})
