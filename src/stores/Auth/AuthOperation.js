import {
    fork, put, takeLatest,
} from 'redux-saga/effects';
import * as actionTypes from './AuthTypes';
import { authServices } from '../../services/auth.services';

function* workerLogin(data) {
    const response = yield authServices.login(data.payload);
    if (response) {
        yield put({
            type: actionTypes.UPDATE_LOGIN,
            payload: response,
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

function* watcherAuth() {
    yield takeLatest(actionTypes.LOGIN, workerLogin);
    yield takeLatest(actionTypes.REGISTER, workerRegister);
}

function* fetchAll() {
    yield fork(watcherAuth);
}

export default fetchAll();
