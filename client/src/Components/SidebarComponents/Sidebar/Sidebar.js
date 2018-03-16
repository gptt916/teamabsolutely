import React from 'react';
import classes from './Sidebar.css';
import SidebarItems from '../SidebarItems/SidebarItems';
import SearchField from '../SearchField/SearchField';

const sidebar = (props) => {
    return (
        <div className={classes.container}>
            <SearchField handleChange={props.onSearchInput}/>
            <SidebarItems sidebarItems={props.sidebarItems}/>
        </div>
    );
};

export default sidebar;

