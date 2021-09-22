import {
    fork, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from './BrainGymTypes';
import { brainGymServices, questionsServices } from '../../services';

const studentID = '6148952cfbef0900086a6a10';
const brainGymId = '6149ddb045b85f00054ef763';

function* workedCompleteChest(data) {
    try {
        const reqData = {
            ...data.payload,
        };
        const response = yield brainGymServices.completeChest({ ...reqData });
        console.log(response, 'c q');
    } catch (error) {
        console.log(error);
    }
}

function* workerGetMasterBrainGymById() {
    const reqData = { chest_id: brainGymId };
    const response = yield brainGymServices.getMasterBrainGymById({ ...reqData });
    if (response.status === 'success') {
        let currentChest = {};
        let currentQueCounter = 0;
        response?.gym?.chest.filter((item, i) => {
            if (item?.status === 'started' || response?.gym?.chest?.[i - 1]?.status === 'finished') {
                currentChest = item;
            }
            currentQueCounter += item?.questions.length;
            return null;
        });
        yield put({
            type: actionTypes.UPDATE_MASTER_BRAIN_GYM_BY_ID,
            payload: response?.gym,
        });
        yield put({
            type: actionTypes.SET_CHEST_DATA,
            payload: currentChest,
        });
        yield put({
            type: actionTypes.SET_QUESTION_COUNTER,
            payload: currentQueCounter,
        });
    }
}

function* workerGetQuestionsByTag(data) {
    const state = yield select();
    const masterBrainGym = state.BrainGym.masterBrainGym;
    const reqData = {
        difficulty: data.actions?.difficulty,
        student_id: studentID,
        chapter: masterBrainGym?.chest[0]?.chapter,
    };

    yield put({
        type: actionTypes.UPDATE_QUESTION_BY_TAG,
        que_getquetag: {},
    });

    const response = yield questionsServices.getQuestionsByDifficultTag(reqData);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_QUESTION_BY_TAG,
            payload: response?.questions,
        });
    }
}

function* workerAttemptQuestion(gymData) {
    const state = yield select();
    const brainGym = state.BrainGym;
    const data = gymData.payload;
    const reqData = {
        solution_index: data?.selectoption,
        time_to_solve: data?.time,
        question_id: data?.questiondetail._id,
        student_id: studentID,
        chest_id: brainGym.chestData?._id,
    };

    yield put({
        type: actionTypes.UPDATE_QUESTION_BY_TAG,
        que_getquetag: {},
    });

    const attemptresponse = yield questionsServices.attemptQuestion(reqData);

    if ((brainGym?.queCounter + 1) % 5 === 0) {
        yield put({
            type: actionTypes.COMPLETE_CHEST,
            payload: { chest_id: brainGym.chestData?._id },
        });
    }
    if (attemptresponse) {
        yield put({
            type: actionTypes.GET_QUESTIONS_BY_TAG,
            actions: { difficulty: attemptresponse?.nextTag },
        });

        yield put({
            type: actionTypes.GET_MASTER_BRAIN_GYM_BY_ID,
            actions: {},
        });
    }
    yield put({
        type: actionTypes.UPDATE_ATTEMPT_QUESTION,
        attempt_que: attemptresponse,
    });
}

function* watcherBrainGym() {
    yield takeLatest(actionTypes.GET_MASTER_BRAIN_GYM_BY_ID, workerGetMasterBrainGymById);
    yield takeLatest(actionTypes.GET_QUESTIONS_BY_TAG, workerGetQuestionsByTag);
    yield takeLatest(actionTypes.ATTEMPT_QUESTION, workerAttemptQuestion);
    yield takeLatest(actionTypes.COMPLETE_CHEST, workedCompleteChest);
}

function* fetchAll() {
    yield fork(watcherBrainGym);
}

export default fetchAll();
