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

  it('should call setUsers when component mounts', () => {
    expect(mockSetUsers).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the setUsers action when setUsers is called', () => {
      const mockDispatch = jest.fn();
      const mockUsers = [
        {
          name: 'Greg',
          email: 'greg@turing.io',
          password: 'abc123',
          favoritePlayers: []
        }
      ]
      const actionToDispatch= setUsers(mockUsers);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setUsers(mockUsers);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
