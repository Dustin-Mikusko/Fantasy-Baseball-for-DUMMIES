import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapStateToProps, mapDispatchToProps } from './SignUp';
import { setUsers, setCurrentUser } from '../../Actions';

describe('SignUp', () => {
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
    }
    wrapper = shallow(<SignUp 
      users={users}
      currentUser={currentUser}
      setUsers={jest.fn()}
      setCurrentUser={jest.fn()}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should match the snapshot with input errors', () => {
    const mockState = {
      inputError: {
        userName: 'error',
        email: '',
        password: '',
        verifyPassword: ''
      }
    };
    wrapper.setState(mockState);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update local state when handleChange is called', () => {
      const mockEvent = {
        target: {
          name: 'userName',
          value: 'Greg'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('userName')).toEqual('Greg')
    })
  });

  describe('submitHandler', () => {
    it('should set emailError state to false when submitHandler is invoked', () => {
      const mockState = {
        emailError: true
      };
      wrapper.setState(mockState);
      wrapper.instance().submitHandler();
      expect(wrapper.state('emailError')).toEqual(false);
    });

    it('should invoke checkInputs when submitHandler is invoked', async () => {
      wrapper.instance().checkInputs = jest.fn();
      await wrapper.instance().submitHandler();

      expect(wrapper.instance().checkInputs).toHaveBeenCalled();
    });

    it('should invoke checkUserName', async () => {
      wrapper.instance().checkUserName = jest.fn();
      await wrapper.instance().submitHandler();

      expect(wrapper.instance().checkUserName).toHaveBeenCalled();
    });

    it('should invoke checkExistingEmails', async () => {
      wrapper.instance().checkExistingEmails = jest.fn();
      await wrapper.instance().submitHandler();

      expect(wrapper.instance().checkExistingEmails).toHaveBeenCalled();
    });

    it('should invoke checkPasswordMatch', async () => {
      wrapper.instance().checkPasswordMatch = jest.fn();
      await wrapper.instance().submitHandler();

      expect(wrapper.instance().checkPasswordMatch).toHaveBeenCalled();
    });

    it('shluld invoke checkPasswordLength', async () => {
      wrapper.instance().checkPasswordLength = jest.fn();
      await wrapper.instance().submitHandler();

      expect(wrapper.instance().checkPasswordLength).toHaveBeenCalled();
    });

    it('should invoke submitUser', async () => {
      const mockState = {
        userName: 'Greg',
        email: 'greg@turing.io',
        password: 'abc123',
        verifyPassword: 'abc123',
        inputError: {
          userName: '',
          email: '',
          password: '',
          verifyPassword: ''
        },
        passwordError: false,
        emailError: false,
        userNameError: false,
        passwordLengthMessage: false,
        passwordMatchMessage: false,
      };
      await wrapper.setState(mockState);
      wrapper.instance().submitUser = jest.fn();
      await wrapper.instance().submitHandler();
      wrapper.instance().forceUpdate();

      expect(wrapper.instance().submitUser).toHaveBeenCalled();
    });

    it('should return null if there is an error', async () => {
      const mockState = {
        passwordError: true
      };
      await wrapper.setState(mockState);
      wrapper.instance().forceUpdate();

      expect(wrapper.instance().submitHandler()).toEqual(null);
    });
  });

  describe('submitUser', () => {
    it('should invoke setUsers', () => {
      const mockUser = {
        name: 'Greg',
        email: 'greg@turing.io',
        password: 'abc123',
        favoritePlayers: []
      }
      wrapper.instance().setUsers = jest.fn();

      wrapper.instance().submitUser(mockUser);
      expect(wrapper.instance().setUsers).toHaveBeenCalled();
    });
  });

  describe('checkUserName', () => {
    it('should set userNameError to true if there is no userName state', () => {
      wrapper.instance().checkUserName();
      expect(wrapper.state('userNameError')).toEqual(true);
    });

    it('should set UserNameError to false if there is a userName state', () => {
      const mockState = {
        userName: 'Greg'
      };
      wrapper.setState(mockState)
      wrapper.instance().checkUserName();
      expect(wrapper.state('userNameError')).toEqual(false);
    });
  });

  describe('checkInputs', () => {
    it('should change inputError state if an input is empty', () => {
      const mockState = {
        password: '',
      };
      const mockErrorState = {
        userName: 'error',
        email: 'error',
        password: 'error',
        verifyPassword: 'error'
      };
      wrapper.setState(mockState);
      wrapper.instance().forceUpdate();

      wrapper.instance().checkInputs();
      expect(wrapper.state('inputError')).toEqual(mockErrorState);
    });
  });

  describe('checkForInputError', () => {
    it('should return true if there are no input errors', () => {
      const mockState = {
        inputError: {
          userName: '',
          email: '',
          password: '',
          verifyPassword: ''
        }
      };
      wrapper.setState(mockState);
      expect(wrapper.instance().checkForInputError()).toEqual(true);
    });

    it('should return false if ther are input errors', () => {
      const mockState = {
        inputError: {
          userName: 'error',
          email: '',
          password: '',
          verifyPassword: ''
        }
      };
      wrapper.setState(mockState);
      wrapper.instance().forceUpdate();
      expect(wrapper.instance().checkForInputError()).toEqual(false);
    });
  });

  describe('checkExistingEmails', () => {
    it('should should set emailError state to true if the email already exists', () => {
      const mockState = {
        email: 'greg@turing.io'
      };

      wrapper.setState(mockState);
      wrapper.instance().checkExistingEmails();
      expect(wrapper.state('emailError')).toEqual(true);
    });
  });

  describe('checkPasswordLength', () => {
    it('should set passwordLengthMessage and passwordError to true if the password state is less than 6 characters', async () => {
      const mockState = {
        password: 'abc12'
      };
      await wrapper.setState(mockState);
      await wrapper.instance().checkPasswordLength();
      expect(wrapper.state('passwordLengthMessage')).toEqual(true);
      expect(wrapper.state('passwordError')).toEqual(true);
    });
  });

  describe('checkPasswordMatch', () => {
    it('should set passwordError and passWordMatchMessage state to true if the password inputs do not match', () => {
      const mockState = {
        password: 'abc123',
        verifyPassword: 'abc124'
      };
      wrapper.setState(mockState);
      wrapper.instance().checkPasswordMatch();
      expect(wrapper.state('passwordError')).toEqual(true);
      expect(wrapper.state('passwordMatchMessage')).toEqual(true);
    });
    
    it('should set passwordError and passWordMatchMessage state to false if the password inputs do not match' , () => {
      const mockState = {
        password: 'abc123',
        verifyPassword: 'abc123'
      };
      wrapper.setState(mockState);
      wrapper.instance().checkPasswordMatch();
      expect(wrapper.state('passwordError')).toEqual(false);
      expect(wrapper.state('passwordMatchMessage')).toEqual('');
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn()
    });

    it('should call dispatch with a setCurrentUser action when submitUser is called', () => {
      const actionToDispatch = setCurrentUser(currentUser);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setCurrentUser(currentUser);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a setUsers action when submitUser is called', () => {
      const actionToDispatch = setUsers(users);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setUsers(users);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
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
  })
});
