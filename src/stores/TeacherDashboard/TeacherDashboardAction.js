import * as actionTypes from './TeacherDashboardTypes';

export function myLeavesListAction() {
    return {
        type: actionTypes.MY_LEAVES_LIST,
    };
}

export const applyLeaveAction = (data) => ({
    type: actionTypes.APPLY_LEAVE,
    payload: data,
});

export const cancelLeaveAction = (data, token) => ({
    type: actionTypes.CANCEL_LEAVE,
    payload: data,
});

export const getProfileAction = (data) => ({
    type: actionTypes.GET_PROFILE,
    payload: data,
});

export const changeNameAction = (data) => ({
    type: actionTypes.CHANGE_NAME,
    payload: data,
});

export const changeEmailAction = (data) => ({
    type: actionTypes.CHANGE_EMAIL,
    payload: data,
});

export const changePhoneNumberAction = (data) => ({
    type: actionTypes.CHANGE_PHONE_NUM,
    payload: data,
});

export const changeQualificationAction = (data) => ({
    type: actionTypes.CHANGE_QUALIFICATION,
    payload: data,
});

export const changeUniversityAction = (data) => ({
    type: actionTypes.CHANGE_UNVIERSITY,
    payload: data,
});

export default {};
