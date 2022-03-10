import {
    fork, put, takeLatest, select,
} from 'redux-saga/effects';
import * as actionTypes from './TeacherDashboardTypes';
import { teacherDashboardServices } from '../../services/teacherDashboard.service';

function* workerMyLeavesList() {
    const state = yield select();
    const leaveId = state.Auth.Login.data._id;
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
    const response = yield teacherDashboardServices.changeTeacherEmail(id, value, token);

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
    const response = yield teacherDashboardServices.changeTeacherUniversity(id, value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_CHANGE_UNVIERSITY,
            payload: response,
        });
    }
}

function* workerMyClasses() {
    const state = yield select();
    const teacherID = state.Auth.Login.data._id;
    const token = state.Auth.Login.data.accessToken;
    const body = {
        teacher: teacherID,
        subject: '',
        page_no: 1,
    };
    const response = yield teacherDashboardServices.getMyClasses(body, token);
    console.log(response, 'Res from my classes');
    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_MY_CLASSES,
            payload: response,
        });
    }
}

function* workerGetChapterBySubject(data) {
    const value = { subject_id: data?.payload?.subject_id };
    const response = yield teacherDashboardServices.getChapterBySubject(value);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_CHAPTER_BY_SUBJECT,
            payload: response,
        });
    }
}

function* workerGetConceptByChapter(data) {
    const value = { chapterId: data?.payload?.chapterId };
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.getConceptByChapter(value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_CONCEPT_BY_CHAPTER,
            payload: response,
        });
    }
}

function* workertGetSubconceptByConcept(data) {
    const value = { conceptId: data?.payload?.conceptId };
    const state = yield select();
    const token = state.Auth.Login.data.accessToken;
    const response = yield teacherDashboardServices.getSubconceptByConcept(value, token);

    if (response) {
        yield put({
            type: actionTypes.UPDATE_GET_SUB_CONCEPT_BY_CONCEPT,
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
    yield takeLatest(actionTypes.GET_MY_CLASSES, workerMyClasses);
    yield takeLatest(actionTypes.GET_CHAPTER_BY_SUBJECT, workerGetChapterBySubject);
    yield takeLatest(actionTypes.GET_CONCEPT_BY_CHAPTER, workerGetConceptByChapter);
    yield takeLatest(actionTypes.GET_SUB_CONCEPT_BY_CONCEPT, workertGetSubconceptByConcept);
}

function* fetchAll() {
    yield fork(watcherTeacherDashboard);
}

export default fetchAll();
