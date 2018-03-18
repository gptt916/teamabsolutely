import React from 'react';
import classes from './Sidebar.css';
import TrendingItems from '../TrendingItems/TrendingItems';
import SearchField from '../SearchField/SearchField';
import NewEntry from '../NewEntry/NewEntry';
import NewEntryForm from '../NewEntry/NewEntryForm/NewEntryForm'

const sidebar = (props) => {
    console.log(props.showOverlay);
    // console.log(props.trendingItems);
    return (
        <div className={classes.container}>
            <SearchField onSearchInput={props.onSearchInput}/>
            <TrendingItems trendingItems={props.trendingItems}/>
            <NewEntry click={props.click}/>
            <NewEntryForm showOverlay={props.showOverlay}/>
        </div>
    );
};

export default sidebar;

