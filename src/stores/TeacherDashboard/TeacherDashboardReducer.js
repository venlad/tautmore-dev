import * as actionTypes from './TeacherDashboardTypes';

const initialState = {
    myLeavesList: [],
    applyLeave: [],
    getProfile: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_MY_LEAVES_LIST:
            return {
                ...state,
                myLeavesList: action.payload,
            };
        case actionTypes.UPDATE_APPLY_LEAVE:
            return {
                ...state,
                applyLeave: action.payload,
            };
        case actionTypes.UPDATE_GET_PROFILE:
            return {
                ...state,
                getProfile: action.payload,
            };
        default:
            return { ...state };
    }
}
