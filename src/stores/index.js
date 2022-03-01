import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';
import Auth from './Auth/AuthReducer';
import MyExam from './MyExam/MyExamReducer';

const rootReducer = combineReducers({
    BrainGym,
    Auth,
    MyExam,
});

export default rootReducer;
