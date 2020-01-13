import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
})


