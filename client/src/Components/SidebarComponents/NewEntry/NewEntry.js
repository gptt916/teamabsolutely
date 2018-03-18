import React from 'react';
import classes from './NewEntry.css';
  
const newEntry = (props) => {
    return (
        <div> 
            <button 
            onClick={props.click}>Submit New Post</button>
        </div>
    );
};

export default newEntry;