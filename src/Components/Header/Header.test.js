import React from 'react';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';
import { signOut } from '../../Actions';

describe('Header', () => {
  let wrapper, mockUser;

  beforeEach(() => {
    mockUser = {
      name: 'Greg',
      emai: 'greg@turing.io',
      password: 'abc123',
      favoritePlayers: []
    }
    wrapper = shallow(<Header 
      currentUser={mockUser}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a currentUser object', () => {
      const mockState = {
        currentUser: {
          name: 'Greg',
          emai: 'greg@turing.io',
          password: 'abc123',
          favoritePlayers: []
        },
        userDatabase: [
          {
            name: 'Greg',
            emai: 'greg@turing.io',
            password: 'abc123',
            favoritePlayers: []
          },
          {
            name: 'Greg',
            emai: 'greg@turing.io',
            password: 'abc123',
            favoritePlayers: []
          }
        ]
      };
      const expected = {
        currentUser: {
          name: 'Greg',
          emai: 'greg@turing.io',
          password: 'abc123',
          favoritePlayers: []
        }
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('call dispatch with signOut action when sign-out Link is clicked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = signOut();

      const mappedProps = mapDispatchToProps(mockDispatch);
      wrapper.find('.sign-out').simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
