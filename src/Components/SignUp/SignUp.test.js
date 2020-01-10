import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapDispatchToProps } from './SignUp';
import { setUsers, setCurrentUser } from '../../Actions';

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUp 
      setUsers={jest.fn()}
      setCurrentUser={jest.fn()}
    />);
  });

  it('should match the snapshot with no errors', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
