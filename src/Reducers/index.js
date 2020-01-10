import { combineReducers } from 'redux';
import { currentUser } from './User';
import { userDatabase } from './UserDatabase'

export const rootReducer = combineReducers({
  currentUser,
  userDatabase
})

export default rootReducer;
