import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./Layout";
import Landing from "./Landing";

import '../styles/index.scss';

const App: React.FC = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route exact path="/home">
                        <Landing />
                    </Route>
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
        </Layout>
    );
};

export default App;
