import * as actionTypes from './MyExamTypes';

export const upcomingExamAction = (data) => ({
    type: actionTypes.UPCOMING_EXAM,
    payload: data,
});
export const previousExamAction = (data) => ({
    type: actionTypes.PREVIOUS_EXAM,
    payload: data,
});
export const myReportAction = (data) => ({
    type: actionTypes.GET_MY_REPORT,
    payload: data,
});
export const startExamAction = (data) => ({
    type: actionTypes.START_EXAM,
    payload: data,
});
export const finishExamAction = (data) => ({
    type: actionTypes.FINISH_EXAM,
    payload: data,
});

export const getQuestionInExamAction = (data) => ({
    type: actionTypes.GET_QUESTION_IN_EXAM,
    payload: data,
});
export const updateAllQueAnsAction = (data) => ({
    type: actionTypes.UPDATE_ALL_QUESTION_ANSWER,
    payload: data,
});
export const addAllQueAnsAction = (data) => ({
    type: actionTypes.ADD_ALL_QUESTION_ANSWER,
    payload: data,
});

export default {};
