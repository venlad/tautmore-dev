import {
    fork, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from './BrainGymTypes';
import { brainGymServices, questionsServices } from '../../services';

const studentID = '6148952cfbef0900086a6a10';
const chestID = '6149ddb045b85f00054ef763';

function* WorkerGetMasterBrainGymById() {
    const reqData = { chest_id: chestID };
    const response = yield brainGymServices.getMasterBrainGymById({ ...reqData });
    if (response.status === 'success') {
        const filteredChest = response?.gym?.chest.find((item) => item?.status === 'started');

        yield put({
            type: actionTypes.SET_CHEST_DATA,
            payload: filteredChest,
        });

        yield put({
            type: actionTypes.UPDATE_MASTER_BRAIN_GYM_BY_ID,
            payload: response?.gym,
        });

        yield put({
            type: actionTypes.GET_QUESTIONS_BY_TAG,
            actions: { difficulty: filteredChest?.difficulty },
        });
    }
}

function* workerGetQuestionsByTag(data) {
    const state = yield select();
    const masterBrainGym = state.BrainGym.masterBrainGym;
    const reqData = {
        difficulty: data.actions.difficulty,
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
        solution_index: data?.questiondetail.solutionIndex[0],
        time_to_solve: data?.time,
        question_id: data?.questiondetail._id,
        student_id: studentID,
        chest_id: brainGym.chestData?._id,
    };

    const attemptresponse = yield questionsServices.attemptQuestion(reqData);

    if (attemptresponse) {
        yield put({
            type: actionTypes.UPDATE_QUESTION_BY_TAG,
            que_getquetag: {},
        });

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
    yield takeLatest(actionTypes.GET_MASTER_BRAIN_GYM_BY_ID, WorkerGetMasterBrainGymById);
    yield takeLatest(actionTypes.GET_QUESTIONS_BY_TAG, workerGetQuestionsByTag);
    yield takeLatest(actionTypes.ATTEMPT_QUESTION, workerAttemptQuestion);
}

function* fetchAll() {
    yield fork(watcherBrainGym);
}

export default fetchAll();
