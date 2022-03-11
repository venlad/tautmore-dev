import {
    fork, put, takeLatest,
} from 'redux-saga/effects';
import * as actionTypes from './MyExamTypes';
import { myexamStudentServices } from '../../services';

function* workerUpcomingExam(data) {
    const value = data?.payload;
    const response = yield myexamStudentServices.upcomingExam(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_UPCOMING_EXAM,
            payload: response,
        });
    }
}
function* workerPreviousExam(data) {
    const value = data?.payload;
    const response = yield myexamStudentServices.previousExam(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_PREVIOUS_EXAM,
            payload: response,
        });
    }
}
function* workerMyReport(data) {
    const value = data?.payload;
    const response = yield myexamStudentServices.myReport(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_MY_REPORT,
            payload: response,
        });
    }
}
function* workerStartExam(data) {
    const value = data?.payload;
    const response = yield myexamStudentServices.startExam(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_START_EXAM,
            payload: response,
        });
    }
}
function* workerFinishExam(data) {
    const value = data?.payload;
    const response = yield myexamStudentServices.finishExam(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_FINISH_EXAM,
            payload: response,
        });
    }
}

function* workerGetQuestionInExam(data) {
    const value = data?.payload;
    const response = yield myexamStudentServices.questionInExam(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_QUESTION_IN_EXAM,
            payload: response?.data[0]?.response,
        });
    }
}

function* watcherMyExam() {
    yield takeLatest(actionTypes.UPCOMING_EXAM, workerUpcomingExam);
    yield takeLatest(actionTypes.PREVIOUS_EXAM, workerPreviousExam);
    yield takeLatest(actionTypes.START_EXAM, workerStartExam);
    yield takeLatest(actionTypes.FINISH_EXAM, workerFinishExam);
    yield takeLatest(actionTypes.GET_QUESTION_IN_EXAM, workerGetQuestionInExam);
    yield takeLatest(actionTypes.GET_MY_REPORT, workerMyReport);
}

function* fetchAll() {
    yield fork(watcherMyExam);
}

export default fetchAll();
