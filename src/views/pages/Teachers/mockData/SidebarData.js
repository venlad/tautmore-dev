import Dashboardicon from '../../../../assets/images/dashboardicon.png';
import Mysubjecticon from '../../../../assets/images/mysubjectsicon.png';
import Notificationicon from '../../../../assets/images/notificationsicon.png';
import Settingicon from '../../../../assets/images/settingicon.png';
import Helpdeskicon from '../../../../assets/images/helpdeskicon.png';
import Logouticon from '../../../../assets/images/logouticon.png';
import { viewTypeData } from './DashboardViewData';

export const sidebardata = {
    title: 'OVERVIEW',
    data: [
        {
            title: 'Dashboard',
            image: Dashboardicon,
            to: viewTypeData?.DASHBOARD,
        },
        {
            title: 'My classes',
            image: Dashboardicon,
            to: viewTypeData?.CLASSES,
        },
        {
            title: 'My calendar',
            image: Dashboardicon,
            to: viewTypeData?.CALENDAR,
        },
        {
            title: 'My students',
            image: Dashboardicon,
            to: viewTypeData?.STUDENTS,
        },
        {
            title: 'My subjects',
            image: Mysubjecticon,
            to: viewTypeData?.SUBJECTS,
        },
        {
            title: 'My payments',
            image: Dashboardicon,
            to: viewTypeData?.PAYMENTS,
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
            title: 'Settings',
            image: Settingicon,
        },
        {
            title: 'Help desk',
            image: Helpdeskicon,
        },
        {
            title: 'Logout',
            image: Logouticon,
        },
    ],
};
