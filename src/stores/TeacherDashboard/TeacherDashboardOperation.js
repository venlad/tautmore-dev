import {
    fork, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from './TeacherDashboardTypes';
import { teacherDashboardServices } from '../../services/teacherDashboard.service';

function* workerMyLeavesList() {
    const leaveId = '61f90736bfbb960009f3716c';
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.myLeavesList(leaveId, token);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_MY_LEAVES_LIST,
            payload: response,
        });
    }
}

function* workerMyProfile() {
    const state = yield select();
    const teacherID = state.Auth.Login.data._id;
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.getMyProfile(teacherID, token);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_PROFILE,
            payload: response,
        });
    }
}

function* workerApplyLeave(data) {
    const value = data?.payload;
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    console.log(token, 'Token froma operation');
    const response = yield teacherDashboardServices.applyLeave(value, token);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_APPLY_LEAVE,
            payload: response,
        });
    }
}

function* workerChangeName(data) {
    const value = { fullName: data?.payload?.name };
    const id = data?.payload?.id;
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.changeTeacherName(id, value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_CHANGE_NAME,
            payload: response,
        });
    }
}

function* workerChangeEmail(data) {
    const value = { emailID: data?.payload?.email };
    const id = data?.payload?.id;
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.changeTeacherEmailgbbv(id, value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_CHANGE_EMAIL,
            payload: response,
        });
    }
}

function* workerChangePhone(data) {
    const value = { phoneNumber: data?.payload?.phone };
    const id = data?.payload?.id;
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.changeTeacherPhoneNumber(id, value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_CHANGE_PHONE_NUM,
            payload: response,
        });
    }
}

function* workerChangeQualification(data) {
    const value = { qualification: data?.payload?.qualification };
    const id = data?.payload?.id;
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.changeTeacherQualification(id, value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_CHANGE_QUALIFICATION,
            payload: response,
        });
    }
}

function* workerChangeUniversity(data) {
    const value = { university: data?.payload?.univ };
    const id = data?.payload?.id;
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.changeTeacherQualification(id, value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_CHANGE_UNVIERSITY,
            payload: response,
        });
    }
}

function* watcherTeacherDashboard() {
    yield takeLatest(actionTypes.MY_LEAVES_LIST, workerMyLeavesList);
    yield takeLatest(actionTypes.APPLY_LEAVE, workerApplyLeave);
    yield takeLatest(actionTypes.GET_PROFILE, workerMyProfile);
    yield takeLatest(actionTypes.CHANGE_NAME, workerChangeName);
    yield takeLatest(actionTypes.CHANGE_EMAIL, workerChangeEmail);
    yield takeLatest(actionTypes.CHANGE_PHONE_NUM, workerChangePhone);
    yield takeLatest(actionTypes.CHANGE_QUALIFICATION, workerChangeQualification);
    yield takeLatest(actionTypes.CHANGE_UNVIERSITY, workerChangeUniversity);
}

function* fetchAll() {
    yield fork(watcherTeacherDashboard);
}

export default fetchAll();
