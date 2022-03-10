import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function getMyProfile(id, token) {
    return fetchWrapper.get(`${baseUrl}/teachers/my-profile/${id}`, token);
}

function myLeavesList(id, token) {
    return fetchWrapper.get(`${baseUrl}/teachers/my-leaves-list/${id}`, token);
}

function applyLeave(params, token) {
    return fetchWrapper.post(`${baseUrl}/teachers/apply-leave`, params, token);
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

function getChapterBySubject(id, token) {
    return fetchWrapper.get(`${baseUrl}/getChaptersBySubject/${id}`, token);
}

function getConceptByChapter(id, token) {
    return fetchWrapper.get(`${baseUrl}/concepts/concepts-by-chapter/${id}`, token);
}

function getSubconceptByConcept(id, token) {
    return fetchWrapper.get(`${baseUrl}/sub-concepts/subconcepts-by-concept/${id}`, token);
}

export const teacherDashboardServices = {
    getMyProfile,
    myLeavesList,
    applyLeave,
    changeTeacherName,
    changeTeacherEmail,
    changeTeacherPhoneNumber,
    changeTeacherQualification,
    changeTeacherUniversity,
    getMyClasses,
    getChapterBySubject,
    getConceptByChapter,
    getSubconceptByConcept,
};

export default {};
