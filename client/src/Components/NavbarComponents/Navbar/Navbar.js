import React from 'react';
import classes from './Navbar.css';
import Logo from '../Logo/Logo';
import NavbarItems from '../NavbarItems/NavbarItems';
import NewEntryForm from '../NewEntryForm/NewEntryForm'
const navbar = (props) => {
    return (
        <div className={classes.container}>
            <Logo/>
            <NavbarItems 
                toggleOverlay={props.toggleOverlay} 
                navbarItems={props.navbarItems}/>
            <NewEntryForm 
                showOverlay={props.showOverlay}
                toggleOverlay={props.toggleOverlay} />
        </div>
    );
};

export default navbar;

