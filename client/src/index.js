import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/Table';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/grails.css';
import './css/main.css';
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

function Index() {
    return (<BrowserRouter forceRefresh={true}>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
        </Switch>
    </BrowserRouter>

    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
