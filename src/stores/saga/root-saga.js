import { all } from 'redux-saga/effects';
import goalWatcher from '../BrainGym/BrainGymOperation';
import authWatcher from '../Auth/AuthOperation';
import myExamWatcher from '../MyExam/MyExamOperation';

export default function* rootSaga() {
    yield all([
        goalWatcher,
        authWatcher,
        myExamWatcher,
    ]);
}
