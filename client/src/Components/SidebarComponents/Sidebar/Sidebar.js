import React from 'react';
import classes from './Sidebar.css';
import SidebarItems from '../SidebarItems/SidebarItems';

const sidebar = (props) => {
    return (
        <div className={classes.container}>
            <SidebarItems sidebarItems={props.sidebarItems}/>
        </div>
    );
};

export default sidebar;

