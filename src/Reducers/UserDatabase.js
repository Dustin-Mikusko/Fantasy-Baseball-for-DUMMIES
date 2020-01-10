export const userDatabase = ( state = [], action ) => {
  switch(action.type) {
    case ('RETRIEVE_USERS'):
      return [...action.users]

    default:
      return state
  }
}
