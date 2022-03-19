import { v4 as uuid } from 'uuid';

export const examlist = [
    {
        title: 'Exam list',
        data: [
            {
                grade2: 'Mathematics',
                datetime: '04 Jul 2021 — 10 : 54 PM',
                totalscore: '270 poits',
                accurancy: '90 %',
                rightanswers: '27 out of 30',
                timetaken: '10 : 00 (Minutes)',
                key: uuid(),
            },
            {
                grade2: 'Mathematics',
                datetime: '04 Jul 2021 — 10 : 54 PM',
                totalscore: '270 poits',
                accurancy: '90 %',
                rightanswers: '27 out of 30',
                timetaken: '10 : 00 (Minutes)',
                key: uuid(),
            },
            {
                grade2: 'Mathematics',
                datetime: '04 Jul 2021 — 10 : 54 PM',
                totalscore: '270 poits',
                accurancy: '90 %',
                rightanswers: '27 out of 30',
                timetaken: '10 : 00 (Minutes)',
                key: uuid(),
            },
        ],
    },
];

export const allsubject = [
    'All subject - 1',
    'All subject - 2',
];

export const alltime = [
    { name: 'All time', value: '' },
    { name: 'last 7 days', value: 'last_7_days' },
    { name: 'last 30 days', value: 'last_30_days' },
    { name: 'last 365 days', value: 'last_365_days' },

];
