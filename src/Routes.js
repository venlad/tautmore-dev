import RouteEnum from "./constants/RouteEnum";
import Home from "./views/pages/home/Home";
import Subject from "./views/pages/subject/Subject";
import Grades from "./views/pages/grades/Grades";
import Chapters from "./views/pages/Chapters";

export const routes = [
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
];
