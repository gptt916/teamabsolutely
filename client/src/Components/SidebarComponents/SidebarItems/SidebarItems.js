import React from 'react';
import classes from './SidebarItems.css';
import SidebarItem from './SidebarItem/SidebarItem';

const sidebarItems = (props) => {
    const items = props.sidebarItems.map((item, index) => {
        return(
            <SidebarItem
                destination={item.dest}
                text={item.text}
                key={index}
            />
        )
    });

    return ( 
        <side>
            <ul>
                {items}
            </ul>
        </side>
    );
};

export default sidebarItems;