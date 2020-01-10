import { combineReducers } from 'redux';
import { currentUser } from './User';
import { userDatabase } from './UserDatabase'

export const rootReducer = combineReducers({
  currentUser
})

export default rootReducer;
