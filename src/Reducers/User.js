export const currentUser = (state = null, action ) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return action.user;

    case 'SIGN_OUT':
      return null;

    default:
      return state
  }
}
