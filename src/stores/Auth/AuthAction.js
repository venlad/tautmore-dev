import * as actionTypes from './AuthTypes';

export function login(data) {
    return {
        type: actionTypes.LOGIN,
        payload: data,
    };
}

export function clearLoginAction() {
    return {
        type: actionTypes.CLEAR_LOGIN,
        payload: {},
    };
}

export function register(data) {
    return {
        type: actionTypes.REGISTER,
        payload: data,
    };
}
export function coCurricularActivitiesAction() {
    return {
        type: actionTypes.CO_CURRICULAR_ACTIVITIES,
    };
}
export function sendOtpAction(data) {
    return {
        type: actionTypes.SEND_OTP,
        payload: data,
    };
}

export function verifyOtpAction(data) {
    return {
        type: actionTypes.VERIFY_OTP,
        payload: data,
    };
}

export function getAllGradesAction() {
    return {
        type: actionTypes.GET_ALL_GRADES,
    };
}
export function getUniqueSubjectsAction() {
    return {
        type: actionTypes.GET_UNIQUE_SUBJECTS,
    };
}
