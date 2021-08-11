import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import { routes } from "./Routes";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          {routes.map((data) => (
            <Route
              key={data.key}
              exact={true}
              path={data.path}
              component={data.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
