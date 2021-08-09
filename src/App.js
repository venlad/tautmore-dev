import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouteEnum from "./constants/RouteEnum";
import Home from "./views/pages/home/Home";
import Subject from "./views/pages/subject/Subject"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={RouteEnum.HOME} component={Home} />
        <Route exact={true} path={RouteEnum.SUBJECT} component={Subject} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
