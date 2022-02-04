import * as actionTypes from './AuthTypes';

const studentData = localStorage.getItem('taut-student');
const initialState = {
    Login: JSON.parse(studentData) || {},
    isLoginLoading: false,
    Register: [],
    CoCurricularActivities: [],
    otp: [],
    isSendingOtp: false,
    verifyOtp: {},
    AllGrades: [],
    Subjects: [],
    SubjectsByclass: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_LOGIN:
            return {
                ...state,
                Login: action.payload,
            };
        case actionTypes.CLEAR_LOGIN:
            return {
                ...state,
                Login: action.payload,
            };

        case actionTypes.SET_LOGIN_LOADING:
            return {
                ...state,
                isLoginLoading: action.payload,
            };
        case actionTypes.UPDATE_REGISTER:
            return {
                ...state,
                Register: action.payload,
            };
        case actionTypes.UPDATE_CO_CURRICULAR_ACTIVITIES:
            return {
                ...state,
                CoCurricularActivities: action.payload,
            };
        case actionTypes.IS_SENDING_OTP:
            return {
                ...state,
                isSendingOtp: action.payload,
            };
        case actionTypes.UPDATE_SEND_OTP:
            return {
                ...state,
                otp: action.payload,
                verifyOtp: {},
            };
        case actionTypes.UPDATE_VERIFY_OTP:
            return {
                ...state,
                verifyOtp: action.payload,
            };
        case actionTypes.UPDATE_GET_ALL_GRADES:
            return {
                ...state,
                AllGrades: action.payload,
            };
        case actionTypes.UPDATE_GET_UNIQUE_SUBJECTS:
            return {
                ...state,
                Subjects: action.payload,
            };
        case actionTypes.UPDATE_GET_SUBJECTS_BY_CLASS:
            return {
                ...state,
                SubjectsByclass: action.payload,
            };
        default:
            return { ...state };
    }
}
