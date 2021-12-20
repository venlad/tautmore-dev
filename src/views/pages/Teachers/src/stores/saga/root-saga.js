import { all } from 'redux-saga/effects';
import goalWatcher from '../BrainGym/BrainGymOperation';
import authWatcher from '../Auth/AuthOperation';

export default function* rootSaga() {
    yield all([
        goalWatcher,
        authWatcher,
    ]);
}
