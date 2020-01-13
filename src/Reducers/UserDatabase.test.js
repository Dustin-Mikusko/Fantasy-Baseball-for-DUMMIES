import { userDatabase } from './UserDatabase';

describe('UserDatabase', () => {
  it('should return an array of users when SET_USERS is the type', () => {
    const mockAction = {
      type: 'SET_USERS',
      users: [
        {
          name: 'Greg',
          email: 'greg@turing.io',
          password: 'abc123',
          favoritePlayers: []
        }
      ]
    };
    const expected = [
      {
        name: 'Greg',
        email: 'greg@turing.io',
        password: 'abc123',
        favoritePlayers: []
      }
    ];

    expect(userDatabase([], mockAction)).toEqual(expected)
  });

  it('should return default sate when there is no type', () => {
    expect(userDatabase([], { type: 'none' })).toEqual([])
  })
})
