import * as actionTypes from './BrainGymTypes';

export const startChestAction = () => ({
    type: actionTypes.START_CHEST,
    payload: {},
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

export default {};
