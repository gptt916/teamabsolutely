import React from 'react';
import classes from './Logo.css';
import navLogo from '../../../assets/logo.png'

const logo = (props) => {
    return (
        <img alt="logo" src={navLogo} className={classes.logo}/>
    );
};

export default logo;