import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function getMyProfile(id, token) {
    return fetchWrapper.get(`${baseUrl}/teachers/my-profile/${id}`, token);
}

function myLeavesList(data, token) {
    return fetchWrapper.get(`${baseUrl}/teachers/my-leaves-list/${data?.teacherId}?status=${data?.status}&pageNumber=${data?.pageNumber}&limit=${data?.limit}`, token);
}

function applyLeave(params, token) {
    return fetchWrapper.post(`${baseUrl}/teachers/apply-leave`, params, token);
}

function cancelLeave(id, token) {
    return fetchWrapper.remove(`${baseUrl}/teachers/cancel-leave/${id}`, token);
}

function changeTeacherName(id, params, token) {
    return fetchWrapper.put(`${baseUrl}/teachers/update-record/${id}`, params, token);
}

function changeTeacherEmail(id, params, token) {
    return fetchWrapper.put(`${baseUrl}/teachers/update-record/${id}`, params, token);
}

function changeTeacherPhoneNumber(id, params, token) {
    return fetchWrapper.put(`${baseUrl}/teachers/update-record/${id}`, params, token);
}

function changeTeacherQualification(id, params, token) {
    return fetchWrapper.put(`${baseUrl}/teachers/update-record/${id}`, params, token);
}

function changeTeacherUniversity(id, params, token) {
    return fetchWrapper.put(`${baseUrl}/teachers/update-record/${id}`, params, token);
}

function getMyClasses(body, token) {
    return fetchWrapper.post(`${baseUrl}/online-class/teachers/upcoming-classes`, body, token);
}

// function getChapterBySubject(id, token) {
//     return fetchWrapper.get(`${baseUrl}/getChaptersBySubject/${id}`, token);
// }

// function getConceptByChapter(id, token) {
//     return fetchWrapper.get(`${baseUrl}/concepts/concepts-by-chapter/${id}`, token);
// }

// function getSubconceptByConcept(id, token) {
//     return fetchWrapper.get(`${baseUrl}/sub-concepts/subconcepts-by-concept/${id}`, token);
// }

function getMyClassesHistory(body, token) {
    return fetchWrapper.post(`${baseUrl}/online-class/teachers/history`, body, token);
}

function teacherSlotsPerDate(id, date, token) {
    return fetchWrapper.get(`${baseUrl}/online-class/teachers/slots-per-date?teacher=${id}&date=${date}`, token);
}

function rescheduleClass(body, token) {
    return fetchWrapper.post(`${baseUrl}/online-class/teachers/reschedule`, body, token);
}

function getChapterBySubjectId(body) {
    return fetchWrapper.post(`${baseUrl}/chapters/chapters-by-subject`, body);
}

function getConceptsByChapterId(body) {
    return fetchWrapper.post(`${baseUrl}/concepts/concepts-by-chapter`, body);
}

function getSubConceptsByConceptId(body) {
    return fetchWrapper.post(`${baseUrl}/sub-concepts/subconcepts-by-concept`, body);
}

function addTeachingHistory(body, token) {
    return fetchWrapper.post(`${baseUrl}/online-class/teachers/add-history`, body, token);
}

export const teacherDashboardServices = {
    getMyProfile,
    myLeavesList,
    applyLeave,
    cancelLeave,
    changeTeacherName,
    changeTeacherEmail,
    changeTeacherPhoneNumber,
    changeTeacherQualification,
    changeTeacherUniversity,
    getMyClasses,
    getMyClassesHistory,
    teacherSlotsPerDate,
    rescheduleClass,
    getChapterBySubjectId,
    getConceptsByChapterId,
    getSubConceptsByConceptId,
    addTeachingHistory,
};

export default {};
