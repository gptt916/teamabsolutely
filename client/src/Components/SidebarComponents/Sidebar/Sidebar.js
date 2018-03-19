import React from 'react';
import classes from './Sidebar.css';
import TrendingItems from '../TrendingItems/TrendingItems';
import SearchField from '../SearchField/SearchField';
import NewEntry from '../NewEntry/NewEntry';
import NewEntryForm from '../NewEntry/NewEntryForm/NewEntryForm'

const sidebar = (props) => {
    return (
        <div className={classes.container}>
            <TrendingItems trendingItems={props.trendingItems}/>
        </div>
    );
};

export default sidebar;

