import * as actionTypes from './BrainGymTypes';

export const startChestAction = (data) => ({
    type: actionTypes.START_CHEST,
    payload: data,
});

export const getQuestionInChestAction = (data) => ({
    type: actionTypes.GET_QUESTION_IN_CHEST,
    payload: data,
});

export const attemptQuestionAction = (data) => ({
    type: actionTypes.ATTEMPT_QUESTION,
    payload: data,
});

export const completeChestAction = (data) => ({
    type: actionTypes.COMPLETE_CHEST,
    payload: data,
});
export const getChestInfo = (data) => ({
    type: actionTypes.GET_CHEST_INFO,
    payload: data,
});
export const getAllShell = (data) => ({
    type: actionTypes.GET_ALL_SHELL,
    payload: data,
});
export const getIncorrectAns = (data) => ({
    type: actionTypes.GET_INCORRECT_ANSWER,
    payload: data,
});

export default {};
