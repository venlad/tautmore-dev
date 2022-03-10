import * as actionTypes from './TeacherDashboardTypes';

export function myLeavesListAction() {
    return {
        type: actionTypes.MY_LEAVES_LIST,
    };
}

export const applyLeaveAction = (data) => ({
    type: actionTypes.APPLY_LEAVE,
    payload: data,
});

export const cancelLeaveAction = (data, token) => ({
    type: actionTypes.CANCEL_LEAVE,
    payload: data,
});

export const getProfileAction = (data) => ({
    type: actionTypes.GET_PROFILE,
    payload: data,
});

export const changeNameAction = (data) => ({
    type: actionTypes.CHANGE_NAME,
    payload: data,
});

export const changeEmailAction = (data) => ({
    type: actionTypes.CHANGE_EMAIL,
    payload: data,
});

export const changePhoneNumberAction = (data) => ({
    type: actionTypes.CHANGE_PHONE_NUM,
    payload: data,
});

export const changeQualificationAction = (data) => ({
    type: actionTypes.CHANGE_QUALIFICATION,
    payload: data,
});

export const changeUniversityAction = (data) => ({
    type: actionTypes.CHANGE_UNVIERSITY,
    payload: data,
});

export const getMyClassesAction = () => ({
    type: actionTypes.GET_MY_CLASSES,
});

export const getChapterBySubjectAction = (data) => ({
    type: actionTypes.GET_CHAPTER_BY_SUBJECT,
    payload: data,
});

export const getConceptByChapterAction = (data) => ({
    type: actionTypes.GET_CONCEPT_BY_CHAPTER,
    payload: data,
});

export const getSubconceptByConceptAction = (data) => ({
    type: actionTypes.GET_SUB_CONCEPT_BY_CONCEPT,
    payload: data,
});

export default {};
