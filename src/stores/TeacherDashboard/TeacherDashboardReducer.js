import * as actionTypes from './TeacherDashboardTypes';

const initialState = {
    myLeavesList: [],
    applyLeave: [],
    cancelLeave: [],
    getProfile: [],
    changeName: [],
    changeEmail: [],
    changePhoneNumber: [],
    changeQualification: [],
    changeUniversity: [],

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
        case actionTypes.UPDATE_CANCEL_LEAVE:
            return {
                ...state,
                cancelLeave: action.payload,
            };
        case actionTypes.UPDATE_GET_PROFILE:
            return {
                ...state,
                getProfile: action.payload,
            };
        case actionTypes.UPDATE_CHANGE_NAME:
            return {
                ...state,
                changeName: action.payload,
            };
        case actionTypes.UPDATE_CHANGE_EMAIL:
            return {
                ...state,
                changeEmail: action.payload,
            };
        case actionTypes.UPDATE_CHANGE_PHONE_NUM:
            return {
                ...state,
                changePhoneNumber: action.payload,
            };
        case actionTypes.UPDATE_CHANGE_QUALIFICATION:
            return {
                ...state,
                changeQualification: action.payload,
            };
        case actionTypes.UPDATE_CHANGE_UNVIERSITY:
            return {
                ...state,
                changeUniversity: action.payload,
            };
        default:
            return { ...state };
    }
}
