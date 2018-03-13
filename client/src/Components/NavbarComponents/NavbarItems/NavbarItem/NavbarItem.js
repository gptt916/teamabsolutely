import React from 'react';
import classes from './NavbarItem.css';

const navbarItem = (props) => {
    return (
            <li><a href={props.destination}>{props.text}</a></li>
    );
};

export default navbarItem;
