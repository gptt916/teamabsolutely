import React, { Component } from 'react';
import classes from './Sidebar.css';
import TrendingItems from '../TrendingItems/TrendingItems';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className={classes.container}>
                <TrendingItems/>
            </div>
        );
    }
}

export default withRouter(Sidebar);

