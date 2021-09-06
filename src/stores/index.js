import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';

const rootReducer = combineReducers({
  BrainGym: BrainGym,
});

export default rootReducer;