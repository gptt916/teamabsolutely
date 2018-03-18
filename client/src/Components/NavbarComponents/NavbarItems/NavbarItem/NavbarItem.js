import React from 'react';

const navbarItem = (props) => {
    return (
            <li><a href={props.destination}>{props.text}</a></li>
    );
};

export default navbarItem;
