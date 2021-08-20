import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((data) => (
                    <Route
                        key={data.key}
                        exact
                        path={data.path}
                        component={data.component}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
