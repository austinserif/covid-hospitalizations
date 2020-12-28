import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <Home />
            </Route>
            <Redirect to="/"/>
        </Switch>
    );
}

export default Routes;