export const user = (state = null, action ) => {
  switch(action.type) {
    case 'ADD_USER':
      return action.user;

    case 'SIGN_OUT':
      return null;

    default:
      return state
  }
}
