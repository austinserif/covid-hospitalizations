import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Visualization from '../pages/Visualization';

const Routes = ({ isLoading }) => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <Home isLoading={isLoading}/>
            </Route>
            <Route exact path="/map">
                <Visualization isLoading={isLoading}/>
            </Route>
        </Switch>
    );
}

export default Routes;