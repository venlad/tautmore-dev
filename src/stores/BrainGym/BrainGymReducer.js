import * as actionTypes from './BrainGymTypes';

const initialState = {
    chests: [],
    questionInChest: [],
    attemptQuestion: [],
    completeChest: [],
    chestInfo: [],
    allShell: [],
    incorrectAnswer: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_START_CHEST:
            return {
                ...state,
                chests: action.payload,
            };
        case actionTypes.UPDATE_GET_QUESTION_IN_CHEST:
            return {
                ...state,
                questionInChest: action.payload,
            };
        case actionTypes.UPDATE_GET_CHEST_INFO:
            return {
                ...state,
                chestInfo: action.payload,
            };
        case actionTypes.UPDATE_ALL_SHELL:
            return {
                ...state,
                allShell: action.payload,
            };
        case actionTypes.UPDATE_INCORRECT_ANSWER:
            return {
                ...state,
                incorrectAnswer: action.payload,
            };
        case actionTypes.UPDATE_ATTEMPT_QUESTION:
            return {
                ...state,
                attemptQuestion: action.payload,
            };
        case actionTypes.UPDATE_COMPLETE_CHEST:
            return {
                ...state,
                completeChest: action.payload,
            };
        default:
            return { ...state };
    }
}
