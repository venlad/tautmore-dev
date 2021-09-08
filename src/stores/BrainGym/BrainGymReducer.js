import * as actionTypes from './BrainGymTypes';

const initialState = {
    Allgym: [],
    Masterbraingymid: [],
    Questionbytag: [],
    attempQuestion: [],
    loading: false,
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.BRAIN_GYM_ALLGYM:
            return {
                ...state,
            };
        case actionTypes.BRAIN_GYM_ALLGYM_UPDATED:
            return {
                ...state,
                Allgym: action.allgym,
            };
        case actionTypes.UPDATE_MASTER_BRAIN_GYM_BY_ID:
            return {
                ...state,
                Masterbraingymid: action.braingym_masterbrainid,
            };

        case actionTypes.UPDATE_QUESTION_BY_TAG:
            return {
                ...state,
                Questionbytag: action.que_getquetag,
            };

        case actionTypes.UPDATE_ATTEMPT_QUESTION:
            return {
                ...state,
                attempQuestion: action.attempt_que,
            };

        case actionTypes.GET_USERS_FAILED:
            return {
                ...state,
                error: action.message,
            };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return { ...state };
    }
}
