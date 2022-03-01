import * as actionTypes from './MyExamTypes';

const initialState = {
    upcomingExam: {},
    previousExam: {},
    startExam: [],
    questionInExam: [],
    myReport: {},

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_UPCOMING_EXAM:
            return {
                ...state,
                upcomingExam: action.payload,
            };
        case actionTypes.UPDATE_PREVIOUS_EXAM:
            return {
                ...state,
                previousExam: action.payload,
            };
        case actionTypes.UPDATE_MY_REPORT:
            return {
                ...state,
                myReport: action.payload,
            };
        case actionTypes.UPDATE_START_EXAM:
            return {
                ...state,
                startExam: action.payload,
            };

        case actionTypes.UPDATE_GET_QUESTION_IN_EXAM:
            return {
                ...state,
                questionInExam: action.payload,
            };

        default:
            return { ...state };
    }
}
