import React from 'react';
import classes from './Sidebar.css';
import TrendingItems from '../TrendingItems/TrendingItems';
import SearchField from '../SearchField/SearchField';
import NewEntry from '../NewEntry/NewEntry';

const sidebar = (props) => {
    return (
        <div className={classes.container}>
            <SearchField onSearchInput={props.onSearchInput}/>
            <TrendingItems trendingItems={props.trendingItems}/>
            <NewEntry click={props.click}/>
        </div>
    );
};

export default sidebar;

