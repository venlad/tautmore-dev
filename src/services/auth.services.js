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

export const authServices = {
    login,
    register,
};

export default {};
