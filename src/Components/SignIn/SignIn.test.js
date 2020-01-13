import React from 'react';
import { SignIn, mapDispatchToProps, mapStateToProps } from './SignIn';
import { shallow } from 'enzyme';
import { setCurrentUser } from '../../Actions';

describe('SignIn', () => {
  let wrapper, users, currentUser;

  beforeEach(() => {
    users = [
      {
        name: 'Greg',
        email: 'greg@turing.io',
        password: 'abc123',
        favoritePlayers: []
      }
    ];
    currentUser = {
      name: 'Greg',
      email: 'greg@turing.io',
      password: 'abc123',
      favoritePlayers: []
    };
    wrapper = shallow(<SignIn 
      users={users}
      currentUser={currentUser}
      setCurrentUser={jest.fn()}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {
    it('should change state when handleChange is called', () => {
      const mockEvent = {
        target: {
          name: 'email',
          value: 'greg@email.com'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('email')).toEqual('greg@email.com')
    });
  });

  describe('submitHandler', () => {
    it('should invoke checkInputs', async () => {
      wrapper.instance().checkInputs = jest.fn();

      await wrapper.instance().submitHandler();
      expect(wrapper.instance().checkInputs).toHaveBeenCalled();
    });

    it('should invoke findEmail', async () => {
      wrapper.instance().findEmail = jest.fn();

      await wrapper.instance().submitHandler();
      expect(wrapper.instance().findEmail).toHaveBeenCalled();
    });
  });

  describe('checkInputs', () => {
    it('should change inputError state to error if an input is empty', () => {
      const mockState = {
        email: '',
        password: 'abc123'
      };
      const expected = {
          email: 'error',
          password: ''
      };
  
      wrapper.setState(mockState);
      wrapper.instance().checkInputs();
      expect(wrapper.state('inputError')).toEqual(expected)
    });

    it('should change inputError state to empty string if input has a value', () => {
      const mockState = {
        email: '',
        password: 'abc123'
      };
      const expected = {
          email: 'error',
          password: ''
      };
  
      wrapper.setState(mockState);
      wrapper.instance().checkInputs();
      expect(wrapper.state('inputError')).toEqual(expected)
    });
  });

  describe('findEmail', () => {
    it('should set emailMessage state if there is no email state', () => {
      const mockState = {
        email: ''
      }

      wrapper.setState(mockState);
      wrapper.instance().findEmail();
      expect(wrapper.state('emailMessage')).toEqual('Email required');
    });

    it('should set emailMessage state to empty string if there is an email state', () => {
      const mockState = {
        email: 'greg@turing.io'
      }
  
      wrapper.setState(mockState);
      wrapper.instance().findEmail();
      expect(wrapper.state('emailMessage')).toEqual('');
    });
    
    it('should invoke validatePassword if the email exists in the database', () => {
      wrapper.instance().validatePassword = jest.fn();
      const mockState = {
        email: 'greg@turing.io'
      };
      wrapper.setState(mockState);
      wrapper.instance().findEmail();
      expect(wrapper.instance().validatePassword).toHaveBeenCalled();
    });

    it('should change emailMessage state if the email does not exist in the database', () => {
      const mockState = {
        email: 'gre@turing.io'
      };
      wrapper.setState(mockState);
      wrapper.instance().findEmail();
      expect(wrapper.state('emailMessage')).toEqual('Email not found');
    });
  });

  describe('validatePassword', () => {
    it('should set passwordError state to empty string if the password state matches the user password', () => {
      const mockState = {
        password: 'abc123'
      };
      wrapper.setState(mockState);
      wrapper.instance().validatePassword();
      expect(wrapper.state('passwordError')).toEqual('');
    });

    it('should set passwordError state error message if the password state does not match user password', () => {
      const mockState = {
        password: 'abc113'
      };
      wrapper.setState(mockState);
      wrapper.instance().validatePassword();
      expect(wrapper.state('passwordError')).toEqual('');
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should call dispatch with a setCurrentUser action when submitUser is called', () => {
      const actionToDispatch = setCurrentUser(currentUser);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setCurrentUser(currentUser);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of users and a user object', () => {
      const mockUsers = [
        {
          name: 'Greg',
          email: 'greg@turing.io',
          password: 'abc123',
          favoritePlayers: []
        }
      ]
      const mockState = {
        fake: 'fake',
        userDatabase: mockUsers,
        currentUser: currentUser
      };
      const expected = {
        users: mockUsers,
        currentUser: currentUser
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
})
