import React from 'react';
import classes from './NewEntryForm.css';
  
const newEntryForm = (props) => {
    return (
        <div id={classes.overlay}
        style={{display: props.showOverlay === true ? 'block' : 'none'}}>
            <div className={classes.newEntryForm}>
                <div> Name</div>
                <input type='text'/>
                <div> URL</div>
                <input type='text'/>
                <div><input type="submit" value="Submit" /></div>
                <div><button onClick={props.toggleOverlay}>Close</button></div>
            </div>
        </div>
    );
};

export default newEntryForm;