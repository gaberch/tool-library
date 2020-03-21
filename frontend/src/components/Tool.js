import React from 'react';
import { Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom';

export default class Tool extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                My Tool has id: {this.props.route.test}
            </div>
        );
    }

}