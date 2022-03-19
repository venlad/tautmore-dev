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
import ZoomClassContainer from './views/pages/Teachers/Rightsidepart/MyClass/ZoomClassContainer';
import Olympiad from './views/pages/Olympiad/Olympiad';

const routes = [
    {
        key: 13,
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
        path: RouteEnum.PRACTICE_TEST,
        component: PracticeTest,
    },
    {
        key: 6,
        path: RouteEnum.DASHBOARDHOME,
        component: Dashboard,
    },
    {
        key: 7,
        path: RouteEnum.DASHBOARD,
        component: Dashboard,
    },
    {
        key: 8,
        path: RouteEnum.REGISTER,
        component: Register,
    },
    {
        key: 9,
        path: RouteEnum.OLYMPIAD,
        component: Olympiad,
    },
    {
        key: 10,
        path: RouteEnum.LOGIN,
        component: Login,
    },
    {
        key: 11,
        path: RouteEnum.HOMESKELETON,
        component: Homepage,
    },
    {
        key: 6,
        path: RouteEnum.TEACHERSHOME,
        component: Teachers,
    },
    {
        key: 12,
        path: RouteEnum.TEACHERS,
        component: Teachers,
    },
    {
        key: 14,
        path: RouteEnum.ZOOMCALL,
        component: ZoomClassContainer,
    },

];

export default routes;
