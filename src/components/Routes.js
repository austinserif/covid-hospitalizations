import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NewViz from '../pages/NewViz';

const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/map">
                <NewViz />
            </Route>
        </Switch>
    );
}

export default Routes;