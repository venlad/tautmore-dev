import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function addQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/local/api/questions/addQuestion`, params);
}

function bulkAddQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/local/api/questions/bulkAddQuestion`, params);
}

function getQuestions() {
    return fetchWrapper.get(`${baseUrl}/local/api/questions/getQuestions`);
}

function getAllQuestions(page_no) {
    return fetchWrapper.get(`${baseUrl}/local/api/questions/getAllQuestions/${page_no}`);
}

function editQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/dev/api/questions/editQuestion`, params);
}

function getQuestionByid(params) {
    return fetchWrapper.post(`${baseUrl}/dev/api/questions/getQuestionByid`, params);
}

function getQuestionsByDifficultTag(params) {
    return fetchWrapper.post(`${baseUrl}/local/api/questions/getQuestionsByDifficultTag`, params);
}

function attemptQuestion(params) {
    return fetchWrapper.post(`${baseUrl}/local/api/questions/attemptQuestion`, params);
}

function searchForQuestion(id) {
    return fetchWrapper.get(`${baseUrl}/dev/api/questions/searchForQuestion/${id}`);
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
