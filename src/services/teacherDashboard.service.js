import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function myLeavesList(id) {
    return fetchWrapper.get(`${baseUrl}/teachers/my-leaves-list/${id}`);
}

function applyLeave(params) {
    return fetchWrapper.post(`${baseUrl}/teachers/apply-leave`, params);
}

export const teacherDashboardServices = {
    myLeavesList,
    applyLeave,
};

export default {};
