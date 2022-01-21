import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function startTest(params) {
    return fetchWrapper.post(`${baseUrl}/brain-gym/start-test`, params);
}

function chestInfo(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/chest-info`, params);
}

function getQuestionInChest(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/question-in-chest`, params);
}

function attemptQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/attempt-question`, params);
}

function completeChest(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/complete-chest`, params);
}

function masterDetails(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/master-details`, params);
}

function lastFiveAttempts(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/last-5-attempts`, params);
}

function incorrectAnswer(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/review-incorrect-answers`, params);
}

function longestStreak(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/longest-streak`, params);
}

function updateRemainingTime(params) {
    return fetchWrapper.post(`${baseUrl}/brainGym/update-remaining-time`, params);
}

export const brainGymNewServices = {
    startTest,
    chestInfo,
    getQuestionInChest,
    attemptQuestion,
    completeChest,
    masterDetails,
    lastFiveAttempts,
    incorrectAnswer,
    longestStreak,
    updateRemainingTime,
};

export default {};
