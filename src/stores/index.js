import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';
import Auth from './Auth/AuthReducer';

const rootReducer = combineReducers({
    BrainGym,
    Auth,
});

export default rootReducer;
