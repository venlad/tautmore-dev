import {
    fork, put, takeLatest,
} from 'redux-saga/effects';
import * as actionTypes from './AuthTypes';
import { authServices } from '../../services/auth.services';

function* workerLogin(data) {
    yield put({
        type: actionTypes.SET_LOGIN_LOADING,
        payload: true,
    });
    const response = yield authServices.login(data.payload);

    if (response) {
        localStorage.setItem('taut-student', JSON.stringify(response));
        yield put({
            type: actionTypes.UPDATE_LOGIN,
            payload: response,
        });
        yield put({
            type: actionTypes.SET_LOGIN_LOADING,
            payload: false,
        });
    }
}

function* workerRegister(data) {
    const response = yield authServices.register(data.payload);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_REGISTER,
            payload: response,
        });
    }
}

function* workerCoCurricularActivities() {
    const response = yield authServices.coCurricularActivities();
    if (response) {
        yield put({
            type: actionTypes.UPDATE_CO_CURRICULAR_ACTIVITIES,
            payload: response,
        });
    }
}

function* workerSendOtp(data) {
    yield put({
        type: actionTypes.UPDATE_VERIFY_OTP,
        payload: true,
    });
    const response = yield authServices.sendOtp(data.payload);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_SEND_OTP,
            payload: response,
        });
    }
}

function* workerVerifyOtp(data) {
    const response = yield authServices.verifyOtp(data.payload);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_VERIFY_OTP,
            payload: response,
        });
    }
}

function* workerGetAllGrades() {
    const response = yield authServices.getAllGrades();
    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_ALL_GRADES,
            payload: response,
        });
    }
}

function* workerGetUniqueSubjects() {
    const response = yield authServices.getUniqueSubjects();
    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_UNIQUE_SUBJECTS,
            payload: response,
        });
    }
}

function* watcherAuth() {
    yield takeLatest(actionTypes.LOGIN, workerLogin);
    yield takeLatest(actionTypes.REGISTER, workerRegister);
    yield takeLatest(actionTypes.VERIFY_OTP, workerVerifyOtp);
    yield takeLatest(actionTypes.CO_CURRICULAR_ACTIVITIES, workerCoCurricularActivities);
    yield takeLatest(actionTypes.SEND_OTP, workerSendOtp);
    yield takeLatest(actionTypes.GET_ALL_GRADES, workerGetAllGrades);
    yield takeLatest(actionTypes.GET_UNIQUE_SUBJECTS, workerGetUniqueSubjects);
}

function* fetchAll() {
    yield fork(watcherAuth);
}

export default fetchAll();
