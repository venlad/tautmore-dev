import RouteEnum from "./constants/RouteEnum";
import Home from "./views/pages/home/Home";
import Subject from "./views/pages/subject/Subject";

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
];
