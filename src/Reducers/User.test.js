import { currentUser } from './User';

describe('User', () => {
  it('should return a user object when SET_CURRENT_USER is the type', () => {
    const mockAction = {
      type: 'SET_CURRENT_USER',
      user: {
        name: 'Greg',
        email: 'greg@turing.io',
        password: 'abc123',
        favoritePlayers: []
      }
    };
    const expected = {
      name: 'Greg',
      email: 'greg@turing.io',
      password: 'abc123',
      favoritePlayers: []
    };

    expect(currentUser(null, mockAction)).toEqual(expected);
  });

  it('should return null when SIGN-OUT is the type', () => {
    const mockState = {
      name: 'Greg',
      email: 'greg@turing.io',
      password: 'abc123',
      favoritePlayers: []
    };
    const mockAction = {
      type: 'SIGN_OUT'
    };

    expect(currentUser(mockState, mockAction)).toEqual(null);
  });
  
  it('should return null when default state is triggered', () => {
    expect(currentUser(null, { type: 'none' })).toEqual(null);
  })
})
