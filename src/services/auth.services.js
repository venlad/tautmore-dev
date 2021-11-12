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
function getAllGrades() {
    return fetchWrapper.get(`${baseUrl}/class/all-grades`);
}
function getUniqueSubjects() {
    return fetchWrapper.get(`${baseUrl}/syllabus/unique-subjects`);
}

export const authServices = {
    login,
    register,
    coCurricularActivities,
    sendOtp,
    getAllGrades,
    getUniqueSubjects,
};

export default {};
