import * as actionTypes from './MyExamTypes';

const initialState = {
    upcomingExam: {},
    previousExam: {},
    startExam: [],
    questionInExam: [],
    myReport: {},
    allQuesAns: [],
    finishExam: [],

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
        case actionTypes.UPDATE_FINISH_EXAM:
            return {
                ...state,
                finishExam: action.payload,
            };

        case actionTypes.UPDATE_GET_QUESTION_IN_EXAM:
            return {
                ...state,
                questionInExam: action.payload,
            };
        case actionTypes.UPDATE_ALL_QUESTION_ANSWER:
            return {
                ...state,
                allQuesAns: action.payload,
                // arr: [...state.arr, action.newItem]
            };
        case actionTypes.ADD_ALL_QUESTION_ANSWER:
            return {
                ...state,
                allQuesAns: [...state.allQuesAns, action.payload],
                // arr: [...state.arr, action.newItem]
            };

        default:
            return { ...state };
    }
}
