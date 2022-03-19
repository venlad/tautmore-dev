import { all } from 'redux-saga/effects';
import goalWatcher from '../BrainGym/BrainGymOperation';
import authWatcher from '../Auth/AuthOperation';
import teacherDashboardWatcher from '../TeacherDashboard/TeacherDashboardOperation';
import myExamWatcher from '../MyExam/MyExamOperation';

export default function* rootSaga() {
    yield all([
        goalWatcher,
        authWatcher,
        teacherDashboardWatcher,
        myExamWatcher,
    ]);
}
