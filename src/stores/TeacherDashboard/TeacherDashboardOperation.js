import {
    fork, put, takeLatest,
} from 'redux-saga/effects';
import * as actionTypes from './TeacherDashboardTypes';
import { teacherDashboardServices } from '../../services/teacherDashboard.service';

function* workerMyLeavesList() {
    const leaveId = '61f90736bfbb960009f3716c';
    const response = yield teacherDashboardServices.myLeavesList(leaveId);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_MY_LEAVES_LIST,
            payload: response,
        });
    }
}

function* workerApplyLeave(data) {
    const value = data?.payload;
    const response = yield teacherDashboardServices.applyLeave(value);
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
}

function* fetchAll() {
    yield fork(watcherTeacherDashboard);
}

export default fetchAll();
