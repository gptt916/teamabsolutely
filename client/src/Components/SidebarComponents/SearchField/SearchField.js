import React from 'react';
import classes from './SearchField.css';
  
const searchField = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Search:
                <input type="text" value={props.value} onChange={(event)=>props.handleChange(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default searchField;

