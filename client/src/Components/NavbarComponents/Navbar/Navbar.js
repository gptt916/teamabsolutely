import React from 'react';
import classes from './Navbar.css';
import Logo from '../Logo/Logo';
import NavbarItems from '../NavbarItems/NavbarItems';

const navbar = (props) => {
    return (
        <div className={classes.container}>
            <Logo/>
            <NavbarItems navbarItems={props.navbarItems}/>
        </div>
    );
};

export default navbar;

