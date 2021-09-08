import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';

const rootReducer = combineReducers({
    BrainGym,
});

export default rootReducer;
