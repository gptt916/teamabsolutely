import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import './NavbarItems.css';

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
            <ul onClick = {props.toggleOverlay}>
                {items}
            </ul>
        </nav>
    );
};

export default navbarItems;