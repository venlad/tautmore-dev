import {
    fork, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from './BrainGymTypes';
import { brainGymServices } from '../../services';

function* workerStartChest(data) {
    const state = yield select();
    const auth = state.Auth;
    const reqData = {
        studentId: auth?.Login?.data?._id,
        subjectId: data?.payload,
        // studentId: '61f236b54df66400096feec0',
        // subjectId: '61cc72e3c32134a3653b3147',
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
    const value = data?.payload;
    const response = yield brainGymServices.getQuestionInChest(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_QUESTION_IN_CHEST,
            payload: response,
        });
    }
}
function* workerGetChestInfo(data) {
    const value = data?.payload;
    const response = yield brainGymServices.chestInfo(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_CHEST_INFO,
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
function* workerGetAllShell(data) {
    const value = data?.payload;
    const response = yield brainGymServices.masterDetails(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_ALL_SHELL,
            payload: response,
        });
    }
}
function* workerGetIncorrectAns(data) {
    const value = data?.payload;
    const response = yield brainGymServices.incorrectAnswer(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_INCORRECT_ANSWER,
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
// function* workerCompleteChest(data) {
//     // const value = data?.payload;
//     console.log(data);
//     yield put({
//         type: actionTypes.UPDATE_COMPLETE_CHEST,
//         payload: {
//             statusCode: 200,
//             status: 'success',
//             data: {
//                 points: 20,
//                 questionsCount: 7,
//                 answeredCorrect: 2,
//                 averageSpeed: 11.71,
//                 allChestCompleted: false,
//                 totalPoints: 20,
//                 totalCoins: 20,
//                 totalQuestionsCount: 7,
//                 totalAnsweredCorrect: 2,
//                 totalAverageSpeed: 11.71,
//             },
//         },
//     });
// }

function* watcherBrainGym() {
    yield takeLatest(actionTypes.START_CHEST, workerStartChest);
    yield takeLatest(actionTypes.GET_QUESTION_IN_CHEST, workerGetQuestionInChest);
    yield takeLatest(actionTypes.ATTEMPT_QUESTION, workerAttemptQuestion);
    yield takeLatest(actionTypes.COMPLETE_CHEST, workerCompleteChest);
    yield takeLatest(actionTypes.GET_CHEST_INFO, workerGetChestInfo);
    yield takeLatest(actionTypes.GET_ALL_SHELL, workerGetAllShell);
    yield takeLatest(actionTypes.GET_INCORRECT_ANSWER, workerGetIncorrectAns);
}

function* fetchAll() {
    yield fork(watcherBrainGym);
}

export default fetchAll();
