import React from 'react';
import { Router, Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom';


const AppRouter () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                
            
            </Switch>
        
        </div>
    
    </BrowserRouter>
);