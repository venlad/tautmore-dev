import {
    fork, put, takeLatest,
} from 'redux-saga/effects';
import * as actionTypes from './BrainGymTypes';
import { brainGymServices } from '../../services';

function* workerStartChest() {
    // const state = yield select();
    // const auth = state.Auth;
    const reqData = {
        // studentId: auth?.Login?.data?._id,
        // subjectId: auth?.Login?.data?.subjectsEnrolled[0]?.subject?._id,
        studentId: '61f236b54df66400096feec0',
        subjectId: '61cc72e3c32134a3653b3147',
    };

    const response = yield brainGymServices.startTest(reqData);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_START_CHEST,
            payload: response?.data,
        });
    }
}

function* workerGetQuestionInChest(data) {
    const value =  data?.payload;
    const response = yield brainGymServices.getQuestionInChest(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_QUESTION_IN_CHEST,
            payload: response,
        });
    }
}

function* workerAttemptQuestion(data) {
    const value = data?.payload;
    const response = yield brainGymServices.attemptQuestion(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_ATTEMPT_QUESTION,
            payload: response,
        });
    }
}

function* workerCompleteChest(data) {
    const value = data?.payload;
    const response = yield brainGymServices.completeChest(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_COMPLETE_CHEST,
            payload: response,
        });
    }
}

function* watcherBrainGym() {
    yield takeLatest(actionTypes.START_CHEST, workerStartChest);
    yield takeLatest(actionTypes.GET_QUESTION_IN_CHEST, workerGetQuestionInChest);
    yield takeLatest(actionTypes.ATTEMPT_QUESTION, workerAttemptQuestion);
    yield takeLatest(actionTypes.COMPLETE_CHEST, workerCompleteChest);
}

function* fetchAll() {
    yield fork(watcherBrainGym);
}

export default fetchAll();
