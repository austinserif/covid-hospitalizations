import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewViz from '../pages/NewViz';

const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <NewViz />
            </Route>
            <Redirect/>
        </Switch>
    );
}

export default Routes;