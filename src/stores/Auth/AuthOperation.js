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

function* workerTimeslots() {
    console.log('Entering operations');
    const response = yield authServices.getTimeSlots();
    console.log(response, 'From workerTimeSlot Reducer');

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_TIMESLOTS,
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

function* workerGetSubjectsByclass(data) {
    const response = yield authServices.getSubjectsByclass(data.payload);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_SUBJECTS_BY_CLASS,
            payload: response,
        });
    }
}

function* workerRegisterTeacher(data) {
    const response = yield authServices.registerTeacher(data.payload);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_REGISTER_TEACHER,
            payload: response,
        });
    }
}

function* workerGetUniversities() {
    const response = yield authServices.getUniversities();
    //    console.log()
    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_UIVERSITIES,
            payload: response,
        });
    }
}

function* workerGetQualifications() {
    const response = yield authServices.getQualifications();

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_QUALIFICATIONS,
            payload: response,
        });
    }
}

function* workerGetCountries() {
    const response = yield authServices.getCountryList();

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_COUNTRY_LIST,
            payload: response,
        });
    }
}

function* workerGetSubjects() {
    console.log('From subjects operation');

    const response = yield authServices.getAllSubjects();
    console.log(response, 'From subjects operation');
    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_SUBJECTS,
            payload: response,
        });
    }
}

function* workerGetStates(data) {
    const response = yield authServices.getStateList(data.payload);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_STATE_LIST,
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
    yield takeLatest(actionTypes.GET_SUBJECTS_BY_CLASS, workerGetSubjectsByclass);
    yield takeLatest(actionTypes.REGISTER_TEACHER, workerRegisterTeacher);
    yield takeLatest(actionTypes.GET_TIMESLOTS, workerTimeslots);
    yield takeLatest(actionTypes.GET_UNIVERSITIES, workerGetUniversities);
    yield takeLatest(actionTypes.GET_QUALIFICATIONS, workerGetQualifications);
    yield takeLatest(actionTypes.GET_COUNTRY_LIST, workerGetCountries);
    yield takeLatest(actionTypes.GET_SUBJECTS, workerGetSubjects);
    yield takeLatest(actionTypes.GET_STATE_LIST, workerGetStates);
}

function* fetchAll() {
    yield fork(watcherAuth);
}

export default fetchAll();
