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
    const response = yield teacherDashboardServices.applyLeave(value, token);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_APPLY_LEAVE,
            payload: response,
        });
    }
}

function* watcherTeacherDashboard() {
    yield takeLatest(actionTypes.MY_LEAVES_LIST, workerMyLeavesList);
    yield takeLatest(actionTypes.APPLY_LEAVE, workerApplyLeave);
    yield takeLatest(actionTypes.GET_PROFILE, workerMyProfile);
}

function* fetchAll() {
    yield fork(watcherTeacherDashboard);
}

export default fetchAll();
