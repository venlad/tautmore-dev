import { v4 as uuid } from 'uuid';
import myexams from '../../../../assets/images/design-tool.png';

const data = [
    {
        title: 'Pre-Kindergarten',
        to: '/pre-kindergarten',
    },
    {
        title: 'Kindergarten',
        to: '/kindergarten',
    },
    {
        title: 'Class 1',
        to: '/class-1',
    },
    {
        title: 'Class 2',
        to: '/class-2',
    },
    {
        title: 'Class 3',
        to: '/class-3',
    },
    {
        title: 'Class 4',
        to: '/class-4',
    },
    {
        title: 'Class 5',
        to: '/class-5',
    },
    {
        title: 'Class 6',
        to: '/class-6',
    },
    {
        title: 'Class 7',
        to: '/class-7',
    },
    {
        title: 'Class 8',
        to: '/class-8',
    },
    {
        title: 'Class 9',
        to: '/class-9',
    },
    {
        title: 'Class 10',
        to: '/class-10',
    },
];

export const sidebarData = [
    {
        title: 'Grades',
        data,
    },
];

const data1 = [
    {
        title: 'Mathematics',
        image: myexams,
    },
    {
        title: 'English',
        image: myexams,
    },
    {
        title: 'Science',
        image: myexams,
    },
];

const data2 = [
    {
        title: 'Singing',
        image: myexams,
    },
    {
        title: 'Dancing',
        image: myexams,
    },
    {
        title: 'Story writing',
        image: myexams,
    },
    {
        title: 'Crafts',
        image: myexams,
    },
    {
        title: 'Painting',
        image: myexams,
    },
    {
        title: 'Photography',
        image: myexams,
    },
];

const data3 = [
    {
        title: 'Daily',
        image: myexams,
    },
    {
        title: 'Weekly',
        image: myexams,
    },
];

const data4 = [
    {
        title: 'Monthly',
        image: myexams,
    },
    {
        title: 'Quarterly',
        image: myexams,
    },
    {
        title: 'Half-yearly',
        image: myexams,
    },
    {
        title: 'Annually',
        image: myexams,
    },
];

export const rightpartData = [
    {
        key: uuid(),
        title: 'CLASSROOM',
        data: data1,
    },
    {
        key: uuid(),
        title: 'CO-CURRICULAR',
        data: data2,
    },
    {
        key: uuid(),
        title: 'BRAIN-GYM',
        data: data3,
    },
    {
        key: uuid(),
        title: 'OLYMPIAD',
        data: data4,
    },
];
