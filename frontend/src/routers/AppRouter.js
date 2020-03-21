import React from 'react';
import { Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Tools from '../components/Tools';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/tools" component={Tools} exact={true} />
        
            </Switch>
        
        </div>
    
    </BrowserRouter>
);

export default AppRouter;