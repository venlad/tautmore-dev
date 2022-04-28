import RouteEnum from './constants/RouteEnum';
import Home from './views/pages/home/Home';
import Subject from './views/pages/subject/Subject';
import Grades from './views/pages/grades/Grades';
import Register from './views/components/auth/register/Index';
import Chapters from './views/pages/Chapters';
import PracticeTest from './views/pages/PracticeTest/PracticeTest';
import Dashboard from './views/components/dashboard/Dashboard';
// import Olympiad from './views/pages/Olympiad/Olympiad';
import Login from './views/components/auth/login/Login';
import Homepage from './views/components/skeleton/Homepage/Homepage';
import Teachers from './views/pages/Teachers/Teachers';
import ExamDetails from './views/pages/Teachers/ExamDetails';
import AboutUsTeacher from './views/pages/AboutUsTeacher/About';
import AboutUsParent from './views/pages/AboutUsParent/About';
import ZoomClassContainer from './views/pages/Teachers/Rightsidepart/MyClass/ZoomClassContainer';
import Olympiad from './views/pages/Olympiad/Olympiad';
import SubTopic from './views/pages/SubTopic/SubTopic';
import CoCorricular from './views/pages/CoCorricular';

const routes = [
    {
        key: 17,
        path: RouteEnum.EXAMDETAILS,
        component: ExamDetails,
    },
    {
        key: 1,
        path: RouteEnum.HOME,
        component: Home,
    },
    {
        key: 2,
        path: RouteEnum.SUBJECT,
        component: Subject,
    },
    {
        key: 3,
        path: RouteEnum.GRADES,
        component: Grades,
    },
    {
        key: 4,
        path: RouteEnum.CHAPTERS,
        component: Chapters,
    },
    {
        key: 5,
        path: RouteEnum.ABOUTUS_TEACHER,
        component: AboutUsTeacher,
    },
    {
        key: 6,
        path: RouteEnum.ABOUTUS_PARENT,
        component: AboutUsParent,
    },
    {
        key: 7,
        path: RouteEnum.PRACTICE_TEST,
        component: PracticeTest,
    },
    {
        key: 8,
        path: RouteEnum.DASHBOARDHOME,
        component: Dashboard,
    },
    {
        key: 9,
        path: RouteEnum.DASHBOARD,
        component: Dashboard,
    },
    {
        key: 10,
        path: RouteEnum.REGISTER,
        component: Register,
    },
    {
        key: 11,
        path: RouteEnum.OLYMPIAD,
        component: Olympiad,
    },
    {
        key: 12,
        path: RouteEnum.LOGIN,
        component: Login,
    },
    {
        key: 13,
        path: RouteEnum.HOMESKELETON,
        component: Homepage,
    },
    {
        key: 14,
        path: RouteEnum.TEACHERSHOME,
        component: Teachers,
    },
    {
        key: 15,
        path: RouteEnum.TEACHERS,
        component: Teachers,
    },
    {
        key: 16,
        path: RouteEnum.ZOOMCALL,
        component: ZoomClassContainer,
    },
    {
        key: 18,
        path: RouteEnum.SUBTOPIC,
        component: SubTopic,
    },
    {
        key: 19,
        path: RouteEnum.COCORRICULAR,
        component: CoCorricular,
    },
];

export default routes;
