import React, { Component } from 'react';
import classes from './Sidebar.css';
import TrendingItems from '../TrendingItems/TrendingItems';
import SearchField from '../SearchField/SearchField';

import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className={classes.container}>
                <SearchField
                handleSubmit={this.props.handleSubmit}
                onSearchInput={this.props.onSearchInput}
                searchQueryValue={this.props.searchQueryValue}/>
                <TrendingItems
                trendingItems={this.props.trendingItems}
                getTrendingItems={this.props.getTrendingItems}
                getAllItems={this.props.getAllItems}/>
            </div>
        );
    }
}

export default withRouter(Sidebar);

