import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Visualization from '../pages/Visualization';

const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/" component={Home}/>
            <Route exact path="/map" component={Visualization}/>
        </Switch>
    );
}

export default Routes;