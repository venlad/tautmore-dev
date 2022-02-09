import * as Yup from 'yup';

export const calendar = [
    {
        day: 'MON',
        date: [
            '30',
            '06',
            '13',
            '20',
            '27',
        ],
    },
    {
        day: 'TUE',
        date: [
            '31',
            '07',
            '14',
            '21',
            '28',
        ],
    },
    {
        day: 'WED',
        date: [
            '01',
            '08',
            '15',
            '22',
            '29',
        ],
    },
    {
        day: 'THU',
        date: [
            '02',
            '09',
            '16',
            '23',
            '30',
        ],
    },
    {
        day: 'FRI',
        date: [
            '03',
            '10',
            '17',
            '24',
            '01',
        ],
    },
    {
        day: 'SAT',
        date: [
            '04',
            '11',
            '18',
            '25',
            '02',
        ],
    },
    {
        day: 'SUN',
        date: [
            '05',
            '12',
            '19',
            '26',
            '03',
        ],
    },
];

export const timeTable = [
    {
        time: '10:30 - 11:30 AM',
        subject: 'Mathematics (Grade 4)',
    },
    {
        time: '12:00 - 01:00 PM',
        subject: 'English (Grade 4)',
    },
    {
        time: '10:30 - 11:30 AM',
        subject: 'Science (Grade 4)',
    },
];

export const leaves = [
    {
        from: 'Aug 21, 2021',
        to: 'Aug 24, 2021',
        comments: 'Going on a vacation',
        status: 'Pending',
        edit: true,
    },
    {
        from: 'Jul 21, 2021',
        to: 'Jul 21, 2021',
        comments: 'Feeling sick',
        status: 'Approved',
        edit: false,
    },
    {
        from: 'May 15, 2021',
        to: 'May 17, 2021',
        comments: 'Native trip',
        status: 'Denied',
        edit: false,
    },
    {
        from: 'Aug 21, 2021',
        to: 'Aug 24, 2021',
        comments: 'Going on a vacation',
        status: 'Cancelled',
        edit: false,
    },
];

export const leaveValidation = Yup.object().shape({
    fromDate: Yup.string().required('From date is Required'),
    toDate: Yup.string().required('To date is Required'),
    reason: Yup.string().required('Reason is Required'),
});

export default {};
