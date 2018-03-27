import React from 'react';
import classes from './NewEntryForm.css';
  
const newEntryForm = (props) => {
    return (
        <div id={classes.overlay}
        style={{display: props.showOverlay === true ? 'block' : 'none'}}>
            <div className={classes.newEntryForm}>
                <div> Name</div>
                <input type='text' value={props.nameText} onChange={(event) => props.onNameInput(event.target.value)}/>
                <div> URL</div>
                <input type='text' value={props.urlText} onChange={(event) => props.onURLInput(event.target.value)}/>
                <div><input onClick={() => {props.onNewItemSubmit(props.nameText, props.urlText); props.toggleOverlay()}}type="submit" value="Submit"/></div>
                <div><button onClick={props.toggleOverlay}>Close</button></div>
            </div>
        </div>
    );
};

export default newEntryForm;