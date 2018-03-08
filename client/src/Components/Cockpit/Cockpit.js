import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };
    
      if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
      }
    const classes = [];
    
    if (props.persons.length <= 2) {
      classes.push('red');
    }

    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div>
            <h1>Hello World </h1>
            <p className={classes.join(' ')}>This is a react app</p>
            <button 
            onClick={props.clicked}
            style={style}>
            Toggle
            </button>
        </div>
    );
}

export default cockpit;