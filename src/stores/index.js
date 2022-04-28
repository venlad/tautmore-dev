import { combineReducers } from 'redux';
import BrainGym from './BrainGym/BrainGymReducer';
import Auth from './Auth/AuthReducer';
import { selectBoardReducer, selectFooterGradeReducer } from './Grades/GradesReducer';
import TeacherDashboard from './TeacherDashboard/TeacherDashboardReducer';
import MyExam from './MyExam/MyExamReducer';
import concept from './Concept/ConceptReducer';
import fetchReducer from './Fetch/FetchReducer';

const rootReducer = combineReducers({
    BrainGym,
    Auth,
    footerGrade: selectFooterGradeReducer,
    TeacherDashboard,
    MyExam,
    concept,
    fetchAll: fetchReducer,
    board: selectBoardReducer,
});

export default rootReducer;
