import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';
import Auth from './Auth/AuthReducer';
import footerGrade from './Grades/GradesReducer';

const rootReducer = combineReducers({
    BrainGym,
    Auth,
    footerGrade,
});

export default rootReducer;
