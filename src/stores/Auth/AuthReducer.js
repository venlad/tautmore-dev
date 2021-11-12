import * as actionTypes from './AuthTypes';

const initialState = {
    Login: [],
    Register: [],
    CoCurricularActivities: [],
    Otp: [],
    AllGrades: [],
    Subjects: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_LOGIN:
            return {
                ...state,
                Login: action.payload,
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
        case actionTypes.UPDATE_SEND_OTP:
            return {
                ...state,
                Otp: action.payload,
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
        default:
            return { ...state };
    }
}
