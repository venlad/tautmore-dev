import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';
import Auth from './Auth/AuthReducer';
import footerGrade from './Grades/GradesReducer';
import TeacherDashboard from './TeacherDashboard/TeacherDashboardReducer';
import MyExam from './MyExam/MyExamReducer';
import concept from './Concept/ConceptReducer';

const rootReducer = combineReducers({
    BrainGym,
    Auth,
    footerGrade,
    TeacherDashboard,
    MyExam,
    concept,
});

export default rootReducer;
