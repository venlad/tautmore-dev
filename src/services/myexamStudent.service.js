import config from '../helpers/config';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${config.apiBaseUrl}`;

function startExam(params) {
    return fetchWrapper.post(
        `${baseUrl}/exam-results/start-exam`,
        params,
    );
}
function questionInExam(params) {
    return fetchWrapper.post(
        `${baseUrl}/exam-results/questions-in-exam`,
        params,
    );
}
function finishExam(params) {
    return fetchWrapper.post(
        `${baseUrl}/exam-results/finish-exam`,
        params,
    );
}
function myReport(params) {
    return fetchWrapper.post(
        `${baseUrl}/exam-results/my-report`,
        params,
    );
}
function previousExam(params) {
    return fetchWrapper.post(
        `${baseUrl}/exam-results/previous-exams-history`,
        params,
    );
}
function upcomingExam(params) {
    return fetchWrapper.post(
        `${baseUrl}/exam-results/upcoming-exams`,
        params,
    );
}
function myReportAnalytics(params) {
    return fetchWrapper.post(
        `${baseUrl}/exam-results/my-report-analytics`,
        params,
    );
}

export const myexamStudentServices = {
    startExam,
    questionInExam,
    finishExam,
    myReport,
    previousExam,
    upcomingExam,
    myReportAnalytics,
};

export default {};
