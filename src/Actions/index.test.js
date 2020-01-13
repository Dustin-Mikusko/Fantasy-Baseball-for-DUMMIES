import { addUser, setUsers, setCurrentUser, signOut } from './index';

describe('Actions', () => {

  describe('addUser', () => {
    it('should add a type and user object in the addUser action', () => {
      const mockUser= {
        name: 'Greg',
        emai: 'greg@turing.io',
        password: 'abc123'
      }
        
      const expected = {
        type: 'ADD_USER',
        user: mockUser
      };

      expect(addUser(mockUser)).toEqual(expected);
    });
  });

  describe('setUsers', () => {
    it('should add a type and an array of users in the setUsers action', () => {
      const mockUsers = [
        {
          name: 'Greg',
          emai: 'greg@turing.io',
          password: 'abc123'
        },
        {
          name: 'Robbie',
          emai: 'robbie@turing.io',
          password: 'abc123'
        }
      ];
      const expected = {
        type: 'SET_USERS',
        users: mockUsers
      };

      expect(setUsers(mockUsers)).toEqual(expected);
    });
  });

  describe('setCurrentUser', () => {
    it('should add a type and a currentUser object in the setCurrentUser actoins', () => {
      const mockCurrentUser = {
        name: 'Greg',
        emai: 'greg@turing.io',
        password: 'abc123'
      };
      const expected = {
        type: 'SET_CURRENT_USER',
        user: mockCurrentUser
      };

      expect(setCurrentUser(mockCurrentUser)).toEqual(expected);
    });
  });

  describe('signOut', () => {
    it('should add a type in the signOut action', () => {
      const expected = {
        type: "SIGN_OUT"
      };

      expect(signOut()).toEqual(expected);
    })
  })
})
