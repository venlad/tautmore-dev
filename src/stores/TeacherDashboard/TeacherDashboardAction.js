import * as actionTypes from './TeacherDashboardTypes';

export function myLeavesListAction(data) {
    return {
        type: actionTypes.MY_LEAVES_LIST,
        payload: data,
    };
}

export const applyLeaveAction = (data) => ({
    type: actionTypes.APPLY_LEAVE,
    payload: data,
});

export const cancelLeaveAction = (data) => ({
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

export const getMyClassesHistoryAction = () => ({
    type: actionTypes.GET_MY_CLASSES_HISTORY,
});

export const rescheduleClassAction = (data) => ({
    type: actionTypes.RESCHEDULE_CLASS,
    payload: data,
});

export const teacherSlotsPerDateAction = (data) => ({
    type: actionTypes.TEACHER_SLOTS_PER_DATE,
    payload: data,
});

export default {};
