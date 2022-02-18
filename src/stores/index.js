import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';
import Auth from './Auth/AuthReducer';
import TeacherDashboard from './TeacherDashboard/TeacherDashboardReducer';

const rootReducer = combineReducers({
    BrainGym,
    Auth,
    TeacherDashboard,
});

export default rootReducer;
