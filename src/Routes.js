import RouteEnum from './constants/RouteEnum';
import Home from './views/pages/home/Home';
import Subject from './views/pages/subject/Subject';
import Grades from './views/pages/grades/Grades';
import Register from './views/components/auth/register/Index';
import Chapters from './views/pages/Chapters';
import PracticeTest from './views/pages/PracticeTest/PracticeTest';
import Dashboard from './views/components/dashboard/Dashboard';
import Braingym from './views/pages/Brain-gym/Braingym';
import Olympiad from './views/pages/Olympiad/Olympiad';

const routes = [
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
        path: RouteEnum.DASHBOARD,
        component: Dashboard,
    },
    {
        key: 7,
        path: RouteEnum.BRAINGYM,
        component: Braingym,
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
];

export default routes;
