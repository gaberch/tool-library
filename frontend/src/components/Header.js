import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Tool Library</h1>
        <NavLink to ="/" activeClassName='is-active' exact={true}>  Home  </NavLink>
        <NavLink to="/browse-tools" activeClassName='is-active' exact={true}>  Browse Tools  </NavLink>
    </header>
);

export default Header;