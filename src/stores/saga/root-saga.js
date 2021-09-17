import { all } from 'redux-saga/effects';

import goalWatcher from '../BrainGym/BrainGymOperation';

export default function* rootSaga() {
    yield all([
        goalWatcher,
    ]);
}
