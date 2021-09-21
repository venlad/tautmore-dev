import {
    fork, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from './BrainGymTypes';
import { brainGymServices, questionsServices } from '../../services';

function* WorkerGetMasterBrainGymById() {
    const state = yield select();
    const braingym_masterbrainid = state.BrainGym.Allgym.gyms[0]._id;
    const response = yield brainGymServices.getMasterBrainGymById({
        chest_id: braingym_masterbrainid,
    });

    yield put({
        type: actionTypes.UPDATE_MASTER_BRAIN_GYM_BY_ID,
        braingym_masterbrainid: response,
    });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
}

function* workerGetQuestionsByTag(data) {
    const masterbrainstate = yield select();
    const difficulty = data.actions.difficulty;
    // const student_id = masterbrainstate.BrainGym.Masterbraingymid?.gym?.student;
    const student_id = '6148952cfbef0900086a6a10';
    const chapter = masterbrainstate.BrainGym.Masterbraingymid?.gym?.chapter[0];

    const reqData = {
        difficulty,
        student_id,
        chapter,
    };

    yield put({
        type: actionTypes.UPDATE_QUESTION_BY_TAG,
        que_getquetag: {},
    });
    const response = yield questionsServices.getQuestionsByDifficultTag(reqData);
    console.log(response, 'response');
    yield put({
        type: actionTypes.UPDATE_QUESTION_BY_TAG,
        que_getquetag: response,
    });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
}

function* workerAttemptQuestion(gymData) {
    const state = yield select();
    const brainGym = state.BrainGym;
    const data = gymData.payload;
    const reqData = {
        solution_index: data?.questiondetail.solutionIndex[0],
        time_to_solve: 24,
        question_id: data?.questiondetail._id,
        student_id: brainGym?.Allgym.gyms[0].student,
        chest_id: brainGym?.Masterbraingymid.gym.chest[0]._id,
    };
    yield put({
        type: actionTypes.UPDATE_QUESTION_BY_TAG,
        que_getquetag: {},
    });
    yield put({ type: actionTypes.SET_LOADING, payload: true });
    const attemptresponse = yield questionsServices.attemptQuestion(reqData);

    if (attemptresponse) {
        yield put({
            type: actionTypes.GET_QUESTIONS_BY_TAG,
            actions: { difficulty: attemptresponse?.nextTag },
        });
    }
    yield put({
        type: actionTypes.UPDATE_ATTEMPT_QUESTION,
        attempt_que: attemptresponse,
    });
}

function* workerGetAllBrainGym() {
    try {
        yield put({ type: actionTypes.SET_LOADING, payload: true });
        const allgym = yield brainGymServices.getAllBrainGym();
        yield put({ type: actionTypes.BRAIN_GYM_ALLGYM_UPDATED, allgym });
        yield put({ type: actionTypes.SET_LOADING, payload: false });
    } catch (e) {
        yield put({ type: actionTypes.GET_USERS_FAILED, message: e.message });
        yield put({ type: actionTypes.SET_LOADING, payload: false });
    }
}

function* watcherBrainGym() {
    yield takeLatest(actionTypes.GET_ALL_BRAIN_GYM, workerGetAllBrainGym);
    yield takeLatest(
        actionTypes.GET_MASTER_BRAIN_GYM_BY_ID,
        WorkerGetMasterBrainGymById,
    );
    yield takeLatest(actionTypes.GET_QUESTIONS_BY_TAG, workerGetQuestionsByTag);
    yield takeLatest(actionTypes.ATTEMPT_QUESTION, workerAttemptQuestion);
}

function* fetchAll() {
    yield fork(watcherBrainGym);
}
export default fetchAll();
