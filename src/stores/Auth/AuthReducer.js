import * as actionTypes from './AuthTypes';

const initialState = {
    Login: [],
    Register: [],
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
        default:
            return { ...state };
    }
}
