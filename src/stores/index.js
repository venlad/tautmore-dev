import { combineReducers } from 'redux';
import users from './BrainGym/BrainGymReducer'

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;