import * as actionTypes from './AuthTypes';

export function login(data) {
    return {
        type: actionTypes.LOGIN,
        payload: data,
    };
}
export function register(data) {
    return {
        type: actionTypes.REGISTER,
        payload: data,
    };
}
