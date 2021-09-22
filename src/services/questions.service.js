import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function addQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/questions/addQuestion`, params);
}

function bulkAddQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/questions/bulkAddQuestion`, params);
}

function getQuestions() {
    return fetchWrapper.get(`${baseUrl}/questions/getQuestions`);
}

function getAllQuestions(page_no) {
    return fetchWrapper.get(`${baseUrl}/questions/getAllQuestions/${page_no}`);
}

function editQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/questions/editQuestion`, params);
}

function getQuestionByid(params) {
    return fetchWrapper.post(`${baseUrl}/questions/getQuestionByid`, params);
}

function getQuestionsByDifficultTag(params) {
    return fetchWrapper.post(`${baseUrl}/questions/getQuestionsByDifficultTag`, params);
}

function attemptQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/questions/attemptQuestion`, params);
}

function searchForQuestion(id) {
    return fetchWrapper.get(`${baseUrl}/questions/searchForQuestion/${id}`);
}

export const questionsServices = {
    addQuestion,
    bulkAddQuestion,
    getQuestions,
    getAllQuestions,
    editQuestion,
    getQuestionByid,
    getQuestionsByDifficultTag,
    attemptQuestion,
    searchForQuestion,

};

export default {};
