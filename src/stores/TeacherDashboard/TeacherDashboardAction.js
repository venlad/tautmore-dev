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

export const getProfileAction = (data) => ({
    type: actionTypes.GET_PROFILE,
    payload: data,
});

export default {};
