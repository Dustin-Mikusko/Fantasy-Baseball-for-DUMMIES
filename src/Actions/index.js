export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const setUsers = users => ({
  type: 'SET_USERS',
  users
});

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
})
