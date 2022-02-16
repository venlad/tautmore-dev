import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function login(params) {
    return fetchWrapper.post(
        `${baseUrl}/students/login`,
        params,
    );
}
function register(params) {
    return fetchWrapper.post(
        `${baseUrl}/students/register`,
        params,
    );
}
function coCurricularActivities() {
    return fetchWrapper.get(`${baseUrl}/students/co-curricular-activities?`);
}
function sendOtp(params) {
    return fetchWrapper.post(
        `${baseUrl}/students/send-otp`,
        params,
    );
}

function verifyOtp(params) {
    return fetchWrapper.post(
        `${baseUrl}/api/students/verify-otp`,
        params,
    );
}

function getAllGrades() {
    return fetchWrapper.get(`${baseUrl}/class/all-grades`);
}
function getUniqueSubjects() {
    return fetchWrapper.get(`${baseUrl}/syllabus/unique-subjects`);
}

function getTimeSlots() {
    return fetchWrapper.get('https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/teachers/timeslot');
}

function getUniversities() {
    return fetchWrapper.get('https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/admin/universities-list');
}

function getQualifications() {
    return fetchWrapper.get('https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/admin/qualification-list');
}

function getAllSubjects() {
    return fetchWrapper.get('https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/syllabus/unique-subjects-dropdown');
}

function getCountryList() {
    return fetchWrapper.get('https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/admin/countries-list');
}

function getStateList(countryCode) {
    return fetchWrapper.get(
        `https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/admin/state-list?country_code=${countryCode}`,

    );
}

function registerTeacher(data) {
    return fetchWrapper.post(`${baseUrl}/teacher`, { ...data });
}

export const authServices = {
    login,
    register,
    coCurricularActivities,
    sendOtp,
    verifyOtp,
    getAllGrades,
    getUniqueSubjects,
    registerTeacher,
    getTimeSlots,
    getUniversities,
    getQualifications,
    getCountryList,
    getStateList,
    getAllSubjects,

};

export default {};
