import React from 'react';
import SearchPage from './SearchPage';
import { shallow } from 'enzyme';

describe('SearchPage', () => {
  it('should match the snapshot', () => {
    const wrapper =shallow(<SearchPage />);

    expect(wrapper).toMatchSnapshot();
  });
})
