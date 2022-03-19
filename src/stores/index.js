import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';
import Auth from './Auth/AuthReducer';
import TeacherDashboard from './TeacherDashboard/TeacherDashboardReducer';
import MyExam from './MyExam/MyExamReducer';

const rootReducer = combineReducers({
    BrainGym,
    Auth,
    TeacherDashboard,
    MyExam,
});

export default rootReducer;
