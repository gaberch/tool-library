import React from 'react';
import { Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Tools from '../components/Tools';
import NotFoundPage from '../components/NotFoundPage';
import Tool from '../components/Tool';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/browse-tools" component={Tools} exact={true} />
                <Route 
                    path="/browse-tools/:id"
                    component={Tool}
                />
                <Route component={NotFoundPage} />
        
            </Switch>
        
        </div>
    
    </BrowserRouter>
);

export default AppRouter;

// render={() => <Tool test="I made it" />}