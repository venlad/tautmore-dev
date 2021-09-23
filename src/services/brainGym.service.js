import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function addBrainGym(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/addBrainGym`, params);
}

function completeChest(params) {
    return fetchWrapper.post(
        `${baseUrl}/brainGym/completeChest`,
        params,
    );
}

function getAllBrainGym() {
    return fetchWrapper.get(`${baseUrl}/brainGym/getAllBrainGym`);
}

function getMasterBrainGymById(params) {
    return fetchWrapper.post(
        `${baseUrl}/brainGym/getMasterBrainGymById`,
        params,
    );
}

function getBrainGymById(params) {
    return fetchWrapper.post(
        `${baseUrl}/brainGym/getBrainGymById`,
        params,
    );
}

function getBrainGymAndCheckForDelay(params) {
    return fetchWrapper.post(
        `${baseUrl}/brainGym/getBrainGymAndCheckForDelay`,
        params,
    );
}

export const brainGymServices = {
    addBrainGym,
    completeChest,
    getAllBrainGym,
    getMasterBrainGymById,
    getBrainGymById,
    getBrainGymAndCheckForDelay,
};

export default {};
