import React from 'react';
import { Landing, mapDispatchToProps } from './Landing';
import { shallow } from 'enzyme';
import { setUsers } from '../../Actions';

jest.spyOn(Storage.prototype, 'getItem');

describe('Landing', () => {
  let wrapper, mockSetUsers;

  beforeEach(() => {
    mockSetUsers = jest.fn();
    wrapper = shallow(<Landing 
      setUsers={mockSetUsers}
    />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  // it('should call to localStorage when component mounts', () => {
  //   expect(getItem).toHaveBeenCalledWith('users');
  // });

  describe('mapDispatchToProps', () => {
    it('should call setUsers when component mounts', () => {
      expect(mockSetUsers).toHaveBeenCalled();
    })
  })

})
