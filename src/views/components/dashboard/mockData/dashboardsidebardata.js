import Dashboardicon from '../../../../assets/images/dashboardicon.png';
import Mysubjecticon from '../../../../assets/images/mysubjectsicon.png';
import Myexamicon from '../../../../assets/images/myexamsicon.png';
import Myassignmenticon from '../../../../assets/images/myassignmenticon.png';
import Notificationicon from '../../../../assets/images/notificationsicon.png';
import Referfriendicon from '../../../../assets/images/refericon.png';
import Settingicon from '../../../../assets/images/settingicon.png';
import Helpdeskicon from '../../../../assets/images/helpdeskicon.png';
// import Logouticon from '../../../../assets/images/logouticon.png';
import BrainGymicon from '../../../../assets/images/braingym-icon.png';
import { viewTypeData } from './dashboardViewData';

export const sidebardata =     {
    title: 'OVERVIEW',
    data: [
        {
            title: 'Dashboard',
            image: Dashboardicon,
            to: '',
        },
        {
            title: 'My subjects',
            image: Mysubjecticon,
            to: viewTypeData?.SUBJECT,
        },
        {
            title: 'My exams',
            image: Myexamicon,
            to: viewTypeData?.EXAMS,
        },
        {
            title: 'Brain gym',
            image: BrainGymicon,
            to: viewTypeData?.BRAIN_GYM,
        },
        {
            title: 'My assignments',
            image: Myassignmenticon,
            to: viewTypeData?.ASSIGNMENTS,
        },
        {
            title: 'My classes',
            image: Dashboardicon,
            to: viewTypeData?.CLASSES,
        },
        {
            title: 'My subscriptions',
            image: Dashboardicon,
            to: viewTypeData?.SUBSCRIPTIONS,
        },
    ],
};
export const accountData = {
    title: 'Account',
    data: [
        {
            title: 'Notifications',
            image: Notificationicon,
        },
        {
            title: 'Refer a friend',
            image: Referfriendicon,
        },
        {
            title: 'Settings',
            image: Settingicon,
        },
        {
            title: 'Help desk',
            image: Helpdeskicon,
        },
        // {
        //     title: 'Logout',
        //     image: Logouticon,
        // },
    ],
};
