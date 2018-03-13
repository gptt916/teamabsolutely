import React from 'react';
import classes from './SidebarItem.css';

const sidebarItem = (props) => {
    return (
            <li><a href={props.destination}>{props.text}</a></li>
    );
};

export default sidebarItem;
