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
                toggleOverlay={props.toggleOverlay}
                nameText={props.nameText}
                urlText={props.urlText}
                onNameInput={props.onNameInput}
                onURLInput={props.onURLInput}
                onNewItemSubmit={props.onNewItemSubmit} />
        </div>
    );
};

export default navbar;

