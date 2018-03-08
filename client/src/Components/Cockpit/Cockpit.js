import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
   
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello World </h1>
            <p className={assignedClasses.join(' ')}>This is a react app</p>
            <button className={btnClass}
            onClick={props.clicked}>
            Toggle
            </button>
        </div>
    );
}

export default cockpit;