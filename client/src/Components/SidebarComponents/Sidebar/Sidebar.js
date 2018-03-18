import React from 'react';
import classes from './Sidebar.css';
import TrendingItems from '../TrendingItems/TrendingItems';
import SearchField from '../SearchField/SearchField';
import NewEntry from '../NewEntry/NewEntry';
import NewEntryForm from '../NewEntry/NewEntryForm/NewEntryForm'

const sidebar = (props) => {
    return (
        <div className={classes.container}>
            <SearchField onSearchInput={props.onSearchInput}/>
            <TrendingItems trendingItems={props.trendingItems}/>
            <NewEntry toggleOverlay={props.toggleOverlay}/>
            <NewEntryForm toggleOverlay={props.toggleOverlay} showOverlay={props.showOverlay}/>
        </div>
    );
};

export default sidebar;

