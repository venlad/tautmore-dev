import {
    fork, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from './BrainGymTypes';
import { brainGymServices } from '../../services';

function* workerStartChest() {
    const state = yield select();
    const auth = state.Auth;
    const reqData = {
        studentId: auth?.Login?.data?._id,
        subjectId: auth?.Login?.data?.subjectsEnrolled[0]?.subject?._id,
    };

    const response = yield brainGymServices.startTest(reqData);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_START_CHEST,
            payload: response?.data,
        });
    }
}

function* watcherBrainGym() {
    yield takeLatest(actionTypes.START_CHEST, workerStartChest);
}

function* fetchAll() {
    yield fork(watcherBrainGym);
}

export default fetchAll();
