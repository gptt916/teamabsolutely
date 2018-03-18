import React from 'react';
import classes from './SearchField.css';
  
const searchField = (props) => {
    const style ={
        inputBox : {
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            width: '75%'
        },
        searchComponents:{
        }
      };

    return (
        <form onSubmit={props.handleSubmit} style={style.searchComponents}>
            <label>
                <div>Search:</div>
                <input type="text" style={style.inputBox} value={props.value} onChange={(event)=>props.onSearchInput(event.target.value)} />
            </label>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default searchField;

