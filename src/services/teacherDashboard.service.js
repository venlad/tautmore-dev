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

export const teacherDashboardServices = {
    getMyProfile,
    myLeavesList,
    applyLeave,
};

export default {};
