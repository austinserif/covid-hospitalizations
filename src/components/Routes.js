import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Visualization from '../pages/Visualization';

const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/map">
                <Visualization />
            </Route>
        </Switch>
    );
}

export default Routes;