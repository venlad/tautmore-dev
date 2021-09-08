import * as actionTypes from './BrainGymTypes';

export const getAllBrainGymAction = (data) => ({
    type: actionTypes.GET_ALL_BRAIN_GYM,
    payload: data,
});

export function getAllgymAction() {
    return {
        type: actionTypes.BRAIN_GYM_ALLGYM,
    };
}

export function masterBraingymidAction() {
    return {
        type: actionTypes.GET_MASTER_BRAIN_GYM_BY_ID,
        actions: {},
    };
}

export function getQuestionbytagAction(data) {
    return {
        type: actionTypes.GET_QUESTIONS_BY_TAG,
        actions: { ...data },
    };
}

export function attemptQuestionAction(data) {
    return {
        type: actionTypes.ATTEMPT_QUESTION,
        payload: data,
    };
}
