import React from 'react';
import classes from './NavbarItems.css';
import NavbarItem from './NavbarItem/NavbarItem';

const navbarItems = (props) => {
    const items = props.navbarItems.map((item, index) => {
        return(
            <NavbarItem
                destination={item.dest}
                text={item.text}
                key={index}
            />
        )
    });

    return ( 
        <nav>
            <ul>
                {items}
            </ul>
        </nav>
    );
};

export default navbarItems;